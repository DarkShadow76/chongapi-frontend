"use client"
import ListaAnfitrionas from "@/components/ListaAnfitrionas"
import { Container } from "react-bootstrap"
import data from '@/json/locations.json'

const Anfitrionas = ({ params }) => {

  return <Container>
    <h2>{data['locales'][`${params.id - 1}`]['name']}</h2>
    <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Descripción</h4>
    <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Ubicacion</h4>
    <span>Usar Api de google maps</span>
    <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Alineación de hoy:</h4>
    <ListaAnfitrionas id={params.id} />
  </Container>
}

export default Anfitrionas