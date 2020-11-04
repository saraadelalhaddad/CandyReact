import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color:${(props) => props.theme.backgroundColor};
}

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

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const SearchBarStyled = styled.input` 
padding: 0.5rem;
margin 1 rem auto;
display: block;
width: 40%;
`;

export {
  Description,
  Title,
  ShopImage,
  ListWrapper,
  CandyWrapper,
  GlobalStyle,
  ThemeButton,
  SearchBarStyled,
};
