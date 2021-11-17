import { createContext, useContext } from "react";

export interface Palette {
  background: string;
  text: string;
}

export const palettes = {
  light: {
    background: "#fff",
    text: "#000",
  },
  dark: {
    background: "#1a202c",
    text: "#fff",
  },
};

export const PaletteContext = createContext<Palette | null>(null);
export const usePalette = () => useContext(PaletteContext)!;
