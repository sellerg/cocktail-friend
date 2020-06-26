import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CocktailCardComponent from "./CocktailCardComponent";

export default function Discover() {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  const [discover, setDiscover] = useState("");
  const [query, setQuery] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [start, setStart] = useState(false);
  const URLingredient =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [error, setError] = useState("noerror");

  useEffect(() => {
    if (query) {
      setStart(true);
      getIngredientSearch();
    }
  }, [query]);

  const handleSearch = (event) => {
    setDiscover(event.target.value);
    console.log(discover);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(discover);
    setDiscover("");
  };

  async function getIngredientSearch() {
    try {
      let response = await fetch(`${URL}${query}`);
      let data = await response.json();
      setCocktail(data.drinks);
      setError("noerror");
      console.log(data);
    } catch (err) {
      console.log("Error");
      setError("error");
    }
  }

  return (
    <Div>
      <P1>
        Thirsty? We have hundreds and hundreds of delicious cocktail recipes
        from expert bartenders around the world. No matter if you're looking for
        a classic cocktail, a punch for a party or an original concoction, we
        have a cocktail recipe for every taste and occasion, just a shake, stir
        or pour away.
      </P1>
      <P2>Have an ingredient? Please discover our selection.</P2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Discover..."
          value={discover}
          onChange={handleSearch}
        ></input>
        <button>
          <i class="icon-search"></i>
        </button>
      </Form>
      {start ? (
        <CocktailCardWrapper>
          {error !== "error" ? (
            cocktail.map((drink) => (
              <CocktailCardComponent
                key={drink.strDrink}
                drink={drink}
                ingredient={`${URLingredient}${drink.idDrink}`}
              />
            ))
          ) : (
            <CocktailCard>
              <h2>
                Sorry, we don't seem to have any cocktails that contain that
                ingredient :(
              </h2>
            </CocktailCard>
          )}
        </CocktailCardWrapper>
      ) : (
        <div></div>
      )}
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: relative;
  background: rgb(96, 96, 96);
  text-align: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
`;

const P1 = styled.p`
  padding: 5rem;
  margin: 0;
  padding-bottom: 0;
  color: white;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const P2 = styled.p`
  font-size: 1.3rem;
  color: coral;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: "Limelight", cursive;
`;

const Form = styled.form`
  & input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    margin-right: 0.5rem;
    border-radius: 20px;
    &:focus {
      outline: none;
    }
  }
  & button {
    font-size: 1rem;
    padding: 0.5rem 0.6rem;
    border-radius: 50%;
    border: 2px solid white;
    background-color: transparent;
    color: white;

    &:hover {
      box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
      background: coral;
      cursor: pointer;
    }
  }
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
