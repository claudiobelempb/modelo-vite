import { BoxDefault } from '@componets/BoxDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { NavBarDefault } from '@componets/NavBarDefault';
import { TextDefault } from '@componets/TextDefault';

import {
  FaBoxOpen,
  FaCoffee,
  FaRegClock,
  FaShoppingCart
} from 'react-icons/fa';

import * as Styles from './styles';

import { CoffeeAgua, HomeImage } from '@assets/image/icons';
import { ButtonDefault } from '@componets/ButtonDefault';

const HomePage: React.FC = () => {
  return (
    <Styles.HomeDefaultContainer>
      <ContainerDefault as='header'>
        <NavBarDefault />
      </ContainerDefault>
      <ContainerDefault as='section'>
        <ContentDefault marginY='base81'>
          <BoxDefault>
            <HeadingDefault fontFamily='baloo' fontWeight='800' bgtext='title'>
              Encontre o café perfeito para qualquer hora do dia
            </HeadingDefault>
            <TextDefault fontSize='base20' bgtext='subTitle'>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </TextDefault>
            <BoxDefault
              direction='row'
              gap='base8'
              bgtext='text'
              aitems='center'
              marginY='base20'
            >
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='yellowDark'
                  bgtext='white'
                  width='base32'
                  height='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <FaShoppingCart />
                </TextDefault>
                <TextDefault as='span'>Compra simples e segura</TextDefault>
              </BoxDefault>
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='text'
                  bgtext='white'
                  width='base32'
                  height='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <FaBoxOpen />
                </TextDefault>
                <TextDefault as='span'>
                  Embalagem mantém o café intacto
                </TextDefault>
              </BoxDefault>
            </BoxDefault>
            <BoxDefault
              direction='row'
              gap='base8'
              bgtext='text'
              aitems='center'
            >
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='yellow'
                  bgtext='white'
                  width='base32'
                  height='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <FaRegClock />
                </TextDefault>
                <TextDefault as='span'>Entrega rápida e rastreada</TextDefault>
              </BoxDefault>
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='purple'
                  bgtext='white'
                  width='base32'
                  height='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <FaCoffee />
                </TextDefault>
                <TextDefault as='span'>
                  O café chega fresquinho até você
                </TextDefault>
              </BoxDefault>
            </BoxDefault>
          </BoxDefault>
          <BoxDefault jcontent='center' aitems='center'>
            <img src={HomeImage} alt='' />
          </BoxDefault>
        </ContentDefault>
      </ContainerDefault>

      <ContentDefault
        as='article'
        direction='column'
        bgcolor='card'
        isPosition='relative'
        aitems='center'
      >
        <BoxDefault isPosition='absolute' jcontent='center' aitems='center'>
          <img src={CoffeeAgua} alt='' />
        </BoxDefault>
        <TextDefault
          paddingX='base8'
          paddingY='base5'
          bgcolor='yellowLight'
          bgtext='yellowDark'
          jcontent='center'
          fontWeight='bold'
          fontSize='base10'
          width='base81'
          height='base20'
        >
          Tradicional
        </TextDefault>
        <HeadingDefault
          bgtext='title'
          as='h2'
          fontSize='base24'
          fontFamily='baloo'
        >
          Expresso Tradicional
        </HeadingDefault>
        <TextDefault bgtext='label' fontSize='base14'>
          O tradicional café feito com água quente e grãos moídos
        </TextDefault>

        <BoxDefault direction='row'>
          <BoxDefault
            direction='row'
            bgtext='text'
            aitems='center'
            jcontent='center'
          >
            <TextDefault fontFamily='baloo' fontSize='base14'>
              R$
            </TextDefault>
            <TextDefault
              margin='base5'
              fontWeight='bold'
              fontFamily='baloo'
              fontSize='base24'
            >
              9,90
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            direction='row'
            bgcolor='button'
            aitems='center'
            jcontent='center'
            width='base81'
            height='base36'
          >
            <ButtonDefault>-</ButtonDefault>
            <TextDefault>1</TextDefault>
            <ButtonDefault>+</ButtonDefault>
          </BoxDefault>
          <BoxDefault>
            <FaShoppingCart />
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>
    </Styles.HomeDefaultContainer>
  );
};

export { HomePage };
