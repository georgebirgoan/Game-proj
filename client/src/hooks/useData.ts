import { useEffect, useState } from "react";
import games from '../data/games';
import { AxiosRequestConfig } from "axios";




const useData = <T>(request?:AxiosRequestConfig,deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setLoading(true);
        setData(games.results as T[]);
        setLoading(false);

      } catch (error) {
        setError("Error fetching data from the server");
        setLoading(false);
      }
    };

    fetchData();
  },deps ? [...deps]: []);

  return { data, error, isLoading };
};

export default useData;
