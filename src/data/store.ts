import { create } from "zustand";

interface Store {
    text: string,
    setText: (text: string) => void,
    isDark: boolean,
    toggleDarkMode: () => void,
    initializeDarkMode: () => void,
}

export const useStore = create<Store>((set) => ({
    text: "Hello User",
    setText: (text: string) => {
        set({ text })

        const timeout = setTimeout(() => {
            set({ text: "Hello User" })
        }, 1000);

        return () => clearTimeout(timeout);
    },
    isDark: false,
    toggleDarkMode: () => {
        set((state) => {
            const newIsDark = !state.isDark;
            document.documentElement.classList.toggle("dark");
            return { isDark: newIsDark };
        });
    },
    initializeDarkMode: () => {
        // Check if dark mode is currently active
        const checkDarkMode = () => {
            return document.documentElement.classList.contains("dark");
        };

        // Initialize based on system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark && !checkDarkMode()) {
            document.documentElement.classList.add("dark");
        }

        set({ isDark: checkDarkMode() });
    }
}));