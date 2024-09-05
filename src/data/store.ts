import { create } from "zustand";

interface Store {
    text: string,
    setText: (text: string) => void,
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
}));