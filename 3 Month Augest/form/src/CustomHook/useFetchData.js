import { useEffect, useState } from "react";
import axios from "axios";

function useFetchData(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getApiData = async () => {
    try {
      setLoading(true);      
      const response = await axios.get(url);
      if (response) {
        setData(response);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return { data, loading, error };
}

export default useFetchData;