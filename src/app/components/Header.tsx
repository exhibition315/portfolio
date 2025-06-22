"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Avatar from "@components/Avatar";
import DownloadResume from "@components/download";
import { buttonClass } from "@components/style";
import { useConsoleEasterEgg } from "@hooks/useConsoleEasterEgg";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useConsoleEasterEgg();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full flex flex-col md:flex-row items-center md:items-start justify-between py-8 border-b border-gray-200 dark:border-gray-700 mb-8">
      {/* 頭像 */}
      <div className="mb-4 md:mb-0 md:mr-8">
        <Avatar />
      </div>
      {/* 右側個人資訊 */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2">Shu-Han (Alvin) Wang</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 font-semibold mb-4">
          Senior Front-End Engineer
        </h2>
        <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400 text-base mb-4">
          <span>📍 Taipei, Taiwan</span>
          <span>✉️ porschegt315@hotmail.com</span>
          <span>📱 +886 958-232-108</span>
        </div>
        {/* 語言切換與主題切換預留 */}
        <div className="flex gap-2 mt-2">
          {/* 主題切換 */}
          {mounted && (
            <button
              className={buttonClass}
              onClick={handleThemeChange}
              aria-label="切換主題"
            >
              <span className="text-yellow-400 mr-1">
                {" "}
                {resolvedTheme === "dark" ? "🌙" : "☀️"}
              </span>
              <span className="text-sm">
                {resolvedTheme === "dark" ? "深色" : "淺色"}
              </span>
            </button>
          )}
          <DownloadResume />
        </div>
      </div>
    </header>
  );
};

export default Header;
