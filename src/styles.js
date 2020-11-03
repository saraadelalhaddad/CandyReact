import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: #242424;
  background-color:#fefafb}

`;

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Description = styled.h4`
  text-align: center;
  color: pink;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CandyWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;

    &.candy-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export {
  Description,
  Title,
  ShopImage,
  ListWrapper,
  CandyWrapper,
  GlobalStyle,
};
