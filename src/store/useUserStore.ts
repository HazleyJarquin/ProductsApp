/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  user: Result | null;
  setUser: (user: Result) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);

export interface Result {
  userData: UserData;
  token: string;
}

export interface UserData {
  id_client: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  client_products: any[];
  level_client: number;
  status: boolean;
}
