import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PLatformsIconsList from './PLatformsIconsList'

interface Props{
    game:Game
}


const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            <PLatformsIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
    </Card>

  )
}

export default GameCard