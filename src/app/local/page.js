"use client";
import ListaLocales from "@/app/ui/common/ListaLocales";
import { Container } from "react-bootstrap";

const locales = () => {
  return (
    <Container>
      <div><p>Publicidad Aqui</p></div>
      <h2>Lista de Nightclubs</h2>
      <ListaLocales />
    </Container>
  );
};

export default locales;
