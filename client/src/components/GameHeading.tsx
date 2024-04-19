import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';

//Games
//Action Games
//Xbox Games
//Xbox Action Games

//aici se afiseaza starea jocului pe care se face click,afisand nume si genre

interface Props{
    gameQuery:GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {

    const heading=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games` 



  return (
  <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading