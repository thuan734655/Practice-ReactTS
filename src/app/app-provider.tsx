import { ToastContainer } from "@/components/ui/toast";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type appProp = {
  children: ReactNode;
};

export const AppProvider = ({ children }: appProp) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer />
    </QueryClientProvider>
  );
};
