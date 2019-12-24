import styled from "styled-components";
import defaultImg from "../images/room1.jpg";

const StyledHero = styled.header`
  align-items: center;
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  justify-content: center;
  min-height: 60vh;
`;

export default StyledHero;
