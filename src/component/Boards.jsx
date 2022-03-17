import React from "react";
import styled from "styled-components";

const data = [
  "질문 게시판",
  "이벤트",
  "공지사항",
  "최신글",
  "인기글",
  "유용한 사이트",
];
export default function Boards() {
  return (
    <GridBox>
      {data.map((e, i) => (
        <EachBoard>
          <Circle>Icon</Circle>
          <Text>{e}</Text>
        </EachBoard>
      ))}
    </GridBox>
  );
}
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const EachBoard = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
  flex-direction: column;
  align-items: center;
`;
const Circle = styled.div`
  width: 80%;
  border-radius: 50%;
  height: 0;
  padding-bottom: 80%;
  background-color: whitesmoke;
  text-align: center;
`;
const Text = styled.span``;
