import React, { useState } from "react";
import styled from "styled-components";
import Search from "./search";

import Wrapper from "./wrapper";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 164px;
    }
  }
`;

function ActionList() {
  const [query, setQuery] = useState("");
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
