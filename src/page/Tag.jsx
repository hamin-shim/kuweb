import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const data = [
  "조용 place",
  "팀플 place",
  "수면 place",
  "밥 place",
  "공부 place",
  "콘센트 place",
  "조용 place",
  "팀플 place",
  "수면 place",
  "밥 place",
  "공부 place",
  "콘센트 place",
];
export default function Tag() {
  return (
    <Container>
      <GridBox>
        {data.map((e, i) => (
          <div className="box">
            <div className="innercontent">
              <img
                src="https://media.istockphoto.com/vectors/medical-face-mask-icon-vector-id1214356891?k=20&m=1214356891&s=612x612&w=0&h=3OgfJzuzfeOYFIUA1PwJeqT9RexaMP-_lIhm-LowATM="
                alt="mask"
              />
              <span>{e}</span>
            </div>
          </div>
        ))}
      </GridBox>
    </Container>
  );
}
const GridBox = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-around;
  grid-row-gap: 30px;
  .box {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: whitesmoke;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    position: relative;
    .innercontent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        width: 70%;
        margin: auto;
      }
    }
  }
`;
