import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <Sidebar showSideBar={props.showSideBar}>
      <ul>
        <li>
          <Sideitem to="/" onClick={props.handleBackDropClick}>
            Home
          </Sideitem>
        </li>
        <li>
          <Sideitem to="/catalogue" onClick={props.handleBackDropClick}>
            Catalogue
          </Sideitem>
        </li>
        <li>
          <Sideitem onClick={props.handleToggleRandom}>Random</Sideitem>
        </li>
        <li>
          <Sideitem to="/discover" onClick={props.handleBackDropClick}>
            Discover
          </Sideitem>
        </li>
      </ul>
    </Sidebar>
  );
}

const Sideitem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;

  &:hover,
  &:active {
    color: black;
    border-bottom: 1px solid black;
  }
`;

const Sidebar = styled.nav`
  background: rgb(242, 242, 242);
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  width: 70%;
  max-width: 400px;
  height: 100%;
  z-index: 200;
  transform: ${(props) =>
    props.showSideBar ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-out;

  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & li {
    margin: 0.5rem 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
