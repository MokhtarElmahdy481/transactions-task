import { useQuery } from "react-query"
import { getCustomers } from "../api"

const useGetCustomers = () => {

    return useQuery("customers",getCustomers)
}

export default useGetCustomers