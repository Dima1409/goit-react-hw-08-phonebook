import styled from "styled-components";

const Form = styled.form`
background-color: ${(props)=>props.theme.main};
display: flex;
flex-direction: column;
padding: 0 10px;
margin: 0 auto;
border-radius: 8px;
`;
const LabelForm = styled.label`
font-size: 22px;
text-align: start;
margin-bottom: 5px;
`;

const LabelInput = styled.input`
max-width: 80%;
padding: 6px;
font-size: 14px;
outline: none;
border: none;
border-radius: 4px;
color: ${(props)=>props.theme.text};
background-color: ${(props)=>props.theme.input};
@media screen and (min-width: 768px) {
max-width: 60%;
font-size: 16px;
}
@media screen and (min-width: 1280px) {
max-width: 50%;
}
`;

const ButtonSubmit = styled.button`
margin: 10px 0;
padding: 6px;
color: #13132e;
background-color: #ccca41;
max-width: 90px;
font-size: 14px;
border: none;
border-radius: 4px;
transition: all 0.3s;
@media screen and (min-width: 768px) {
max-width: 150px;
font-size: 22px;
}
&:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: red;;
}
&:disabled {
    background-color: grey;
}
`;

export {Form, LabelForm, LabelInput, ButtonSubmit};