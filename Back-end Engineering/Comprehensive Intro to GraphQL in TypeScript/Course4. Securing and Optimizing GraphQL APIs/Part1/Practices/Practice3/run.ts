// import fetch from 'node-fetch';

// const url = 'http://localhost:4000/graphql';

// // Function to login and get token
// async function login(username: string, password: string) {
//   const query = `
//     mutation {
//       login(username: "${username}", password: "${password}")
//     }
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   });
//   const data = await response.json() as { data: { login: string } };
//   return data.data.login;
// }

// // Function to query posts
// async function queryPosts(token: string) {
//   const query = `
//     query {
//       posts {
//         id
//         title
//         content
//       }
//     }
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify({ query }),
//   });
//   const data = await response.json() as { data: { posts: Array<{ id: string, title: string, content: string }> } };
//   return data;
// }

// // Function to add a new post
// async function addPost(token: string, title: string, content: string) {
//   const mutation = `
//     mutation {
//       addPost(title: "${title}", content: "${content}") {
//         id
//         title
//         content
//       }
//     }
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify({ query: mutation }),
//   });
//   const data = await response.json() as { data: { addPost: { id: string, title: string, content: string } } };
//   return data;
// }

// // Run the example
// (async () => {
//   // TODO: Setup the login + queryPosts + newPost flow accordingly
// })();

import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

// Function to login and get token
async function login(username: string, password: string) {
  const query = `
    mutation {
      login(username: "${username}", password: "${password}")
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json() as { data: { login: string } };
  return data.data.login;
}

// Function to query posts
async function queryPosts(token: string) {
  const query = `
    query {
      posts {
        id
        title
        content
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json() as { data: { posts: Array<{ id: string, title: string, content: string }> } };
  return data.data.posts;
}

// Function to add a new post
async function addPost(token: string, title: string, content: string) {
  const mutation = `
    mutation {
      addPost(title: "${title}", content: "${content}") {
        id
        title
        content
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query: mutation }),
  });
  const data = await response.json() as { data: { addPost: { id: string, title: string, content: string } } };
  return data.data.addPost;
}

// Run the example
(async () => {
  try {
    // Log in to get the token
    const token = await login('admin', 'admin');
    console.log('Token:', token);

    // Query the list of posts
    const posts = await queryPosts(token);
    console.log('Posts:', JSON.stringify(posts, null, 2));

    // Add a new post
    const newPost = await addPost(token, 'New Post Title', 'This is a new post content');
    console.log('New Post:', JSON.stringify(newPost, null, 2));
  } catch (error: any) {
    console.error('Error:', error.message);
  }
})();
