import React from 'react';
import styled from 'styled-components';
import footer from '../../assets/footer.jpg';
import { useForm, ValidationError } from '@formspree/react';

const ContactContainer = styled.div`
  background-image: url(${footer});
  background-size: cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
`;

const ContactSection = styled.section`
  padding: 50px;
  background-color: #fafdff;
  text-align: center;
  width: 40%;
  border-radius: 30px;
  margin-right: 30px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Form = styled.form`
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #f0f6fa;
`;

const Button = styled.button`
  padding: 12px 50px;
  background-color: #005e8f;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #74beb6;
  }
`;

function ContactUs() {
  const [state, handleSubmit] = useForm('mbjnpqan');
  return (
    <ContactContainer id="contact">
      <ContactSection>
        <Title>Contactanos</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" id="name" name="name" placeholder="Nombre" />
          </FormGroup>
          <FormGroup>
            <Input type="email" id="email" name="email" placeholder="Mail" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormGroup>
          <FormGroup>
            <Input type="tel" id="phone" name="phone" placeholder="Celular" />
          </FormGroup>
          <Button type="submit" disabled={state.submitting}>
            Enviar
          </Button>
          {state.succeeded && <p>Enviado!</p>}
        </Form>
      </ContactSection>
    </ContactContainer>
  );
}

export default ContactUs;
