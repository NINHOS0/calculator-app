import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between">
      <p className="text-text-primary text-3xl">calc</p>
      <div className="flex gap-5 items-end">
        <span className="uppercase text-text-primary text-xs h-fit mb-0.5 tracking-widest">theme</span>
        <div>
          <div className="flex justify-around text-xs text-text-primary">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="bg-keyboard p-1 rounded-3xl flex gap-1">
            <div
              className={`${theme === "dark" && "bg-key-tertiary hover:bg-key-hover-tertiary"} w-4 h-4 rounded-full cursor-pointer transition-all`}
              onClick={() => setTheme("dark")}
            ></div>
            <div
              className={`${theme === "light" && "bg-key-tertiary hover:bg-key-hover-tertiary"} w-4 h-4 rounded-full cursor-pointer transition-all`}
              onClick={() => setTheme("light")}
            ></div>
            <div
              className={`${theme === "night" && "bg-key-tertiary hover:bg-key-hover-tertiary"} w-4 h-4 rounded-full cursor-pointer transition-all`}
              onClick={() => setTheme("night")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
