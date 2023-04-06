import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";

import { toggleTheme } from "../redux/layoutSlice";
import { selectScheme } from "../redux/selectors";

function ThemeButton() {
  const scheme = useAppSelector(selectScheme);
  const dispatch = useDispatch();

  return (
    <span
      className="border-0 p-1.5 outline-none cursor-pointer"
      onClick={() => dispatch(toggleTheme())}
    >
      {scheme === "dark" ? (
        <FiSun className="text-white" size={15} />
      ) : (
        <FiMoon className="text-gray-700" size={15} />
      )}
    </span>
  );
}

export default ThemeButton;
