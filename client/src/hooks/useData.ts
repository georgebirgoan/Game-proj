import { useEffect, useState } from "react";
import gamesData from "../data/games"; // Importă datele locale
import { AxiosRequestConfig } from "axios";

interface GameData {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: { id: number; name: string; slug: string; } }[];
  metacritic: number;
  rating_top: number;
  genres: { id: number; name: string }[];
}



const useData = <T, >(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  console.log(error);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    console.log("deps in useData", deps);

    if (endpoint === "/static") {
      // Folosește datele locale din gamesData
      const localData = gamesData as { data: { results: GameData[] } };
      console.log("date primite:", localData.data.results);

      // Aplică filtrarea și sortarea pe datele locale
      let filteredData = localData.data.results;

      if (requestConfig?.params) {
        console.log("requestConfig params:", requestConfig.params);

        // Filtrare după platformă
        if (requestConfig.params.platforms) {
          filteredData = filteredData.filter(game =>
            game.parent_platforms.some(p => p.platform.id === requestConfig.params.platforms)
          );
        }

        // Filtrare după gen
        if (requestConfig.params.genres) {
          console.log("Filtrare gen:", requestConfig.params.genres);
          filteredData = filteredData.filter(game =>
            game.genres.some(g => g.id === requestConfig.params.genres)
          );
        }

        // Căutare după text
        if (requestConfig.params.search) {
          filteredData = filteredData.filter(game =>
            game.name.toLowerCase().includes(requestConfig.params.search.toLowerCase())
          );
        }

        // Sortare
        if (requestConfig.params.ordering) {
          filteredData = filteredData.sort((a, b) => {
            if (requestConfig.params.ordering === "asc") {
              return a.name.localeCompare(b.name);
            } else if (requestConfig.params.ordering === "desc") {
              return b.name.localeCompare(a.name);
            }
            return 0;
          });
        }
      }

      console.log("date filtrate:", filteredData);
      setData(filteredData as T[]);
      setLoading(false);
    }

    return () => controller.abort();
  }, deps ? [...deps] : []); // Asigură-te că deps este inclus

  return { data, error, isLoading };
};

export default useData;
