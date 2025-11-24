"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

export function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
