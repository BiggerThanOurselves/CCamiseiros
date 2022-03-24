import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 3rem;

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
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
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    box-sizing: border-box;
    .cu1, .cu2{
      display: none;
    }
 `;
