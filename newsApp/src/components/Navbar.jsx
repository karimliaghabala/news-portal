import { Search, Menu } from "lucide-react";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const links = [
  "Business",
  "Enterteinment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="fixed w-full bg-white dark:bg-blue-900 z-10 shadow-md">
      <div className=" max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="md:text-2xl text-lg font-bold text-blue-400 cursor-pointer">
          NewsApp
        </div>

        {/* Deskop Links */}

        <div className="hidden md:flex space-x-6">
          {links.map((link) => {
            return (
              <p
                key={link}
                className="text-gray-700 dark:text-gray-200 hover:text-white hover:text-blue-600 transition cursor-pointer"
              >
                {link}
              </p>
            );
          })}
        </div>
        <div className=" flex items-center justify-center gap-4">
          <div className="relative bg-gray-200 p-2 rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search news..."
              className="md:pl-10 pl-7 w-30 md:w-64 outline=none focus:outline-none"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 px-3 py-3 rounded-lg cursor-pointer"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          {/* Mobile menu button */}

          <button className="bg-gray-200 px-2 py-2 rounded-lg md:hidden">
            <Menu size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
