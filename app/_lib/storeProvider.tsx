"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type ModeStore, createModeStore } from "./store";

export type ModeStoreApi = ReturnType<typeof createModeStore>;

export const ModeStoreContext = createContext<ModeStoreApi | undefined>(
  undefined
);

export interface ModeStoreProviderProps {
  children: ReactNode;
}

export const ModeStoreProvider = ({ children }: ModeStoreProviderProps) => {
  const storeRef = useRef<ModeStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createModeStore();
  }

  return (
    <ModeStoreContext.Provider value={storeRef.current}>
      {children}
    </ModeStoreContext.Provider>
  );
};

export const useModeStore = <T,>(selector: (store: ModeStore) => T): T => {
  const modeStoreContext = useContext(ModeStoreContext);

  if (!modeStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(modeStoreContext, selector);
};
