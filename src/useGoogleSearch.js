import React , {useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "fd628fceaf468b252";
const useGoogleSearch = (term)  => {
    const [data,setdata] = useState(null);
    useEffect(() =>{
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res=>res.json())
            .then(result => {
                setdata(result)
            })
        }
        fetchData();
    },[term])
    return {data}
};

export default useGoogleSearch
