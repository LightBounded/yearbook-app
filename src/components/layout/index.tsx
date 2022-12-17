import { Inter } from "@next/font/google";
import Navbar from "./Navbar";

const inter = Inter();

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  return (
    <div className={`${inter.className} mx-auto max-w-screen-xl`}>
      <Navbar />
      {props.children}
    </div>
  );
};
