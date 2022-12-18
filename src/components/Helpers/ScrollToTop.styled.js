import styled from 'styled-components';

const ToTop = styled.div`
position: relative;
`
const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid ${(props)=>props.theme.text};
  opacity: 0.5;
  border-radius: 50%;
  z-index: 20;
  width: 25px;
  height: 25px;
  transition: 0.3s; 
  &:hover {
  cursor: pointer;
  transform: scale(1.1);
  opacity: 1;
  }
`
export {Icon, ToTop};