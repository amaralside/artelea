import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fafdff;
  border-bottom: 0.75px solid #ccc;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: #333;
`;

const ContactLink = styled.a`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #005e8f;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #74beb6;
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Logo>
        <img src={logo} alt="logo-artelea" style={{ width: 100 }}></img>
      </Logo>
      <Links>
        <Link href="#who-we-are">QUIENES SOMOS</Link>
        <Link href="#services">SERVICIOS</Link>
        <Link href="#products">PRODUCTOS</Link>
        <Link href="#our-work">TRABAJOS</Link>
      </Links>
      <ContactLink href="#contact">CONTACTANOS</ContactLink>
    </MenuContainer>
  );
};

export default Menu;
