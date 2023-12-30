import axios from "axios";
import { useState } from "react";

export const useAxios = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const resetData = () => {
    setData(undefined);
    setError(undefined);
    setLoading(false);
  };

  const getData = () => {
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

  return { data, getData, error, loading, resetData };
};
