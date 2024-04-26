import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  

export const apiClient = async <T>  (requestConfig?: AxiosRequestConfig) => {
    try {
        const response = await axios.get<FetchResponse<T>>("http://localhost:5000/api/rawg",requestConfig); // Utilizează endpoint-ul și configurațiile de cerere
        if (!response.data) {
            throw new Error("Nu există răspuns");
        }
        console.log("raspuns server",response.data.results);
    
    } catch (error) {
        console.error("Eroare la tratarea răspunsului de la server:", error);
        throw new Error("Internal Server Error apiClient");
    }
};
*/