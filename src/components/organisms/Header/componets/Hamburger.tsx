import styles from "../header.module.scss";
import { Dispatch, SetStateAction } from "react";

interface HamburgerProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

export const Hamburger = ({ isOpened, setIsOpened }: HamburgerProps) => {
  return (
    <button
      className={`${styles.hamburger} ${
        isOpened ? styles.hamburgerOpened : ""
      }`}
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
