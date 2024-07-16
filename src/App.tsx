import Appbar from "./components/Appbar";
import Searchbar from "./components/Searchbar";

import useGetAll from "./hooks/useGetAll";
import TransactionProvider, { useTransactionCtx } from "./store/TransactionCtx";

function App() {
  const DataApi = useGetAll();

  return (
    <TransactionProvider>
      <div className="bg-primary text-main-text ">
        <Appbar />
        <div className="container flex justify-center items-center min-h-screen ">
          {DataApi.isLoading ? (
            <p>Loading ...</p>
          ) : (
            <div className="w-full">
              <Searchbar />
              <TransactionTable />
            </div>
          )}
        </div>
      </div>
    </TransactionProvider>
  );
}

const TransactionTable = () => {
  const { DataApi } = useTransactionCtx();
  // console.log("ctx", ctx);
  return (
    <table className="w-full border-collapse shadow-2xl">
      <thead className="bg-primary-darker ">
        <tr className="">
          <th className="border border-[#f2f2f2] text-left p-2">ID</th>
          <th className="border border-[#f2f2f2] text-left p-2">Name</th>
          <th className="border border-[#f2f2f2] text-left p-2">
            Transaction ID
          </th>
          <th className="border border-[#f2f2f2] text-left p-2">
            Transaction Date
          </th>
          <th className="border border-[#f2f2f2] text-left p-2">
            Transaction Amount
          </th>
        </tr>
      </thead>

      <tbody>
        {DataApi &&
        DataApi.length ? 
          DataApi?.map((item,index) =>
            
              (<tr key={index}>
                <td className="border border-[#f2f2f2] text-left p-2">
                  {index+1}
                </td>
                <td className="border border-[#f2f2f2] text-left p-2">
                  {item?.customer.name}
                </td>
                <td className="border border-[#f2f2f2] text-left p-2">
                  {item?.id}
                </td>
                <td className="border border-[#f2f2f2] text-left p-2">
                  {item?.date}
                </td>
                <td className="border border-[#f2f2f2] text-left p-2">
                  {item?.amount}
                </td>
              </tr>)
            )
           : <tr>
            <td colSpan={5} className="border border-[#f2f2f2] p-2 text-xl font-medium text-center">
            لاتوجد بيانات
            </td>
            </tr>}
      </tbody>
    </table>
  );
};

export default App;
