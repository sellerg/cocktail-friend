import React from "react";
import styled from "styled-components";

export default function Backdrop(props) {
  return <BackDrop onClick={props.handleBackDropClick} />;
}

const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;
