import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { PARKOLOLISTA, type ParkoloTipus } from "../adat";

interface ParkoloContextValue {
  parkoloLista: ParkoloTipus[];
  setAllapot: (id: number, allapot: ParkoloTipus["allapot"]) => void;
}

export const ParkoloContext = createContext<ParkoloContextValue | undefined>(
  undefined,
);

interface ParkoloProviderProps {
  children: ReactNode;
}

export function ParkoloProvider({ children }: ParkoloProviderProps) {
  const [parkoloLista, setParkoloLista] =
    useState<ParkoloTipus[]>(PARKOLOLISTA);

  function setAllapot(id: number, allapot: ParkoloTipus["allapot"]) {
    setParkoloLista((prevLista) =>
      prevLista.map((parkolo) =>
        parkolo.id === id ? { ...parkolo, allapot } : parkolo,
      ),
    );
  }

  return (
    <ParkoloContext.Provider value={{ parkoloLista, setAllapot }}>
      {children}
    </ParkoloContext.Provider>
  );
}

export function useParkoloContext() {
  const context = useContext(ParkoloContext);
  if (context === undefined) {
    throw new Error("Az App csak a ParkoloProvideren keresztül működtethető.");
  }
  return context;
}

export default ParkoloProvider;
