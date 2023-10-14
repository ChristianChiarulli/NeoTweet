"use client";

import { useState } from "react";

import { Theme } from "../../types";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface Props {
  theme: Theme;
}

export default function ThemeToggle({ theme }: Props) {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark};SameSite=Lax`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light};SameSite=Lax`;
    }
  };

  return (
    <>
      <button
        onClick={toggleTheme}
      >
        {_theme === Theme.light ? (
          <div className="cursor-pointer hover:bg-zinc-200 p-2 rounded-full">
            <SunIcon className="h-6 w-6 stroke-teal-400" />
          </div>
        ) : (
          <div className="cursor-pointer hover:bg-zinc-800 p-2 rounded-full">
            <MoonIcon className="h-6 w-6 stroke-purple-500" />
          </div>
        )}
      </button>
    </>
  );
}
