import { create } from "zustand";

export const useQuerySlice = create((set, get) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),
}));
