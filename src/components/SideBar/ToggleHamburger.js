import React from "react";
import styled from "styled-components";

export default function ToggleHamburger(props) {
  return (
    <ToggleButton onClick={props.handleToggleSideBar}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  width: 2.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const ToggleButtonLine = styled.div`
  width: 2.2rem;
  height: 0.17rem;
  background-color: white;
`;
