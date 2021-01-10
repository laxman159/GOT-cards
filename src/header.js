import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import logo from "./img/gotlogo.png";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .imggg {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  .dark-mode {
    cursor: pointer;
    .moon {
      transform: rotate(-25deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <img className="imggg" src={logo} alt="image" />
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="far fa-moon"></i>
                )}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;