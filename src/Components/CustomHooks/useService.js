import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("../serviceData.json")
      .then((data) => setData(data.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    setError,
  };
};

export default useService;
