import { SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardConatiner from './GameCardConatiner';
import { Genre } from '../hooks/useGenre';


interface Props{
  selectedGenre:Genre | null;
}

const GameGrid = ({selectedGenre}:Props) => {
    const {data,error,isLoading}=useGames(selectedGenre);
    const skeletons=[1,2,3,4,5,6,7,8,9,10];


  return (
  <>
  
  {error && <Text>{error}</Text>}

  <SimpleGrid 
  columns={{sm:1,md:2,lg:3,xl:5}} 
  padding={'10px'}
  spacing={3}
  >

  {isLoading && 
  skeletons.map((skeleton) =>(
    <GameCardConatiner key={skeleton}>
      <GameCardSkeleton />
  </GameCardConatiner>
   ))}

  {data.map((game)=>
  <GameCardConatiner key={game.id} >
    <GameCard  game={game} ></GameCard>
  </GameCardConatiner>
   )}
</SimpleGrid>
  </>
)}

export default GameGrid