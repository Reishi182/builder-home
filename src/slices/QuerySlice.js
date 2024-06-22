import { create } from "zustand";
import { users, duplicatedItems } from "../utils/data";

export const useQuerySlice = create((set, get) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),
  getUsers: () => {
    const query = get().query.toLowerCase();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query),
    );
    return query === "" ? users : filtered;
  },
  getItems: () => {
    const query = get().query.toLowerCase();
    const filtered = duplicatedItems.filter((item) =>
      item.title.toLowerCase().includes(query),
    );
    return query === "" ? duplicatedItems : filtered;
  },
}));
