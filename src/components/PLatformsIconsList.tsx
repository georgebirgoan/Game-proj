import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';


interface Props{
    platforms:Platform[];
}


//index signature:{[key:string]}-->it s an anotation
//fiecare cheie va fi de tip string
//each key is defined in React Icon library

const PLatformsIconsList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
    }
    
    
    
    
    return (
        <HStack marginY={3}> 
        {platforms.map((platform)=>
        <Icon as={iconMap[platform.slug]}color={'gray.500'}></Icon>)}
        </HStack>
    )
}

export default PLatformsIconsList