import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../component/Banner";
import Boards from "../component/Boards";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Boards />
    </Container>
  );
}
