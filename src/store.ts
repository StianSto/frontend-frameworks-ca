import { create } from "zustand";

const useSearchStore = create((set) => ({
  query: "",
  setQuery: (query: string) => set(() => ({ query })),
}));

export default useSearchStore;

export interface IState {
  query: string;
}
