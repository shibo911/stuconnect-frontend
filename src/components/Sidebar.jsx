import React, { useState } from "react";
import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Moon,
  Sun,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
// import { ModeToggle } from './mode-toggle'

export function Sidebar({ onDarkModeToggle }) {
  const [currentLogo, setCurrentLogo] = useState(Moon);

  const themeLogo = () => {
    if (currentLogo == Sun) {
      setCurrentLogo(Moon);
    } else if (currentLogo == Moon) {
      setCurrentLogo(Sun);
    }
  };
  let IconComponent = currentLogo;
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black dark:bg-gray-50 px-5 py-8">
      <div class="flex">
        <img
          src="src\components\ui\logo.jpg"
          alt="logo"
          class="h-10 w-10 dark:invert"
        />
        <div>
          <img
            src="src\components\ui\stuconnect_logo.png"
            alt="STUCONNECT"
            class="h-6 mt-2 dark:invert"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col justify-between ">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white dark:text-black">
              Navigation
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-100 "
              to="/"
            >
              <BarChart className="h-5 w-5 " aria-hidden="true" />
              <span className="mx-2 text-sm font-medium  dark:hover:text-gray-100">
                Home
              </span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-100 "
              to="/events"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium dark:hover:text-gray-100">
                Events
              </span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-100 "
              to="/forms"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium dark:hover:text-gray-100">
                Forms
              </span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white dark:text-black">
              Content Library
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-100 "
              to="/Collegelibrary"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium dark:hover:text-gray-100">
                College Library
              </span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-100 "
              to="/personallibrary"
            >
              <BellRing className="h-5 w-5 " aria-hidden="true" />
              <span className="mx-2 text-sm font-medium   dark:hover:text-gray-100">
                Personal Library
              </span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white dark:text-black ">
              Customization
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:text-gray-700 dark:hover:text-gray-200"
              onClick={() => {
                onDarkModeToggle();
                themeLogo();
              }}
              to="#"
            >
              <IconComponent className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium  dark:hover:text-gray-100">
                Themes
              </span>
            </Link>
            <div className="mt-6 flex items-center justify-between">
              <Link to="/profile" className="flex items-center gap-x-2">
                <img
                  className="h-7 w-7 rounded-full object-cover"
                  src="https://m.media-amazon.com/images/M/MV5BZjliMjIyMDktNzI0OC00ZTMzLWIyODAtMzc2MzdiZGM0ZTc0XkEyXkFqcGdeQXVyMTI2Nzk2MjQ1._V1_.jpg"
                  alt="avatar"
                />
                <span className="text-sm font-medium text-white dark:text-black">
                  Matt Rife
                </span>
              </Link>
              <Link
                to="#"
                className="rotate-180 text-gray-200 transition-colors duration-200 dark:text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div>{/* <ModeToggle /> */}</div>
        </nav>
      </div>
    </aside>
  );
}
