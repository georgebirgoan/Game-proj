import { SimpleGrid, Text} from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardConatiner from './GameCardConatiner';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';


interface Props{
  gameQuery:GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {
    const {data,error,isLoading}=useGames(gameQuery);
    const skeletons=[1,2,3,4,5,6,7,8,9,10];

  if (error) return <Text>{error}</Text>;

  return (

    <SimpleGrid 
    columns={{sm:1,md:2,lg:3,xl:4}} 
    padding={'10px'}
    spacing={6}
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
  )}

  export default GameGrid