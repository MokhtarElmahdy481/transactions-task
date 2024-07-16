import { useTransactionCtx } from "../store/TransactionCtx";
import { GrTransaction } from "react-icons/gr";
const Searchbar = () => {
  const { search, setSearch , searchType, toggleSearchType} = useTransactionCtx();
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
  return (
    <div className="w-full border-collapse border bg-primary-darker rounded-t-lg p-2">
      <div className="bg-bg-card w-1/3 rounded flex ">
      <button className="capitalize shadow px-2 flex items-center gap-1" onClick={toggleSearchType}>
      <GrTransaction /> {searchType}
      </button>
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          className="outline-none bg-transparent shadow w-full py-1 px-2"
        />
      </div>
    </div>
  );
};

export default Searchbar;
