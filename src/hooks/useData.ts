import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


//T[]-->for generic function
//Fiecare obiect de ex Genre va fi de tipul generic(orice tip de data)


interface FetchResponse<T>{
    count:number;
    results:T[];

}

//unknown-->any

//aici se fac toate cererile http pt toate obiectele care 
//dorim sa le folosim
//hooks impreuna cu dependente

const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?: unknown[])=>{
    const [data,setData]=useState<T[]>([]);//folosim generic pt orice tip de obiect
    const [error,setError]=useState('');
    const [isLoading,setLoading]=useState(false);

   useEffect(()=>{
        const controller=new AbortController();
        setLoading(true);

    apiClient
    .get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then(res=>{
            setData(res.data.results);
            setLoading(false)})
        .catch(err=>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

    return()=>controller.abort();   
},deps ? [...deps] : []);

//[] -->only one,when the component is render
//,deps ? [...deps] : []-->intodeuna cand una dintre dependente se schimba

return{data,error,isLoading};

}


export default useData;