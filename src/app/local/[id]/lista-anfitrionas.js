"use client"
import Anfitrionas from "@/components/Anfitrionas"
import { Container } from "react-bootstrap"
import data from '@/json/locations.json'

const listaAnfitrionas = ({ params }) => {

  return <Container>
    <h2>{data['locales'][`${params.id-1}`]['name']}</h2>
    <h4>Descripcion</h4>
    <h4>Hubicacion</h4>
    <span>Usar Api de google maps</span>
    <h4>Alineacion de hoy</h4>
    <Anfitrionas id={params.id} />
  </Container>
}

export default listaAnfitrionas