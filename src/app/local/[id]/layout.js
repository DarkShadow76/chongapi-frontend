import LateralBar from "@/app/ui/common/LateralBar";
import { Col, Container, Row } from "react-bootstrap";

export default function layout({ children }) {
  return (
    <Container className="album py-5 bg-light">
      <Row></Row>
        <Col xs sm={10}>
          {children}
        </Col>
    </Container>
  );
}
