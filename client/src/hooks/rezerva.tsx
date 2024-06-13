// import { useEffect, useState } from "react";
// import { AxiosRequestConfig } from "axios";
// import apiClient from "../services/api-client"; // Importă instanța configurată de axios
// import axios from "axios";


// interface DataResponse<T> {
//   results: T[];
// }

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
  
//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);

//     apiClient.get<DataResponse<T>>(endpoint, {
//       signal: controller.signal,
//       ...requestConfig,
//     })
//     .then(response => {
//       console.log("data in useData", response);
//       setData(response.data.results);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (axios.isCancel(err)) return;
//       setError(err.message);
//       setLoading(false);
//     });
    
//     return () => controller.abort();
//   }, deps ? [...deps] : []);

//   return { data, error, isLoading };
// };

// export default useData;
