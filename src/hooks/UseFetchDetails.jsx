import React,{ useState,useEffect } from 'react'
import axios from 'axios'


const UseFetchDetails = (apiUrl) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    

    const fetchData = async () =>{
        try {
            setLoading(true)
            const {data} = await axios.get(apiUrl)
            setData(data)
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

export default UseFetchDetails