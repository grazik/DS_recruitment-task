import { useContext } from "react";
import { BreakpointContext } from "../contexts/Breakpoints";

export const useBreakpoints = () => {
  const breakpoints = useContext(BreakpointContext);

  return breakpoints;
};
