import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";



const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    console.log("deps in useData",deps);


    axios.get(`http://localhost:5000/api/rawg/${endpoint}`, {
      signal: controller.signal,
      ...requestConfig,
    })
      .then(response => {
        console.log("deps",deps);
        console.log("data in useData",response.data.results);
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    
    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;












