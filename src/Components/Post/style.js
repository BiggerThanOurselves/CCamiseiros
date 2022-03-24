import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 1rem;
  text-align: left;
  flex-direction: column;
  font-size: 14px;
  color: #333;
  border-radius: 6px;

  margin-top: 1rem;

  button {
    width: fit-content;
    color: #337ab7;
    background: white;
    border: 1px solid #c5c6ca;
    boder-radius: 7px;
    cursor: pointer;
  }

  button:hover {
    background: #eee;
  }

  img {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font-size: 14px;
    color: #337ab7;
  }

  h4 {
    margin-top: 0.5rem;
    font-size: 16px;
    font-weight: bold;
  }
  
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  padding: 1rem;
  background: #f0f7ff;
  margin: 1rem 0;
  
  p {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: bold;
  }
`;

