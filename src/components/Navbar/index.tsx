"use client";

import { useUserStore } from "@/store/useUserStore";

export const Navbar = () => {
  const { user, logout } = useUserStore();
  return (
    <div>
      <p>{user?.userData.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
