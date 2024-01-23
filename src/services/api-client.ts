import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2a6c4aa3d58c42779268ddab7e4fafd8'
 }

})