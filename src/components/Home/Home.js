import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import homeImage from "./../../assets/homeImage2.jpg";
import Footer from "./../Footer/Footer";

export default function Home() {
  return (
    <Main>
      <Div>
        <Welcome>
          <H1>Welcome to</H1>
          <H2>your Cocktail Friend</H2>
        </Welcome>
        <p>Have an ingredient?</p>
        <Link to="/discover">
          <button>
            <i class="icon-search"></i>Discover
          </button>
        </Link>
        <p>Or browse our large catalogue of cocktails</p>
        <Link to="/catalogue">
          <button>
            <i class="icon-book"></i>Catalogue
          </button>
        </Link>
      </Div>
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  height: 100vh;
  background-color: black;
  background-image: url(${homeImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);

  & p {
    color: white;
  }

  & button {
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    background: coral;

    color: white;
    border: 1.5px solid white;
    padding: 0.7rem;
    border-radius: 20px;

    &:hover {
      background: transparent;
      border: 1.5px solid white;
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    & i {
      padding-right: 0.5rem;
    }
  }
`;

const H2 = styled.h1`
  font-size: 2rem;
  color: coral;
  font-family: "Limelight", cursive;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  color: white;
  font-family: "Limelight", cursive;
  color: white;
`;

const Welcome = styled.div`
  /* border-top: 3px solid white; */
  border-bottom: 3px solid white;
  padding: 2rem;
  max-width: 70vw;
`;

const Div = styled.div``;
