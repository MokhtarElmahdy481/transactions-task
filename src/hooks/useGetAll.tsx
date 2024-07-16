
import { useQuery } from 'react-query'
import { getAll } from '../api'

const useGetAll = () => {
    return useQuery("data",getAll,{
        
    })
}

export default useGetAll