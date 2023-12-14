"use client"
import Layout from "@/components/Layout"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Container } from "react-bootstrap"

const Page = ({ params }) => {

  return <Layout
    makeHeader={() => <Header titulo={`Pagina Local ${params.id}`} />}
    makeBody={
      () => <div>
        <h4>Descripcion</h4>
        <h3>Hubicacion</h3>
        <Container style={{ alignContent: "center", marginTop: "1rem" }}>
          <h3>Alineacion de hoy</h3>
          <li>Claudia - #32</li>
          <li>Camila - #28</li>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page