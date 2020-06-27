import React from "react";
import styled from "styled-components";

import linkedinIcon from "./../../assets/linkedin1.png";
import githubIcon from "./../../assets/github.png";

export default function Footer() {
  return (
    <MediaLinks>
      <a
        href="https://www.linkedin.com/in/greg-seller-7173431ab"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img src={linkedinIcon} alt="github" />
      </a>
      <a
        href="https://github.com/sellerg/cocktail-friend"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img src={githubIcon} alt="linkedin" />
      </a>
    </MediaLinks>
  );
}

const MediaLinks = styled.div`
  display: flex;
  margin-top: 3rem;
  bottom: 0;
  right: 0;
`;

const Img = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin: 1rem;
  filter: brightness(90%);
  &:hover {
    filter: brightness(60%);
  }
`;
