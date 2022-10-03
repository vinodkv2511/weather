import { FunctionComponent } from "react";
import { StyledHeader, StyledLocationContainer, StyledLogo, StyledLogoContainer } from "./Header.styles";
import logo from '../../assets/WeatherIcons/SVG/01d.svg';


const Header: FunctionComponent = () => {

  return <StyledHeader>
    <StyledLogoContainer>
      <StyledLogo src={logo} alt='logo' />
      Weather
    </StyledLogoContainer>
    <StyledLocationContainer>
      {/* TODO Add icon */}
      {/* TODO Localise */}
      <p>Selected location</p>
      {/* Search input */}
      <input />
    </StyledLocationContainer>
  </StyledHeader>
}

export default Header;
