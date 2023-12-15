"use client"
import { useParams } from 'react-router-dom';
import Anfitrionas from "@/components/Anfitrionas"
import { Container } from "react-bootstrap"

const listaAnfitrionas = ({ params }) => {

  const { id } = useParams();

  return <Container>
    <h4>Descripcion</h4>
    <h4>Hubicacion</h4>
    <h4>Alineacion de hoy</h4>
    <Anfitrionas id={id} />
  </Container>
}

export default listaAnfitrionas