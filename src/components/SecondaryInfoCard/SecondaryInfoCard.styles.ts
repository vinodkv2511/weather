import styled from "styled-components";

export const StyledSecondaryInfoCard = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;

  @media (min-width:760px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width:1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`