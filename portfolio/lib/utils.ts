import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getOS = (): string => {
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
  };
  