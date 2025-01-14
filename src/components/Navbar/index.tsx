"use client";

import { useUserStore } from "@/store/useUserStore";
import { LogOutIcon } from "lucide-react";
import { Avatar } from "../Avatar";

export const Navbar = () => {
  const { user, logout } = useUserStore();

  return (
    <nav className="bg-white text-white p-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl text-gray-700 font-bold">Welcome!</div>
        <div className="flex items-center space-x-6">
          <Avatar name={user?.userData.name ?? ""} />
          <LogOutIcon
            className="cursor-pointer text-gray-700 hover:text-gray-800"
            onClick={logout}
          />
        </div>
      </div>
    </nav>
  );
};
