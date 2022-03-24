import styled from "styled-components";

export const Container = styled.div`
  position: relative

`;

export const LeftArrow = styled.div`
  position: absolute;
  width: fit-content;
  top: 45%;
  left: 0%;
  transform: translate(16px);
  cursor: pointer;
  display: ${({ first }) => first ? 'none' : 'block'}
`;

export const RightArrow = styled.div`
  width: fit-content;
  transform: rotate(180deg) translate(50px);
  position: absolute;
  top: 45%;
  left: 100%;
  cursor: pointer;
  display: ${({ last }) => last ? 'none' : 'block'}
`;
