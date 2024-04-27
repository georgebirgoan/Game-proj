import { Box, Flex, Grid, GridItem,Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery{
  platform:Platform | null;
  genre:Genre | null;
  sortOrder:string; 
  searchText:string;
}



/* here we fixed width for aside column
   templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}  */

//We can use HStack or Flex

function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)//va prelua date dintr-un obiect(query)
  /*const[selectedGenre,setSelectedGenre]=useState<Genre | null >(null)
  const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null)*/
  console.log("gamequery",gameQuery);

 return( 
  <>
 
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`//1024px
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}  
    >
      {/*cautare */}
      <GridItem area={'nav'} >
        <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
      </GridItem>

      
      
      <Show above="lg" >
      <GridItem area={'aside'} paddingX='5px' >
          <GenreList selectedGenre={gameQuery.genre} 
           onSelecetGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      </Show>
      
      <GridItem area={'main'} >
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
            <Flex marginBottom={5}>

              <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
              </Box>
              

              {/*sortare */}
              <SortSelector sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>



          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />

      </GridItem>
    </Grid>
</>
)}
export default App
