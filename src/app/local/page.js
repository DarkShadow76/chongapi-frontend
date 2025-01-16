"use client";
import ListaLocales from "@/app/ui/common/ListaLocales";
import { Container } from "react-bootstrap";
import style from '../ui/globals.css';

const locales = () => {
  return (
    <Container className={style.main}>
      <div><p>Publicidad Aqui</p></div>
      <h2>Lista de Nightclubs</h2>
      <ListaLocales />
    </Container>
  );
};

export default locales;
