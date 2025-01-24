import React,{ useState,useEffect } from 'react'
import axios from 'axios'


const UseFetch = (apiUrl) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    

    const fetchData = async () =>{
        try {
            setLoading(true)
            const {data} = await axios.get(apiUrl)
            setData(data.results)
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[apiUrl])
  return {data , loading ,error}
}

export default UseFetch