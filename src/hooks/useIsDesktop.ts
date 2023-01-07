import { useEffect, useMemo, useState } from "react";
import variables from "@styles/variables.module.scss";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window) {
      const handleDesktopMqlChange = (e: MediaQueryListEvent) => {
        setIsDesktop(e.matches);
      };

      const mqlDesktop = global.matchMedia?.(
        `(min-width: ${variables.desktop})`
      );
      setIsDesktop(mqlDesktop.matches);

      mqlDesktop.addEventListener("change", handleDesktopMqlChange);

      return () =>
        mqlDesktop.removeEventListener("change", handleDesktopMqlChange);
    }
  }, []);

  return isDesktop;
};
