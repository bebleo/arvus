import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

type pageVariant = "left" | "center"

interface PageProps {
  title: string,
  variant?: pageVariant,
  children: ReactNode
}

const Page = ({title, variant, children}: PageProps) => {
  const v = variant === "center" ? "my-auto min-height" : "text-left";

  return (
    <Container className={v}> 
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Container>
  );
}

export default Page;
