import { ReactElement } from "react";

interface DesktopMenuProps {
  children: ReactElement;
}

export const DesktopMenu = ({ children }: DesktopMenuProps) => {
  return <>{children}</>;
};
