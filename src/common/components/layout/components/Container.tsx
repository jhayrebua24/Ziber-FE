import { ReactNode } from "react";

function Container({ children }: { children: ReactNode | JSX.Element }) {
  return (
    <div className="container mx-auto mt-12 flex flex-col flex-grow">{children}</div>
  );
}

export default Container;
