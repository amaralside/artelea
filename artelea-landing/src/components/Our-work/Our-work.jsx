import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/banner.jpg';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
  background-color: #fafdff;
  text-align: center;
  height: 80vh;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const OurWork = () => {
  return (
    <Container id="our-work">
      <Title>Trabajos Realizados</Title>
      <Carousel>
        <Carousel.Item>
          <img src={banner} alt="banner" text="First slide" />
          <Carousel.Caption>
            <h3>Soy un trabajo</h3>
            <p>lalalallalal.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner} alt="banner" text="Second slide" />
          <Carousel.Caption>
            <h3>Soy un trabajo</h3>
            <p>lalalallalal.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner} alt="banner" text="Third slide" />
          <Carousel.Caption>
            <h3>Soy un trabajo</h3>
            <p>lalalallalal.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default OurWork;
