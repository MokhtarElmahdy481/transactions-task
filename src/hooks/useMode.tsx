import { useEffect, useState } from "react";
import useLocalhost from "./useLocalhost";

type Mode = "light" | "dark";

const useMode = () => {
  const { setItem, getItem } = useLocalhost("theme");
  const [mode, setMode] = useState<Mode | null>(null);


  const handleChangeTheme = () => {
    const theme = getItem();
    if (theme === "dark") {
      setItem("light")
      document.documentElement.classList.remove("dark");
      setMode("light");
    } else {
      setItem("dark")
      document.documentElement.classList.add("dark");
      setMode("dark");
    }
  };
  useEffect(() => {
    const theme = getItem();
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  }, [getItem]);
  return {
    mode,
    handleChangeTheme
  };
};

export default useMode;
