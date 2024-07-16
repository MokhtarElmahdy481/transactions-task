import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useMode from "../hooks/useMode";

const Appbar = () => {
  const { mode, handleChangeTheme } = useMode();

  return (
    <div>
      <div className="container">
        <button className="p-2" onClick={handleChangeTheme}>
          {mode === "light" ? (
            <MdDarkMode size={22} />
          ) : (
            <CiLight color="#efaa20" size={22} />
          )}
        </button>
        
      </div>
    </div>
  );
};

export default Appbar;
