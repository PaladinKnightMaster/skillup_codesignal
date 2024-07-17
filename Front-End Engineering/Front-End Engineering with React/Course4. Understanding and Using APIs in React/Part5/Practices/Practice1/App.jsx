import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetchData;