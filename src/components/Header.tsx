import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <header className="mb-12 py-4 flex justify-between">
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
            checked={theme === "dark"}
          />
          <span className="w-6 h-6 bg-gray-600 rounded-full absolute left-1 top-1 peer-checked:bg-gray-300 peer-checked:left-9 transition-all duration-200" />
        </label>
        <MoonIcon className="h-6 w-6" />
      </div>
    </header>
  );
}
