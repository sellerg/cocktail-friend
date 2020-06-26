import React from "react";
import styled from "styled-components";

import CocktailCardComponentRandom from "./CocktailCardComponentRandom";

export default function Random(props) {
  return (
    <Div>
      <CocktailCardComponentRandom drink={props.random} />
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  margin: 0;
`;
