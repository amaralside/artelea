import React from 'react';
import styled from 'styled-components';
import chispero from '../../assets/chispero.jpg';
import parrilla from '../../assets/parrilla.jpg';
import rejas from '../../assets/rejas.jpg';
import mueble from '../../assets/mueble.jpg';

const ProductsSection = styled.section`
  padding: 50px;
  background-color: #f0f6fa;
  text-align: center;
  height: 80vh;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  margin: 20px;
`;

const ProductImage = styled.img`
  width: 30%;
  border-radius: 30px;
`;

const ProductTitle = styled.h3`
  margin-top: 10px;
`;

const ProductDescription = styled.p`
  margin: 5px;
  padding: 5px;
`;

const Products = () => {
  return (
    <ProductsSection id="products">
      <Title>Nuestros Productos</Title>
      <ProductsContainer>
        <ProductCard>
          <div>
            <ProductTitle>Chisperos</ProductTitle>
            <ProductDescription>
              Los chisperos de ARTELEA son más que simples accesorios para tu
              chimenea; son piezas de arte funcional que añaden un toque de
              elegancia y calidez a tu hogar. Fabricados con materiales de alta
              calidad, nuestros chisperos están diseñados para durar y ofrecerte
              seguridad y estilo en cada uso.
            </ProductDescription>
          </div>
          <ProductImage src={chispero} alt="Product 1" />
        </ProductCard>
        <ProductCard>
          <div>
            <ProductTitle>Parrillas</ProductTitle>
            <ProductDescription>
              Nuestras parrillas están diseñadas para brindarte la mejor
              experiencia de parrillado, con un diseño robusto que garantiza un
              cocinado uniforme y un sabor excepcional en cada comida.
              Fabricadas con hierro y madera de alta calidad, nuestras parrillas
              son duraderas y resistentes a las condiciones exteriores,
              asegurando años de uso confiable.
            </ProductDescription>
          </div>
          <ProductImage src={parrilla} alt="Product 2" />
        </ProductCard>
      </ProductsContainer>
      <ProductsContainer>
        <ProductCard>
          <div>
            <ProductTitle>Rejas</ProductTitle>
            <ProductDescription>
              Nuestras rejas a medida son diseñadas y fabricadas para adaptarse
              perfectamente a tu espacio, brindándote seguridad sin sacrificar
              la estética. Fabricadas con hierro de alta calidad, nuestras rejas
              son resistentes y duraderas, ofreciéndote tranquilidad y estilo
              duradero.
            </ProductDescription>
          </div>
          <ProductImage src={rejas} alt="Product 3" />
        </ProductCard>
        <ProductCard>
          <div>
            <ProductTitle>Muebles</ProductTitle>
            <ProductDescription>
              Cada pieza es única y está diseñada para combinar funcionalidad y
              estilo. Desde mesas y sillas hasta bancos y estanterías, nuestros
              muebles están fabricados con materiales de alta calidad y con un
              diseño cuidadoso, para brindarte muebles que no solo son
              prácticos, sino también hermosos y duraderos.
            </ProductDescription>
          </div>
          <ProductImage src={mueble} alt="Product 4" />
        </ProductCard>
      </ProductsContainer>
    </ProductsSection>
  );
};

export default Products;
