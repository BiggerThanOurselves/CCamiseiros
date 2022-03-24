import styled from "styled-components";
import { MenuOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4485bb;

  & nav ul {
    display: flex;
    color: white;
    gap: 0.5rem;
    font-size: 11px;
  }

  & li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  & li:not(:last-child):after {
    content: '|';
    margin-left: 0.5rem;
    color: #185b93;
  }

  @media only screen and (max-width: 500px) {
    nav {
      display: none;
    }
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

`;

export const LogoContainer = styled.div`
  background-color: white;
  height: 2.5rem;
  display: flex;
  max-width: fit-content;

  padding: 0 0.5rem;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.p`
  font-size: 12px;
  color: #0f203e;
  font-weight: bolder;
  letter-spacing: .7px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;


export const Out = styled.p`
  display: flex;
  align-items: center;
  color: white;
  gap: 0.5rem;
  font-size: 11px;
 
  &:hover {
    text-decoration: underline;
    cursor: pointer;  
  }

  &:before {
    content: '|';
    margin-left: 0.5rem;
    color: #185b93;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
  
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  background-color: #5778a3;
  margin-left: 0.5rem;
  border-radius: 7px;
  color: white;
  font-weight: bold;

  @media only screen and (max-width: 650px) {
    padding: 6px;
    cursor: pointer;
    border-radius: 50px;
  }
`;

export const SearchInput = styled.input`
  max-width: 120px;
  font-size: 12px;

  @media only screen and (max-width: 650px) {

    display: ${({ active }) => active ? 'flex' : 'none'};
    max-width: 100%;
  }

`;

export const MenuBurguer = styled(MenuOutlined)`
  color: white;
  background: #5778a3;
  padding: 6px;
  border-radius: 50px;
  margin-right: 0.5rem;

  @media only screen and (min-width: 650px) {
    display: none;
  }
`;
