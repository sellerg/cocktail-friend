import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CocktailCardComponent from "./CocktailCardComponent";

export default function Catalogue() {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

  const [letter, setLetter] = useState("a");
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    getCocktailsByLetter();
  }, [letter]);

  const handleLetter = (event) => {
    setLetter(event.target.name);
  };

  async function getCocktailsByLetter() {
    let response = await fetch(`${URL}${letter}`);
    let data = await response.json();
    setCocktail(data.drinks);
    console.log(data.drinks);
  }

  return (
    <Div>
      <AlphabetWrapper>
        <button name="a" onClick={handleLetter}>
          a
        </button>
        <button name="b" onClick={handleLetter}>
          b
        </button>
        <button name="c" onClick={handleLetter}>
          c
        </button>
        <button name="d" onClick={handleLetter}>
          d
        </button>
        <button name="e" onClick={handleLetter}>
          e
        </button>
        <button name="f" onClick={handleLetter}>
          f
        </button>
        <button name="g" onClick={handleLetter}>
          g
        </button>
        <button name="h" onClick={handleLetter}>
          h
        </button>
        <button name="i" onClick={handleLetter}>
          i
        </button>
        <button name="j" onClick={handleLetter}>
          j
        </button>
        <button name="k" onClick={handleLetter}>
          k
        </button>
        <button name="l" onClick={handleLetter}>
          l
        </button>
        <button name="m" onClick={handleLetter}>
          m
        </button>
        <button name="n" onClick={handleLetter}>
          n
        </button>
        <button name="o" onClick={handleLetter}>
          o
        </button>
        <button name="p" onClick={handleLetter}>
          p
        </button>
        <button name="q" onClick={handleLetter}>
          q
        </button>
        <button name="r" onClick={handleLetter}>
          r
        </button>
        <button name="s" onClick={handleLetter}>
          s
        </button>
        <button name="t" onClick={handleLetter}>
          t
        </button>
        <button name="u" onClick={handleLetter}>
          u
        </button>
        <button name="v" onClick={handleLetter}>
          v
        </button>
        <button name="w" onClick={handleLetter}>
          w
        </button>
        <button name="x" onClick={handleLetter}>
          x
        </button>
        <button name="y" onClick={handleLetter}>
          y
        </button>
        <button name="z" onClick={handleLetter}>
          z
        </button>
      </AlphabetWrapper>
      <CocktailCardWrapper>
        {cocktail ? (
          cocktail.map((drink) => (
            <CocktailCardComponent key={drink.strDrink} drink={drink} />
          ))
        ) : (
          <CocktailCard>
            <h2>
              Sorry, we don't have any cocktails beginning with that letter :(
            </h2>
          </CocktailCard>
        )}
      </CocktailCardWrapper>
    </Div>
  );
}

const AlphabetWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  flex-wrap: wrap;

  & button {
    font-size: 1.3rem;
    font-family: "Limelight", cursive;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    background: transparent;
    margin: 2px;

    color: white;
    border: 1.5px solid white;

    border-radius: 5px;
    &:hover,
    &:active {
      cursor: pointer;
      color: black;
      background-color: white;
    }
    &:focus {
      outline: none;
    }
  }
`;

const Div = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background: rgb(96, 96, 96);
  text-align: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
`;

const CocktailCard = styled.div`
  padding: 1rem;
  height: 20rem;
  width: 10rem;
  background-image: linear-gradient(to bottom right, rgba(24, 24, 24), black);
  border-radius: 15px;
  margin: 1rem;
  overflow: hidden;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);

  & img {
    position: cover;
    width: 100%;
    height: 70%;
  }

  & h2 {
    font-family: "Limelight", cursive;
    font-size: 1.4rem;
    color: white;
    text-align: center;
    text-decoration: none;
  }
`;

const CocktailCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;

  @media (max-width: 512px) {
    justify-content: center;
  }
`;
