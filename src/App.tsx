import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"





/* here we fixed width for aside column
   templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}  */


function App() {
    //null-->no genres is selected
    const[selectedGenre,setSelectedGenre]=useState<Genre | null >(null)

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
          <GenreList selectedGenre={selectedGenre} onSelecetGenre={(genre)=>setSelectedGenre(genre)}/>
      </GridItem>
      </Show>
      
      <GridItem area={'main'} >
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
      
    </Grid>
)}

export default App
