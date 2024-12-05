import fetch from 'node-fetch';

const querySongs = `
  query {
    songs {
      id
      title
      artist
    }
  }
`;

const querySong = (id: string) => `
  query {
    song(id: "${id}") {
      id
      title
      artist
    }
  }
`;

const addSongMutation = (title: string, artist: string) => `
  mutation {
    addSong(title: "${title}", artist: "${artist}") {
      id
      title
      artist
    }
  }
`;

const deleteSongMutation = (id: string) => `
  mutation {
    deleteSong(id: "${id}") {
      id
      title
      artist
    }
  }
`;

const url = 'http://localhost:4000/';

const makeRequest = async (query: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

// Make requests
(async () => {
  console.log("Query all songs:");
  await makeRequest(querySongs);

  console.log("Add a new song:");
  await makeRequest(addSongMutation("New Song", "New Artist"));

  console.log("Query all songs after addition:");
  await makeRequest(querySongs);

  console.log("Delete a song:");
  await makeRequest(deleteSongMutation("1"));

  console.log("Query all songs after deletion:");
  await makeRequest(querySongs);
})();