import fetch from 'node-fetch';

interface GraphQLResponse {
  data?: any;
  errors?: any;
}

// Function to execute GraphQL queries with timeout
const executeQuery = async (query: string, variables: any = {}, token: string = '', timeout: number = 5000): Promise<GraphQLResponse> => {
  const controller = new AbortController();
     const signal = controller.signal;

  const fetchTimeout = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({ query, variables }),
      signal
    });

    clearTimeout(fetchTimeout);
    return response.json() as Promise<GraphQLResponse>;
  } catch (error) {
    clearTimeout(fetchTimeout);
    console.error('Fetch error:', error);
    return { errors: [error] };
  }
};

// Login and get token
const login = async (username: string, password: string): Promise<string | null> => {
  const query = `
    mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        username
        role
      }
    }
  `;
  const variables = { username, password };
  const response = await executeQuery(query, variables);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return `Bearer ${username}`;
};

// Adding a product
const addProduct = async (name: string, price: number, token: string): Promise<any | null> => {
  const query = `
    mutation AddProduct($name: String!, $price: Float!) {
      addProduct(name: $name, price: $price) {
        id
        name
        price
      }
    }
  `;
  const variables = { name, price };
  const response = await executeQuery(query, variables, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.addProduct;
};

// Fetching products
const getProducts = async (token: string): Promise<any[] | null> => {
  const query = `
    query {
      products {
        id
        name
        price
      }
    }
  `;
  const response = await executeQuery(query, {}, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.products;
};

// Main function to run the tasks
(async () => {
  const token = await login('admin', 'admin');
  if (!token) {
    console.error('Failed to login');
    return;
  }

  console.log('Fetching products...');
  const products = await getProducts(token);
  console.log('Products:', products);

  console.log('Adding a new product...');
  const newProduct = await addProduct('Tablet', 299.99, token);
  console.log('Added product:', newProduct);

  console.log('Fetching products again...');
  const updatedProducts = await getProducts(token);
  console.log('Products:', updatedProducts);
})();