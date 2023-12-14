"use client"
import Layout from "@/components/Layout"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Entitys from "@/components/Entitys"
import { Container } from "react-bootstrap"

const Page = () => {

  return <Layout
    makeHeader={() => <Header titulo="Lista Locales"/>}
    makeBody={
      () => <div>
        <Container style={{ alignContent: "center", marginTop: "1rem" }}>
          <Entitys/>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page