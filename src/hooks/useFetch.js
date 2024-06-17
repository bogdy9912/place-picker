import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchData, setFetchData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch, please try again latter",
        });
      }
      setIsFetching(false);
    };

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchData,
    setFetchData,
    error,
  };
};

export default useFetch;
