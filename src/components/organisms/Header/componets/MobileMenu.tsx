import { ReactElement, useEffect, useRef, useState } from "react";
import { Hamburger } from "@organisms/Header/componets/Hamburger";
import styles from "../header.module.scss";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

interface MobileMenuProps {
  children: ReactElement;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const drawerRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (drawerRef.current) {
      if (isOpened) {
        disableBodyScroll(drawerRef.current);
      }

      return () => {
        clearAllBodyScrollLocks();
      };
    }
  });

  return (
    <>
      <Hamburger isOpened={isOpened} setIsOpened={setIsOpened} />
      <div
        className={`${styles.drawer} ${
          isOpened ? styles.opened : styles.closed
        }`}
        ref={drawerRef}
        id={"menuDrawer"}
      >
        {children}
      </div>
    </>
  );
};
