import React, { useState } from "react";
import styled from "styled-components";

export default function CocktailCardComponent(props) {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [flipped, isFlipped] = useState(false);
  const [ingredients, setIngredients] = useState("");

  const handleFlip = () => {
    isFlipped(!flipped);
    getIngredients();
  };

  async function getIngredients() {
    let response = await fetch(`${URL}${props.drink.idDrink}`);
    let data = await response.json();
    setIngredients(data.drinks[0]);
  }

  return (
    <CocktailCard onClick={handleFlip} flipped={flipped}>
      {flipped ? (
        <>
          <h3>{props.drink.strDrink}</h3>
          <h1>
            <u>Ingedients</u>
          </h1>
          {ingredients.strMeasure1 ? (
            <p>{ingredients.strMeasure1 + ingredients.strIngredient1}</p>
          ) : null}
          {ingredients.strMeasure2 ? (
            <p>{ingredients.strMeasure2 + ingredients.strIngredient2}</p>
          ) : null}
          {ingredients.strMeasure3 ? (
            <p>{ingredients.strMeasure3 + ingredients.strIngredient3}</p>
          ) : null}
          {ingredients.strMeasure4 ? (
            <p>{ingredients.strMeasure4 + ingredients.strIngredient4}</p>
          ) : null}
          {ingredients.strMeasure5 ? (
            <p>{ingredients.strMeasure5 + ingredients.strIngredient5}</p>
          ) : null}
          {ingredients.strMeasure6 ? (
            <p>{ingredients.strMeasure6 + ingredients.strIngredient6}</p>
          ) : null}
          {ingredients.strMeasure7 ? (
            <p>{ingredients.strMeasure7 + ingredients.strIngredient7}</p>
          ) : null}
          {ingredients.strMeasure8 ? (
            <p>{ingredients.strMeasure8 + ingredients.strIngredient8}</p>
          ) : null}
          {ingredients.strMeasure9 ? (
            <p>{ingredients.strMeasure9 + ingredients.strIngredient9}</p>
          ) : null}
          {ingredients.strMeasure10 ? (
            <p>{ingredients.strMeasure10 + ingredients.strIngredient10}</p>
          ) : null}
          {ingredients.strMeasure11 ? (
            <p>{ingredients.strMeasure11 + ingredients.strIngredient11}</p>
          ) : null}
          {ingredients.strMeasure12 ? (
            <p>{ingredients.strMeasure12 + ingredients.strIngredient12}</p>
          ) : null}
          {ingredients.strMeasure13 ? (
            <p>{ingredients.strMeasure13 + ingredients.strIngredient13}</p>
          ) : null}
          {ingredients.strMeasure14 ? (
            <p>{ingredients.strMeasure14 + ingredients.strIngredient14}</p>
          ) : null}

          {ingredients.strMeasure15 ? (
            <p>{ingredients.strMeasure15 + ingredients.strIngredient15}</p>
          ) : null}

          <h1>
            <u>Instructions</u>
          </h1>
          <p>{ingredients.strInstructions}</p>
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
  padding-bottom: 1rem;
  height: 20rem;
  width: 10rem;
  background-image: linear-gradient(to bottom right, rgba(24, 24, 24), black);
  border-radius: 15px;
  margin: 1rem;
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
    height: 60%;
    border-radius: 10px;
  }

  & h2 {
    font-family: "Limelight", cursive;
    font-size: 1.2rem;
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
