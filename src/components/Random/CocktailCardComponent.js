import React, { useState } from "react";
import styled from "styled-components";

export default function CocktailCardComponent(props) {
  const [flipped, isFlipped] = useState(false);

  const handleFlip = () => {
    isFlipped(!flipped);
  };

  return (
    <CocktailCard onClick={handleFlip} flipped={flipped}>
      {flipped ? (
        <>
          <h3>{props.drink.strDrink}</h3>
          <h1>
            <u>Ingedients</u>
          </h1>
          {props.drink.strMeasure1 ? (
            <p>{props.drink.strMeasure1 + props.drink.strIngredient1}</p>
          ) : null}
          {props.drink.strMeasure2 ? (
            <p>{props.drink.strMeasure2 + props.drink.strIngredient2}</p>
          ) : null}
          {props.drink.strMeasure3 ? (
            <p>{props.drink.strMeasure3 + props.drink.strIngredient3}</p>
          ) : null}
          {props.drink.strMeasure4 ? (
            <p>{props.drink.strMeasure4 + props.drink.strIngredient4}</p>
          ) : null}
          {props.drink.strMeasure5 ? (
            <p>{props.drink.strMeasure5 + props.drink.strIngredient5}</p>
          ) : null}
          {props.drink.strMeasure6 ? (
            <p>{props.drink.strMeasure6 + props.drink.strIngredient6}</p>
          ) : null}
          {props.drink.strMeasure7 ? (
            <p>{props.drink.strMeasure7 + props.drink.strIngredient7}</p>
          ) : null}
          {props.drink.strMeasure8 ? (
            <p>{props.drink.strMeasure8 + props.drink.strIngredient8}</p>
          ) : null}
          {props.drink.strMeasure9 ? (
            <p>{props.drink.strMeasure9 + props.drink.strIngredient9}</p>
          ) : null}
          {props.drink.strMeasure10 ? (
            <p>{props.drink.strMeasure10 + props.drink.strIngredient10}</p>
          ) : null}
          {props.drink.strMeasure11 ? (
            <p>{props.drink.strMeasure11 + props.drink.strIngredient11}</p>
          ) : null}
          {props.drink.strMeasure12 ? (
            <p>{props.drink.strMeasure12 + props.drink.strIngredient12}</p>
          ) : null}
          {props.drink.strMeasure13 ? (
            <p>{props.drink.strMeasure13 + props.drink.strIngredient13}</p>
          ) : null}
          {props.drink.strMeasure14 ? (
            <p>{props.drink.strMeasure14 + props.drink.strIngredient14}</p>
          ) : null}

          {props.drink.strMeasure15 ? (
            <p>{props.drink.strMeasure15 + props.drink.strIngredient15}</p>
          ) : null}

          <h1>
            <u>Instructions</u>
          </h1>
          <p>{props.drink.strInstructions}</p>
        </>
      ) : (
        <>
          <h2>{props.drink.strDrink}</h2>
          <Seperator />
          <img src={props.drink.strDrinkThumb} alt="cocktail" />
        </>
      )}
    </CocktailCard>
  );
}

const CocktailCard = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  padding: 1rem;
  height: 20rem;
  width: 10rem;
  background-image: linear-gradient(to bottom right, rgba(24, 24, 24), black);
  border-radius: 15px;
  margin: 0;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0)")};
  transition: 150ms;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }

  & img {
    position: cover;
    width: 100%;
    height: 70%;
    border-radius: 10px;
  }

  & h2 {
    font-family: "Limelight", cursive;
    font-size: 1.4rem;
    color: white;
    text-align: center;
    text-decoration: none;
  }

  & p {
    transform: rotateY(180deg);
    color: white;
    padding: 0.1rem;
    font-size: 0.6rem;
  }

  & h1 {
    font-size: 0.8rem;
    transform: rotateY(180deg);
    color: coral;
  }

  & h3 {
    font-size: 1.2rem;
    transform: rotateY(180deg);
    color: coral;
    font-family: "Limelight", cursive;
  }
`;

const Seperator = styled.div`
  flex: 1;
`;
