import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery{
  platform:Platform | null;
  genre:Genre | null;
}



/* here we fixed width for aside column
   templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}  */


function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  
    /*const[selectedGenre,setSelectedGenre]=useState<Genre | null >(null)
    const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null)*/



 return(   
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`//1024px
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}  
    >


      <GridItem area={'nav'} >
        <NavBar/></GridItem>
      
      <Show above="lg" >
      <GridItem area={'aside'} paddingX='5px' >
          <GenreList selectedGenre={gameQuery.genre}
           onSelecetGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      </Show>
      
      <GridItem area={'main'} >
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />

      </GridItem>
      
    </Grid>
)}

export default App
