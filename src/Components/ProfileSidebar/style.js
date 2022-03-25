import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  height: fit-content;
  padding: 0.64rem;
  border-radius: 6px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const ImageProfile = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const Line = styled.hr`
  margin-top: 14px;
  margin-bottom: 14px;
  border-color: transparent;
  border-bottom-color: #ecf2fa;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 0.5rem;
  line-height: 20px;
  text-align: left;
`;

export const Title = styled.a`
  font-size: 16px;
  color: #337AB7;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 800;
`;

export const Apps = styled.p`
  text-align: left;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: left;
`;

export const ContainerLogout = styled.div`
  margin-top: 2.5rem;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const IconText = styled.p`
  font-size: 16px;
  color: #337AB7;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
