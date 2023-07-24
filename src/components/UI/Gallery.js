import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import {imageData as images} from "../../assets/DUMMY_IMAGES";

function Gallery() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={images[0].url} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[1].url} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[2].url} thumbnail />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src={images[3].url} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[4].url} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[5].url} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
