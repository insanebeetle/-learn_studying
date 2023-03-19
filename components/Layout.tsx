import { Children } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
