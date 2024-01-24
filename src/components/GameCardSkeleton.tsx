import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

//skeleton is like a place holder for image

const GameCardSkeleton = () => {
  return (
    <Card width='700px' borderRadius={10} overflow={'hidden'} padding={2} >
       <Skeleton height='500px' />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    )
}

export default GameCardSkeleton