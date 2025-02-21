import { createStore } from "zustand/vanilla";
import { EventMode } from "@/types/events";

export type ModeState = {
  mode: EventMode;
};

export type ModeActions = {
  changeMode: (newMode: EventMode) => void;
};

export type ModeStore = ModeState & ModeActions;

export const defaultInitState: ModeState = {
  mode: EventMode.BOTH,
};

export const createModeStore = (initState: ModeState = defaultInitState) => {
  return createStore<ModeStore>()((set) => ({
    ...initState,
    changeMode: (newMode: EventMode) => set({ mode: newMode }),
  }));
};
