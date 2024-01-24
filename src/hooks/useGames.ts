import { GameQuery } from "../App";
import useData from "./useData";

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
}

/*
dependente--> determină re-executarea efectului asociat
[selectedGenre?.id] reprezintă deps, 
iar schimbările în selectedGenre?.id vor determina re-executarea efectului.*/



const useGames=(gameQuery:GameQuery)=>
useData<Game>('/games',
{params:{
    genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id}},
[gameQuery]);

//selectedGenre?.id,selectedPlatform?.id-->we put all in a object

export default useGames;