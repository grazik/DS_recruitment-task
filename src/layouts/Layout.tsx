import { Footer } from "@organisms/Footer/Footer";
import { Header } from "@organisms/Header/Header";
import { ReactElement } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactElement;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {`DS recruitment task ${title ? `| ${title}` : ""}`.trim()}
        </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
