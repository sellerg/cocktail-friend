import React from "react";
import styled from "styled-components";

import CocktailCardComponent from "./CocktailCardComponent";

export default function Random(props) {
  return (
    <Div>
      <CocktailCardComponent drink={props.random} />
      {/* <h2>{props.random.strDrink}</h2>
      <Wrapper>
        <img src={props.random.strDrinkThumb} alt="random" />
        <div>
          <h1>
            <u>Ingredients</u>
          </h1>
          {props.random.strMeasure1 ? (
            <p>{props.random.strMeasure1 + props.random.strIngredient1}</p>
          ) : null}
          {props.random.strMeasure2 ? (
            <p>{props.random.strMeasure2 + props.random.strIngredient2}</p>
          ) : null}
          {props.random.strMeasure3 ? (
            <p>{props.random.strMeasure3 + props.random.strIngredient3}</p>
          ) : null}
          {props.random.strMeasure4 ? (
            <p>{props.random.strMeasure4 + props.random.strIngredient4}</p>
          ) : null}
          {props.random.strMeasure5 ? (
            <p>{props.random.strMeasure5 + props.random.strIngredient5}</p>
          ) : null}
          {props.random.strMeasure6 ? (
            <p>{props.random.strMeasure6 + props.random.strIngredient6}</p>
          ) : null}
          {props.random.strMeasure7 ? (
            <p>{props.random.strMeasure7 + props.random.strIngredient7}</p>
          ) : null}
          {props.random.strMeasure8 ? (
            <p>{props.random.strMeasure8 + props.random.strIngredient8}</p>
          ) : null}
          {props.random.strMeasure9 ? (
            <p>{props.random.strMeasure9 + props.random.strIngredient9}</p>
          ) : null}
          {props.random.strMeasure10 ? (
            <p>{props.random.strMeasure10 + props.random.strIngredient10}</p>
          ) : null}
          {props.random.strMeasure11 ? (
            <p>{props.random.strMeasure11 + props.random.strIngredient11}</p>
          ) : null}
          {props.random.strMeasure12 ? (
            <p>{props.random.strMeasure12 + props.random.strIngredient12}</p>
          ) : null}
          {props.random.strMeasure13 ? (
            <p>{props.random.strMeasure13 + props.random.strIngredient13}</p>
          ) : null}
          {props.random.strMeasure14 ? (
            <p>{props.random.strMeasure14 + props.random.strIngredient14}</p>
          ) : null}

          {props.random.strMeasure15 ? (
            <p>{props.random.strMeasure15 + props.random.strIngredient15}</p>
          ) : null}

          <h1>
            <u>Instructions</u>
          </h1>
          <p>{props.random.strInstructions}</p>
        </div>
      </Wrapper> */}
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
