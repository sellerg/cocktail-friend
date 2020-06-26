import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ToggleHamburger from "../SideBar/ToggleHamburger";
import martini from "./../../assets/martini.png";

export default function navbar(props) {
  return (
    <Header isScrolled={props.isScrolled}>
      <Navlinks>
        <Hamburger>
          <ToggleHamburger handleToggleSideBar={props.handleToggleSideBar} />
        </Hamburger>
        <LogoWrap>
          <img src={martini} alt="logo" />
          <Logo to="/">Cocktail Friend</Logo>
        </LogoWrap>
        <Spacer />
        <Navitems>
          <ul>
            <li>
              <Navitem to="/catalogue">Catalogue</Navitem>
            </li>
            <li>
              <Navitem onClick={props.handleToggleRandom}>Random</Navitem>
            </li>
            <li>
              <Navitem to="/discover">Discover</Navitem>
            </li>
          </ul>
        </Navitems>
      </Navlinks>
    </Header>
  );
}

// styled-components

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: ${(props) => (props.isScrolled ? "black" : "transparent")};
  transition: 0.5s ease;
  z-index: 2;
`;

const Navlinks = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  /* font-family: "Italianno", cursive; */
  font-family: "Limelight", cursive;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Navitem = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover,
  &:active {
    border-bottom: 1px solid white;
  }
`;

const Navitems = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  & li {
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  & img {
    height: 2rem;
    width: 2rem;
  }

  @media (min-width: 769px) {
    margin-left: 0;
  }
`;

const Hamburger = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
