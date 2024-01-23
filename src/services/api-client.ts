import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ba2e6f6e5b8e489db4ecf52e87a28462'
 }

})