import LateralBar from "@/app/ui/common/LateralBar";
import { Col, Row } from "react-bootstrap";

export default function layout({ children }) {
  return (
    <>
      <Row>
        <Col xs sm={2}>
          <LateralBar />
        </Col>
        <Col xs sm={8}>
          {children}
        </Col>
      </Row>
    </>
  );
}
