// apiClient.ts
/*import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Inițializează endpointul aici
//const endpoint = "http://localhost:5000/api/rawg";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const apiClient = async <T>(endpoint:string,requestConfig?: AxiosRequestConfig): Promise<AxiosResponse<FetchResponse<T>>> => {
    try {
        const response = await axios.get<FetchResponse<T>>(endpoint:"http://localhost:5000/api/rawg", requestConfig);

        if (!response.data) {
            throw new Error("Nu există răspuns");
        }

        return response;
    } catch (error) {
        console.error("Eroare la tratarea răspunsului de la server:", error);
        throw new Error("Internal Server Error apiClient");
    }
};

export default endpoint; // Exportă endpointul pentru a fi folosit în alte componente
*/


import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "726f6564c6a54141add23ab27ff4bc52",
  },
});
