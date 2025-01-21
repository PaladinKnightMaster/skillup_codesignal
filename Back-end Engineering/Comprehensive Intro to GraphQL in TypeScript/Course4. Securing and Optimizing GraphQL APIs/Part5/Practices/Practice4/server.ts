// import { ApolloServer, gql } from 'apollo-server';
// import { createTestClient } from 'apollo-server-testing';

// // Define schema
// const typeDefs = gql`
//   type Car {
//     id: ID!
//     make: String!
//     model: String!
//     year: Int!
//   }

//   type Query {
//     cars: [Car]
//     car(id: ID!): Car
//   }

//   type Mutation {
//     addCar(make: String!, model: String!, year: Int!): Car
//     deleteCar(id: ID!): Car
//   }
// `;

// // Sample data
// const cars = [
//   { id: '1', make: 'Toyota', model: 'Corolla', year: 2020 },
//   { id: '2', make: 'Honda', model: 'Civic', year: 2019 }
// ];

// const resolvers = {
//   Query: {
//     cars: () => cars,
//     car: (_: any, { id }: { id: string }) => cars.find(car => car.id === id),
//   },
//   Mutation: {
//     addCar: (_: any, { make, model, year }: { make: string, model: string, year: number }) => {
//       const newCar = { id: String(cars.length + 1), make, model, year };
//       cars.push(newCar);
//       return newCar;
//     },
//     deleteCar: (_: any, { id }: { id: string }) => {
//       const carIndex = cars.findIndex(car => car.id === id);
//       if (carIndex === -1) return null;
//       const [deletedCar] = cars.splice(carIndex, 1);
//       return deletedCar;
//     }
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // TODO: Create a test client

// // TODO: Define the `queryCars` function that queries all cars using the test client
// const queryCars = ____;

// // TODO: Define the `queryCarById` function that queries the car by its ID using the test client
// const queryCarById = ____;

// // TODO: Define the `addCar` function that calls mutation for adding a new car using the test client
// const addCar = ____;

// // TODO: Define the `deleteCar` function that calls mutation for deleting the car by its ID using the test client
// const deleteCar = ____;

// // Running the tests
// queryCars();
// queryCarById('1');
// addCar();
// deleteCar('2');

import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';

// Define schema
const typeDefs = gql`
  type Car {
    id: ID!
    make: String!
    model: String!
    year: Int!
  }

  type Query {
    cars: [Car]
    car(id: ID!): Car
  }

  type Mutation {
    addCar(make: String!, model: String!, year: Int!): Car
    deleteCar(id: ID!): Car
  }
`;

// Sample data
const cars = [
  { id: '1', make: 'Toyota', model: 'Corolla', year: 2020 },
  { id: '2', make: 'Honda', model: 'Civic', year: 2019 }
];

const resolvers = {
  Query: {
    cars: () => cars,
    car: (_: any, { id }: { id: string }) => cars.find(car => car.id === id),
  },
  Mutation: {
    addCar: (_: any, { make, model, year }: { make: string, model: string, year: number }) => {
      const newCar = { id: String(cars.length + 1), make, model, year };
      cars.push(newCar);
      return newCar;
    },
    deleteCar: (_: any, { id }: { id: string }) => {
      const carIndex = cars.findIndex(car => car.id === id);
      if (carIndex === -1) return null;
      const [deletedCar] = cars.splice(carIndex, 1);
      return deletedCar;
    }
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Create a test client
const { query, mutate } = createTestClient(server as any);

// Define the `queryCars` function that queries all cars using the test client
const queryCars = async () => {
  const res = await query({
    query: gql`
      query {
        cars {
          id
          make
          model
          year
        }
      }
    `
  });
  console.log('All Cars:', res.data);
};

// Define the `queryCarById` function that queries the car by its ID using the test client
const queryCarById = async (id: string) => {
  const res = await query({
    query: gql`
      query {
        car(id: "${id}") {
          id
          make
          model
          year
        }
      }
    `
  });
  console.log(`Car with ID ${id}:`, res.data);
};

// Define the `addCar` function that calls mutation for adding a new car using the test client
const addCar = async () => {
  const res = await mutate({
    mutation: gql`
      mutation {
        addCar(make: "Ford", model: "Mustang", year: 2021) {
          id
          make
          model
          year
        }
      }
    `
  });
  console.log('Added Car:', res.data);
};

// Define the `deleteCar` function that calls mutation for deleting the car by its ID using the test client
const deleteCar = async (id: string) => {
  const res = await mutate({
    mutation: gql`
      mutation {
        deleteCar(id: "${id}") {
          id
          make
          model
          year
        }
      }
    `
  });
  console.log(`Deleted Car with ID ${id}:`, res.data);
};

// Running the tests
(async () => {
  await queryCars();
  await queryCarById('1');
  await addCar();
  await queryCars(); // Verify the added car
  await deleteCar('2');
  await queryCars(); // Verify the car is deleted
})();
