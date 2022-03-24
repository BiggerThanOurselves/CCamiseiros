import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  
  span {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 1rem;

  strong {
    color: #0a6a9d;
    font-weight: bold;
  }
`;


export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 0 auto;
`;

export const All = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  color: #337ab7;
  margin-top: 1rem;

  &:hover {
    cursor: pointer
  }
`;
