import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const apiClient = async <T>(endpoint: string, requestConfig: AxiosRequestConfig) => {
    try {
        const response = await axios.get<FetchResponse<T>>(endpoint, requestConfig); // Utilizează endpoint-ul și configurațiile de cerere
        if (!response.data) {
            throw new Error("Nu există răspuns");
        }

        return response;
    } catch (error) {
        console.error("Eroare la tratarea răspunsului de la server:", error);
        throw new Error("Internal Server Error apiClient");
    }
};
