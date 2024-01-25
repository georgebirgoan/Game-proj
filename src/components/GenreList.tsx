import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelecetGenre:(genre:Genre)=>void;
    selectedGenre:Genre | null;
}


const GenreList = ({onSelecetGenre,selectedGenre}:Props) => {
   const{data,isLoading,error}=useGenre();

   //no need these,cause we have static data
    if(error) return null;
    if(isLoading) return <Spinner/>

    return (
        <>
        <Heading fontSize='2xl' marginBottom='3' >Genres</Heading>
        <List>
            {data.map(genre=>
            <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                    <Image 
                        boxSize={'32px'} 
                        borderRadius={8}
                        objectFit='cover'
                        src={getCroppedImageUrl(genre.image_background)} />

                    <Button whiteSpace='normal' 
                        textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                        onClick={()=>onSelecetGenre(genre)} 
                        variant='link' fontSize='lg'>{genre.name}</Button>
                </HStack>

            </ListItem>)}
        </List>
        </>
  )
}

export default GenreList





