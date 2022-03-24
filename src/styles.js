import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 3rem;
`;

export const BodyContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 2.5fr 6fr 3fr;
  grid-gap: 1rem;

  .cu {
    background: green;
  }

  .cu1 {
    background: blue;
  }

  .cu2 {
    background: yellow
  }
`;
