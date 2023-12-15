"use client"
import Anfitrionas from "@/components/Anfitrionas"
import { Container } from "react-bootstrap"

const listaAnfitrionas = ({ params }) => {

  return <Container>
    <h4>Descripcion</h4>
    <h4>Hubicacion</h4>
    <h4>Alineacion de hoy</h4>
    <Anfitrionas id={params.id} />
  </Container>
}

export default listaAnfitrionas