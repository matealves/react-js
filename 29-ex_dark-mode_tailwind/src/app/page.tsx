"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl  font-bold">Título da Página</h1>
        </header>
        <section>
          <p className="my-4">Conteúdo da Página</p>

          <Button label="Saiba mais" onClick={() => {}} />
        </section>
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
