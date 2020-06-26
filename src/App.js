import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Backdrop from "./components/Backdrop/Backdrop";
import BackdropRandom from "./components/Backdrop/BackdropRandom";
import Catalogue from "./components/Catalogue/Catalogue";
import Discover from "./components/Discover/Discover";
import Random from "./components/Random/Random";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [randomOpen, setRandomOpen] = useState(false);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    window.onscroll = function () {
      var top = window.scrollY;
      if (top > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    handleRandomClick();
  }, [randomOpen]);

  const handleToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleToggleRandom = () => {
    setRandomOpen(!randomOpen);
  };

  const handleBackDropClick = () => {
    setSideBarOpen(false);
  };

  const handleBackDropRandomClick = () => {
    setRandomOpen(false);
  };

  async function handleRandomClick() {
    let response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    let data = await response.json();
    console.log(data);
    setRandom(data.drinks[0]);
  }

  let backDrop;
  if (sideBarOpen) {
    backDrop = <Backdrop handleBackDropClick={handleBackDropClick} />;
  }
  let backdroprandom;
  if (randomOpen) {
    backdroprandom = (
      <>
        <BackdropRandom handleBackDropRandomClick={handleBackDropRandomClick} />
        <Random handleRandomClick={handleRandomClick} random={random} />
      </>
    );
  }

  return (
    <Div>
      <Router>
        <Navbar
          handleToggleSideBar={handleToggleSideBar}
          handleToggleRandom={handleToggleRandom}
          handleBackDropRandomClick={handleBackDropRandomClick}
          isScrolled={isScrolled}
          handleRandomClick={handleRandomClick}
        />
        <SideBar
          showSideBar={sideBarOpen}
          handleToggleRandom={handleToggleRandom}
          handleRandomClick={handleRandomClick}
        />
        {backDrop}
        {backdroprandom}
        <Route path="/" exact component={Home} />
        <Route path="/catalogue" component={Catalogue} />
        {/* <Route path="/random" component={Random} /> */}
        <Route path="/discover" component={Discover} />
      </Router>
    </Div>
  );
}

export default App;

const Div = styled.div`
  height: 100%;
`;
