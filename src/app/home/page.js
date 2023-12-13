"use client"
import Layout from "../../components/Layout.js"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container } from "react-bootstrap"

const Page = () => {
  return <Layout
    makeHeader={() => <Header />}
    makeBody={
      () => <div>
        <h4>ChongApi</h4>
        <Container style={{ alignContent: "center", marginTop: "2%" }}>
          
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page