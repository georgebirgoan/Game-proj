import { GameQuery } from "../App";
import useData from "./useData";
//toate query-urile pt backend se fac in acest obiect
//apoi orice alta functionalitate(genre,platforms,sort) pt backend se face in acesta

export interface Platform{
    id:number;
    name:string;
    slug:string;
}


export interface Game {
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
    rating_top:number;
}

/*
dependente--> determină re-executarea efectului asociat
[selectedGenre?.id] reprezintă deps, 
iar schimbările în selectedGenre?.id vor determina re-executarea efectului.*/


//aici se potrivesc jocurile dupa cateogoria aleasa:gen,platforma,ordine si search
const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        },
        [gameQuery]
    );


//selectedGenre?.id,selectedPlatform?.id-->we put all in a object gameQuery

export default useGames;