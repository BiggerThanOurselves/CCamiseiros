import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  background: linear-gradient(
    180deg,
    rgba(54, 139, 201, 0.92) 0%,
    rgba(71, 147, 205, 0.81) 7.29%,
    #609fd3 18.17%,
    #609fd3 80.73%,
    rgba(77, 150, 206, 0.94) 89.58%,
    #368bc9 100%
  );
`;

export const Logo = styled.div`
  width: 79px;
  height: 32px;
  background: url(../../public/sprite.png) -158px 0;
`;
