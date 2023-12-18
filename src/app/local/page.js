"use client"
import ListaLocales from "@/components/ListaLocales"
import { Container } from "react-bootstrap"

const locales = () => {

  return <Container>
    <h2>Lista de Nightclubs</h2>
    <ListaLocales />
  </Container>
}

export default locales