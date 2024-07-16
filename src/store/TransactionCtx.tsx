import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useGetAll from "../hooks/useGetAll";
import { TransformedData } from "../types";
type TCtx = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchType: "name" | "amount";
  toggleSearchType: () => void;
  DataApi : TransformedData[]
};
const TransactionCtx = createContext<TCtx | null>(null);
const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<"name" | "amount">("name");
  const [filteredData, setFilteredData] = useState<TransformedData[]>([]);
  const toggleSearchType = () => {
    setSearchType(searchType === "name" ? "amount" : "name");
  };
  const {data,isLoading} = useGetAll();

  useEffect(() => {
    //     const dd = DataApi?.data?.filter((item) => item?.name.includes(search));
    if (data) {
      if (searchType === "name") {
        const tt = data?.filter((item) =>
          item?.customer?.name.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredData(tt);
      } else {
        const tt = data.filter((item) =>
          item?.amount.toString().includes(search.toLowerCase())
        );
        setFilteredData(tt);
      }
    }
    // else {
    //         console.log(search.toLowerCase());
  }, [search, isLoading]);
  return (
    <TransactionCtx.Provider
      value={{
        DataApi: filteredData,
        search,
        setSearch,
        searchType,
        toggleSearchType,
      }}
    >
      {children}
    </TransactionCtx.Provider>
  );
};

export const useTransactionCtx = () => {
  const ctx = useContext(TransactionCtx);
  if (!ctx) {
    throw new Error(
      "useTransactionCtx must be used within a TransactionProvider"
    );
  }
  return ctx;
};

export default TransactionProvider;
