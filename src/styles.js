import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 3rem;

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Divider = styled.div`
  background-color: #4485bb;
  width: 5rem;
  height: 2px;
  margin: 2rem auto;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export const BodyContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 2.5fr 6fr 3fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    box-sizing: border-box;
  }
`;
