import { ReactElement } from "react";
import dynamic from "next/dynamic";

interface NoSsrWrapperProps {
  children: ReactElement;
}

const NoSsrWrapper = ({ children }: NoSsrWrapperProps) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSsrWrapper), {
  ssr: false,
});
