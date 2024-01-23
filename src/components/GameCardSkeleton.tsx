import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

//skeleton is like a place holder for image

const GameCardSkeleton = () => {
  return (
    <Card width='700px' >
       <Skeleton height='400px' letterSpacing={1} 
       borderRadius={10} overflow={'hidden'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    )
}

export default GameCardSkeleton