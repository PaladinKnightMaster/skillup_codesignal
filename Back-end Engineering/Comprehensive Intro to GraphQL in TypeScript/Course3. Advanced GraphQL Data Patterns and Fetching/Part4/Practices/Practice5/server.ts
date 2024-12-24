// import { ApolloServer, gql } from 'apollo-server';
// import DataLoader from 'dataloader';

// // Sample data
// const ingredients = [
//   { id: '1', name: 'Tomato' },
//   { id: '2', name: 'Cheese' }
// ];
// const dishes = [
//   { id: '1', name: 'Tomato Soup', ingredient: '1' },
//   { id: '2', name: 'Cheese Pizza', ingredient: '2' }
// ];
// const restaurants = [
//   { id: '1', name: 'Italian Bistro', dishes: ['1', '2'] }
// ];

// // TODO: Define schema
// const typeDefs = gql`
//   // TODO: Define Ingredient type
//   // Fields: 'id', 'name'
//   type Ingredient {
//   }

//   // TODO: Define Dish type with nested Ingredient type
//   // Fields: 'id', 'name', 'ingredient'
//   type Dish {
//   }

//   // TODO: Define Restaurant type with nested Dish type
//   // Fields: 'id', 'name', 'dishes'
//   type Restaurant {
//   }

//   // Define Query type with dishes and restaurant queries
//   type Query {
//     dishes: [Dish]
//     restaurant(id: ID!): Restaurant
//   }
// `;

// // TODO: Implement Resolvers using DataLoader
// const resolvers = {
//   Query: {
//     dishes: ______,
//     restaurant: ______
//   },
//   Dish: {
//     ingredient: ______
//   },
//   Restaurant: {
//     dishes: ______
//   }
// };

// // TODO: Initialize ingredient DataLoader
// const ingredientLoader = new DataLoader(______);

// // TODO: Initialize restaurant DataLoader
// const restaurantLoader = new DataLoader(______);

// // TODO: Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => (______)
// });

// // TODO: Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import DataLoader from 'dataloader';

// Sample data
const ingredients = [
  { id: '1', name: 'Tomato' },
  { id: '2', name: 'Cheese' },
];
const dishes = [
  { id: '1', name: 'Tomato Soup', ingredient: '1' },
  { id: '2', name: 'Cheese Pizza', ingredient: '2' },
];
const restaurants = [
  { id: '1', name: 'Italian Bistro', dishes: ['1', '2'] },
];

// Define schema
const typeDefs = gql`
  type Ingredient {
    id: ID!
    name: String!
  }

  type Dish {
    id: ID!
    name: String!
    ingredient: Ingredient
  }

  type Restaurant {
    id: ID!
    name: String!
    dishes: [Dish]
  }

  type Query {
    dishes: [Dish]
    restaurant(id: ID!): Restaurant
  }
`;

// Resolvers
const resolvers = {
  Query: {
    dishes: () => dishes,
    restaurant: (_: unknown, { id }: { id: string }, { restaurantLoader }: { restaurantLoader: DataLoader<string, typeof restaurants[0]> }) =>
      restaurantLoader.load(id),
  },
  Dish: {
    ingredient: (dish: { ingredient: string }, _: unknown, { ingredientLoader }: { ingredientLoader: DataLoader<string, typeof ingredients[0]> }) =>
      ingredientLoader.load(dish.ingredient),
  },
  Restaurant: {
    dishes: (restaurant: { dishes: string[] }) =>
      restaurant.dishes.map(dishId => dishes.find(dish => dish.id === dishId) || null),
  },
};

// Initialize ingredient DataLoader
const ingredientLoader = new DataLoader(async (ids: readonly string[]) => {
  const ingredientMap = new Map(ingredients.map(ingredient => [ingredient.id, ingredient]));
  return ids.map(id => ingredientMap.get(id) || null);
});

// Initialize restaurant DataLoader
const restaurantLoader = new DataLoader(async (ids: readonly string[]) => {
  const restaurantMap = new Map(restaurants.map(restaurant => [restaurant.id, restaurant]));
  return ids.map(id => restaurantMap.get(id) || null);
});

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    ingredientLoader,
    restaurantLoader,
  }),
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
