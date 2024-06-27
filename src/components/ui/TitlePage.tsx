import { ReactNode } from "react";

interface TitlePageProps {
  children: string | ReactNode;
}

const TitlePage = ({ children }: TitlePageProps) => {
  return <h1 className="text-5xl text-center font-bold mb-8">{children}</h1>;
};

export default TitlePage;
