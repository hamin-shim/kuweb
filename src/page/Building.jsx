import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import BuildingCard from "../component/BuildingCard";
import styled from "styled-components";

export default function Building() {
  const data = [
    { name: "4.18기념관", location: "인문계" },
    { name: "CJ 인터네셔널 하우스", location: "의과대 및 기숙사" },
    { name: "CJ 법학관", location: "인문계" },
    { name: "CJ 식품안전관", location: "이공계" },
    { name: "신공학관", location: "이공계" },
    { name: "R&D센터", location: "녹지" },
    { name: "4.18기념관", location: "인문계" },
    { name: "CJ 인터네셔널 하우스", location: "의과대 및 기숙사" },
    { name: "CJ 법학관", location: "인문계" },
    { name: "CJ 식품안전관", location: "이공계" },
    { name: "신공학관", location: "이공계" },
    { name: "R&D센터", location: "녹지" },
  ];
  return (
    <Container>
      <Row
        style={{
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        {/* <Col xs={4}>1</Col>
        <Col xs={7}>2</Col> */}
        <Col xs={3}>
          <Map>학교 지도</Map>
        </Col>
        <Col xs={9}>
          <TabBar>
            <span className="tab">전체</span>
            <span className="sep">|</span>
            <span className="tab">인문계</span>
            <span className="sep">|</span>
            <span className="tab">이공계</span>
            <span className="sep">|</span>
            <span className="tab">녹지</span>
            <span className="sep">|</span>
            <span className="tab">의과대 및 기숙사</span>
          </TabBar>
        </Col>
      </Row>
      {data.map((e, i) => (
        <BuildingCard data={e} key={i} />
      ))}
    </Container>
  );
}
const Map = styled.div`
  font-size: 12px;
  background: red;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  .tab {
    font-size: 12px;
  }
  .sep {
    font-size: 12px;
  }
`;
