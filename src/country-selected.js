import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: 0.5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ",";
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`;

function CountrySelected({
  characterImageFull,
  characterName,
  houseName,
  actorName,
  nickname,
  siblings = [],
  guardedBy = [],
  killed = [],
  parents = [],
  servedBy = [],
  parentOf = [],
  marriedEngaged = [],
  killedBy = [],
  serves = [],
  kingsguard,
}) {
  return (
    <CountrySelectedStyled>
      <img src={characterImageFull} alt="" />
      <div>
        <h2>{characterName}</h2>
        <div className="grid">
          <div>
            <p>
              <strong> Name: </strong> {characterName}
            </p>
            <p style={houseName ? {} : { display: "none" }}>
              <strong>House Name: </strong> {houseName}
            </p>
            <p style={nickname ? {} : { display: "none" }}>
              <strong>Nickname: </strong> {nickname}
            </p>
            <p style={killedBy.length > 0 ? {} : { display: "none" }}>
              <strong>Killed By: </strong> {killedBy}
            </p>
            <p>
              <strong>Actor Name: </strong> {actorName}
            </p>
            <p style={marriedEngaged.length > 0 ? {} : { display: "none" }}>
              <strong>Married/Engaged : </strong>
            </p>
            {marriedEngaged.map((item) => (
              <span class="border-item">{item}</span>
            ))}
            <p style={servedBy.length > 0 ? {} : { display: "none" }}>
              <strong>Served by : </strong>
            </p>
            {servedBy.map((item) => (
              <span class="border-item">{item}</span>
            ))}
            <p style={parentOf.length > 0 ? {} : { display: "none" }}>
              <strong>Parents Of : </strong>
            </p>
            {parentOf.map((item) => (
              <span class="border-item">{item}</span>
            ))}
            <p style={serves.length > 0 ? {} : { display: "none" }}>
              <strong>Serves : </strong>
            </p>
            {serves.map((item) => (
              <span class="border-item">{item}</span>
            ))}

            <p style={parents.length > 0 ? {} : { display: "none" }}>
              <strong>Parents : </strong>
            </p>
            {parents.map((item) => (
              <span class="border-item">{item}</span>
            ))}
          </div>
          <div></div>
        </div>
        <p
          style={killed.length > 0 ? {} : { display: "none" }}
          className="borders"
        >
          <strong>Kill : </strong>
        </p>
        {killed.map((item) => (
          <span class="border-item">{item}</span>
        ))}

        <p
          style={guardedBy.length > 0 ? {} : { display: "none" }}
          className="borders"
        >
          <strong>GaurdedBy : </strong>
        </p>
        {guardedBy.map((item) => (
          <span class="border-item">{item}</span>
        ))}
        <p
          style={siblings.length > 0 ? {} : { display: "none" }}
          className="borders"
        >
          <strong>Siblings : </strong>
        </p>
        {siblings.map((item) => (
          <span class="border-item">{item}</span>
        ))}
      </div>
    </CountrySelectedStyled>
  );
}

export default CountrySelected;
