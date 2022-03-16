import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
export default function BuildingCard({ data }) {
  return (
    <>
      <Box>
        <Left>
          <BuildImg>
            <img
              src="https://lh3.googleusercontent.com/-0f0t5GbO5AU/Wn_94w_hchI/AAAAAAAA3ac/0etMXHkF3DsOkY5FjZ-dSPEswgxxPiXzwCHMYCw/s0/cdc583570b10cb30e987b85c64c06faa69c01a89.jpg"
              alt="4.18 기념관"
            />
          </BuildImg>
          <Content>
            <span className="name">{data.name}</span>
            <span className="location">{data.location}</span>
          </Content>
        </Left>
        <Arrow>{">"}</Arrow>
      </Box>
    </>
  );
}
const Box = styled.div`
  display: flex;
  background-color: #c5c5e6;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const BuildImg = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
`;
const Content = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  .name {
    font-size: 18px;
  }
  .location {
    font-size: 12px;
    color: gray;
  }
`;
const Arrow = styled.div`
  font-size: 30px;
  color: red;
  margin-right: 10px;
`;
