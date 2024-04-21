import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardConatiner from "./GameCardConatiner";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  console.log("data in grid",data);
  const skeletons = [1, 2, 3, 4, 5, 6];


  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardConatiner key={skeleton}>
            <GameCardSkeleton />
          </GameCardConatiner>
        ))}
      {data.map((game) => (
        <GameCardConatiner key={game.id}>
          <GameCard game={game} />
        </GameCardConatiner>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
