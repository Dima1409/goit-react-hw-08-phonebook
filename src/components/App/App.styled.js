import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
    background: ${(props)=>props.theme.body};
    color: ${(props)=>props.theme.text};
}
`
const Container = styled.div`
width: 310px;
margin: 0 auto;
padding: 20px 4px;
position: relative;
@media screen and (min-width: 768px) {
width: 768px;
}
@media screen and (min-width: 1280px) {
width: 1280px;
}
`
const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.body};
`;

const ContainerList = styled.div`
text-align: center;
margin: 0 auto;
background-color: ${(props)=>props.theme.body};
`;
const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const FormTitle = styled.h1`
font-size: 28px;
`;
const ListTitle = styled.h2`
margin-bottom: 10px;
text-align: start;
font-size: 28px;
`;
const ListIsEmpty = styled.p`
font-size: 18px;
color: ${(props)=>props.theme.text};
`

export {Container, ContainerList, ListTitle, FormTitle, ListIsEmpty, Global, Heading, StyledApp};