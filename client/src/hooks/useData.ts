import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}


const useData = <T>(requestConfig?: AxiosRequestConfig,deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
          const response = await axios.get<FetchResponse<T>>("http://localhost:5000/api/rawg",requestConfig); 
        console.log(response.data.results);
        if (response) {
          setData(response.data.results);
        } else {
          throw new Error("No data received from server");
        }
        setLoading(false);
      } catch (error) {
        setError("Error fetching data from the server");
        setLoading(false);
      }
    };

    fetchData();
  },deps ? [...deps]:[]);

  return { data, error, isLoading };
};

export default useData;
