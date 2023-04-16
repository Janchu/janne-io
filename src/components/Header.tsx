import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme(e) {
    if (theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <header className="mb-16 py-4 flex justify-between">
      <h1 className="font-bold text-3xl">janne.io</h1>

      <div className="flex items-center gap-2">
        <SunIcon className="h-6 w-6" />
        <label
          htmlFor="themeToggle"
          className="relative bg-white dark:bg-gray-800 w-16 h-8 rounded-full"
        >
          <input
            type="checkbox"
            id="themeToggle"
            className="sr-only peer"
            onChange={handleToggleTheme}
          />
          <span className="w-6 h-6 bg-gray-600 rounded-full absolute left-1 top-1 peer-checked:bg-gray-300 peer-checked:left-9 transition-all duration-200" />
        </label>
        <MoonIcon className="h-6 w-6" />
      </div>
    </header>
  );
}
