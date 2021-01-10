import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

function CountryList() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  // console.log("el estado total de mi app es", countryList);
  // const [countryList, setCountryList] = useState([])

  //https://api.jsonbin.io/b/5ff9445c61f92720434a7272/3
  //https://restcountries.eu/rest/v2/all
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5ff9445c61f92720434a7272/3")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        //setCountryList(data);
        //console.log(list);
      })
      .catch(() => {
        console.log("hubo un error, que dolor que dolo que pena");
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <CountryListStyled>
        {countryList.map(({ characterImageFull, characterName, houseName }) => {
          if (characterImageFull) {
            return (
              <Country
                flag={characterImageFull}
                name={characterName}
                key={characterImageFull + Math.random()}
                region={houseName}
              />
            );
          }
        })}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
