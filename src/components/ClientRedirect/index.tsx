"use client";

import { useUserStore } from "@/store/useUserStore";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface ClientRedirectProps {
  children: ReactNode;
  fallbackPath: string;
}

export const ClientRedirect = ({
  children,
  fallbackPath,
}: ClientRedirectProps) => {
  const { user } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return null;
  }

  if (!user) {
    redirect(fallbackPath);
    return null;
  }

  return <>{children}</>;
};
