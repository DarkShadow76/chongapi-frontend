import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Lateral from "@/components/Lateral"
import { Col, Row } from "react-bootstrap"

export default function layout({ children }) {
  return (
    <>
      <Row>
        <Col xs sm={2}>
          <Lateral />
        </Col>
        <Col xs sm={8}>
          {children}
        </Col>
      </Row>
    </>
  )
}
