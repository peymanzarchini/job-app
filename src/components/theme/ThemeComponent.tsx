"use client";

import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="cursor-pointer bg-gray-200">
      {theme === "dark" ? (
        <MdOutlineLightMode size={25} onClick={() => setTheme("light")} />
      ) : (
        <MdOutlineDarkMode size={25} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeComponent;
