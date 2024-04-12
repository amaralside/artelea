import React from 'react';
import styled from 'styled-components';
import service from '../../assets/service.svg';

const ServicesSection = styled.section`
  padding: 50px;
  background-color: #fafdff;
  text-align: center;
  height: 80vh;
  display: flex;
  align-items: center;
`;

const ServicesContainer = styled.div`
  display: flex
  flex-direction: row;
`;

const ServiceCard = styled.div`
  background-color: #fafdff;
  padding: 20px;
  border-radius: 5px;
`;

const ServiceImage = styled.img`
  width: 50%;
  border-radius: 5px;
`;

const ServiceTitle = styled.h3`
  margin-top: 10px;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  margin-top: 5px;
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <ServiceCard>
          <ServiceTitle>Trabajos a Medida</ServiceTitle>
          <ServiceDescription>
            En ARTELEA, nos especializamos en crear trabajos a medida de
            herrería que se adapten a tus necesidades y gustos específicos. Ya
            sea que necesites una reja única para tu hogar o un mueble de hierro
            y madera personalizado para tu jardín, nuestro equipo de expertos en
            herrería trabajará contigo para diseñar y fabricar la pieza perfecta
            que complemente tu espacio y refleje tu estilo personal. Confía en
            nosotros para transformar tus ideas en realidad con nuestra
            artesanía excepcional y atención al detalle.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Reparaciones</ServiceTitle>
          <ServiceDescription>
            ¿Tienes una reja o puerta en mal estado que necesita reparación? En
            ARTELEA, también ofrecemos servicios de reparación y restauración de
            rejas y puertas de herrería. Nuestro equipo de profesionales
            capacitados puede reparar cualquier daño, desde problemas de
            oxidación hasta deformidades estructurales, devolviéndoles su
            funcionalidad y apariencia original. Confía en nosotros para
            revitalizar tus rejas y puertas, prolongando su vida útil y
            manteniendo la seguridad y el estilo de tu hogar.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
      <ServiceImage src={service} alt="service" />
    </ServicesSection>
  );
};

export default Services;
