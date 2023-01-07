import React, { ReactElement } from "react";
import { useIsDesktop } from "@hooks/useIsDesktop";

export interface BreakpointContext {
  isMobile: boolean;
  isDesktop: boolean;
}

export const BreakpointContext = React.createContext<BreakpointContext>({
  isMobile: true,
  isDesktop: false,
});

interface BreakpointContextProviderProps {
  children: ReactElement;
}

export const BreakpointContextProvider = ({
  children,
}: BreakpointContextProviderProps) => {
  const isDesktop = useIsDesktop();

  return (
    <BreakpointContext.Provider
      value={{
        isDesktop,
        isMobile: !isDesktop,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};
