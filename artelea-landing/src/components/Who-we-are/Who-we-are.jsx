import React from 'react';
import styled from 'styled-components';
import who from '../../assets/who.svg';

const WhoWeAreSection = styled.section`
  padding: 100px;
  background-color: #f0f6fa;
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const MissionVisionContainer = styled.div`
  width: 70%;
`;

const MissionVisionCard = styled.div`
  padding: 30px 100px;
  border-radius: 5px;
`;

const MissionImage = styled.img`
  width: 40%;
  border-radius: 5px;
`;

const WhoWeAre = () => {
  return (
    <WhoWeAreSection id="who-we-are">
      <MissionImage src={who} alt="who-we-are" />
      <MissionVisionContainer>
        <Title>Quienes Somos</Title>
        <MissionVisionCard>
          <p>
            Nos dedicamos a crear obras de herrería que van más allá de la
            funcionalidad, buscando inspirar y transformar espacios con
            elegancia y seguridad. Nuestro compromiso es con la excelencia en el
            diseño y la fabricación de rejas a medida, ofreciendo a nuestros
            clientes la tranquilidad y el estilo que merecen en sus hogares. Con
            pasión por nuestro trabajo y atención al detalle, cada pieza que
            creamos refleja nuestro compromiso con la calidad y la creatividad
            en la herrería.
          </p>
        </MissionVisionCard>
      </MissionVisionContainer>
    </WhoWeAreSection>
  );
};

export default WhoWeAre;
