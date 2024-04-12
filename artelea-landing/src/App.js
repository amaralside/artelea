import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import header from './assets/header.jpg';
import WhoWeAre from './components/Who-we-are/Who-we-are';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import OurWork from './components/Our-work/Our-work';
import ContactUs from './components/Contact-us/Contact-us';
import Footer from './components/Footer/Footer';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

const Subtitle = styled.span`
  font-size: 32px;
`;

const ContactLink = styled.a`
  padding: 12px 0px;
  border-radius: 30px;
  background-color: #005e8f;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 200px;
  text-align: center;
  margin-top: 15px;

  &:hover {
    background-color: #74beb6;
  }
`;

const Image = styled.img`
  clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Container>
        <Content>
          <Title>Hierros Artelea</Title>
          <Subtitle>
            Lo que construyes en hierro es tu herencia familiar
          </Subtitle>
          <ContactLink href="#contact">CONTACTANOS</ContactLink>
        </Content>
        <div>
          <Image src={header} alt="header"></Image>
        </div>
      </Container>
      <WhoWeAre />
      <Services />
      <Products />
      <OurWork />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
