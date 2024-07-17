/*
import { useState, useEffect } from 'react';

const useFetchAuthor = authorId => {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`)
      .then(response => response.json())
      .then(data => {
        setAuthor(data);
      });
  }, [authorId]);

  return { author, loading };
};

export default useFetchAuthor;
*/
import { useState, useEffect } from 'react';

const useFetchAuthor = authorId => {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`)
      .then(response => response.json())
      .then(data => {
        setAuthor(data);
        setLoading(false);
      });
  }, [authorId]);

  return { author, loading };
};

export default useFetchAuthor;