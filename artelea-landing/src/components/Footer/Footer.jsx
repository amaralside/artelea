import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-bottom: 10px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <span>Seguinos en nuestras redes sociales!</span>
      <SocialLinks>
        <SocialLink href="https://www.instagram.com">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.instagram.com">
          <FaFacebook />
        </SocialLink>
      </SocialLinks>
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
      <p>© 2024 Hierros Artelea. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
