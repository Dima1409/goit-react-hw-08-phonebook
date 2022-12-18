import styled from "styled-components";

const Spinner = styled.div`
   position: fixed;
   top: 60%;
   left: 50%;
   transform: translate(-50%, -50%);
   & > svg {
      fill: ${(props)=>props.theme.text};
   }
`

export {Spinner};