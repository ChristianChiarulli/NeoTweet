import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import { cookies } from "next/headers";
import { Theme } from "@/app/types";
import Login from "./Login";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const theme =
    cookies().get("theme")?.value === "dark" ? Theme.dark : Theme.light;
  return (
    <header className="mx-auto w-full max-w-7xl mb-32 mt-10">
      <div className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="relative flex gap-4 items-center">
            <div className="flex flex-1">
              <span className="text-3xl text-zinc-500 dark:text-zinc-200">
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  href="/"
                >
                  NeoTweet
                </Link>
              </span>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/articles"
                    >
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/projects"
                    >
                      Snippets
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end md:flex-1 items-center gap-x-4">
              {/* <button className="relative px-3 py-2 flex gap-x-2 items-center text-sm font-medium text-teal-50 rounded-full bg-teal-500/90 hover:bg-teal-500 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"> */}
              {/*   <PencilSquareIcon className="flex items-center h-4 w-4 ml-1 -mr-1 text-teal-50" /> */}
              {/*   <span>write</span> */}
              {/* </button> */}
              <div className="cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/90 p-2 rounded-full shadow-lg backdrop-blur shadow-zinc-800/5 ring-1 ring-zinc-900/10 dark:ring-white/10">
                <MagnifyingGlassIcon className="h-6 w-6 stroke-zinc-500 dark:stroke-zinc-500" />
              </div>
              <ThemeToggle theme={theme} />
              <Login>
                <div className="flex flex-1 justify-end">
                  <a
                    href="#"
                    className="dark:text-smoke-100 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                    {/* <UserCircleIcon className="h-7 w-7 text-smoke-400" aria-hidden="true" /> */}
                  </a>
                </div>
              </Login>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
