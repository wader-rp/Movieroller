import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = (url) => {
    setLoading(true);
    axios
      .get(url)

      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, getData, error, loading };
};
