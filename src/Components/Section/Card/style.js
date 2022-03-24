import styled from "styled-components";

export const Container = styled.div`
  background: #f0f0f0;
  width: fit-content;
  padding: 0 1rem 1rem 1rem;
  width: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  color: #337ab7;
  img {
    max-width: 70px;
    max-height: 80px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 12px;

  strong {
    color: #0a6a9d;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

