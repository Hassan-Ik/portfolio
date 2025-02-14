import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getOS = (): string => {
    if (typeof window !== "undefined") {
      // Client-side: Use navigator
      return window.navigator.platform.includes("Win") ? "Windows" : "Linux/macOS";
    } else {
      // Server-side: Use process.platform
      switch (process.platform) {
        case "win32":
          return "Windows";
        case "linux":
          return "Linux";
        case "darwin":
          return "macOS";
        default:
          return "Unknown OS";
      }
    }
  };
  