
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"

//style={{width:'100%'}} -->eroare ,input se face mic,pt ca nu e la 100% lungime 
//or in index.css form {width:100%}


interface Props{
    onSearch:(searchText:string)=>void;
}

const SearchInput = ({onSearch}:Props) => {
    const ref=useRef<HTMLInputElement>(null);//take data from input with ref

  return (
        <form onSubmit={(event)=>{
            event.preventDefault();//preventing form to be posting -->server
            if(ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
            <InputLeftElement children={<BsSearch/>} />
                <Input ref={ref} borderRadius={20} placeholder="Search Games" variant='filled' />
            </InputGroup>
        </form>
    
    )
}

export default SearchInput