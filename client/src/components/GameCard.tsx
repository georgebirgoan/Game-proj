import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PLatformsIconsList from './PLatformsIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom='3' justifyContent={'space-between'}>

                    {game.parent_platforms && game.parent_platforms.length > 0 && (
                        <PLatformsIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    )}
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={'2xl'}>
                    {game.name}
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;
