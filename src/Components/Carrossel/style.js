import styled from "styled-components";
import {Arrow} from "../../assets/arrow";

export const Container = styled.div`
  position: relative

`;

export const LeftArrow = styled.div`
  position: absolute;
  width: fit-content;
  top: 50%;
  left: 1%;
  cursor: pointer;
  display: ${({ first }) => first ? 'none' : 'block'}
`;

export const RightArrow = styled.div`
  width: fit-content;
  transform: rotate(180deg);
  position: absolute;
  top: 50%;
  left: 90%;
  cursor: pointer;
  display: ${({ last }) => last ? 'none' : 'block'}
`;
