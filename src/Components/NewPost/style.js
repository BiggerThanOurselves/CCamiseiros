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

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    width: fit-content;
    color: #337ab7;
    background: white;
    border: 1px solid #c5c6ca;
    boder-radius: 7px;
    cursor: pointer;
    margin: 0 0 0 auto;
  }

  button:hover {
    background: #eee;
  }
  
  textarea {
    resize: vertical; 
    margin: 1rem 0;
    border-color: #ccc;
  }

`;


