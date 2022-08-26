import { BoxDefault } from '@componets/BoxDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';

import {
  HomeImage,
  ImgCard,
  ImgClock,
  ImgCoffeer,
  ImgPagote
} from '@assets/image';
import { CardDefault } from '@componets/CardDefault';
import { HomeLayout } from '@componets/LayoutHome';

/*
 Nesse desafio, você vai desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
 */

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <ContainerDefault as='section'>
        <ContentDefault marginY='base81' isGridRepeat={2}>
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
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <img src={ImgCard} alt='' />
                </TextDefault>
                <TextDefault as='span'>Compra simples e segura</TextDefault>
              </BoxDefault>
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='text'
                  bgtext='white'
                  width='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <img src={ImgPagote} alt='' />
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
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <img src={ImgClock} alt='' />
                </TextDefault>
                <TextDefault as='span'>Entrega rápida e rastreada</TextDefault>
              </BoxDefault>
              <BoxDefault aitems='center' gap='base8'>
                <TextDefault
                  as='span'
                  bgcolor='purple'
                  bgtext='white'
                  width='base32'
                  radius='base32'
                  jcontent='center'
                  aitems='center'
                >
                  <img src={ImgCoffeer} alt='' />
                </TextDefault>
                <TextDefault as='span'>
                  O café chega fresquinho até você
                </TextDefault>
              </BoxDefault>
            </BoxDefault>
          </BoxDefault>
          <BoxDefault jcontent='end' aitems='center'>
            <img src={HomeImage} alt='' />
          </BoxDefault>
        </ContentDefault>
        <ContentDefault>
          <HeadingDefault fontSize='base32' fontFamily='baloo' as='h2'>
            Nossos cafés
          </HeadingDefault>
        </ContentDefault>
        <ContentDefault
          as='article'
          marginBottom='base54'
          paddingY='base54'
          isGridRepeat={3}
          jcontent='spaceBetween'
          flexWrap='wrap'
        >
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
          <CardDefault />
        </ContentDefault>
      </ContainerDefault>
    </HomeLayout>
  );
};

export { HomePage };
