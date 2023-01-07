import { Footer } from "@organisms/Footer/Footer";
import { Header } from "@organisms/Header/Header";
import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
