import { useEffect } from "react";

declare global {
  interface Window {
    getResume: () => void;
  }
}

export function useConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%cHi, Curious Developer! 🦄\n%cThis site was handcrafted by Alvin with Next.js, Tailwind, and a lot of caffeine.",
      "color:#60a5fa; font-size:20px; font-weight:bold;",
      "color:#b45309; font-size:14px;"
    );
    // 可互動的 console 指令
    console.log(
      "%cTry typing %cgetResume()%c in the console!",
      "color:#14b8a6; font-size:14px;",
      "color:#f59e42; font-size:14px; font-weight:bold;",
      "color:#14b8a6; font-size:14px;"
    );
    // 掛個 window 物件，讓工程師玩
    window.getResume = function () {
      alert("真有心！請直接聯絡我吧：porschegt315@hotmail.com 😎");
    };
  }, []);
}
