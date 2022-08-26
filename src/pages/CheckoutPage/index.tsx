import {
  ImgCredito,
  ImgDebito,
  ImgDinheiro,
  ImgDolar,
  ImgLocation
} from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { CardCheckout } from '@componets/CardCheckout';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { InputDefault } from '@componets/InputDefault';
import { HomeLayout } from '@componets/LayoutHome';
import { TextDefault } from '@componets/TextDefault';

const CheckoutPage: React.FC = () => {
  return (
    <HomeLayout>
      <ContentDefault isGridRepeat={2}>
        <BoxDefault display='unset'>
          <HeadingDefault
            as='h4'
            fontSize='base18'
            fontFamily='baloo'
            marginBottom='base14'
            display='unset'
          >
            Complete seu pedido
          </HeadingDefault>

          <BoxDefault bgcolor='card' radius='base5'>
            <BoxDefault
              jcontent='flexStart'
              aitems='flexStart'
              padding='base40'
            >
              <BoxDefault width='base32' aitems='flexStart' height='base100'>
                <img src={ImgLocation} alt='' />
              </BoxDefault>
              <BoxDefault>
                <TextDefault fontSize='base16'>Endereço de Entrega</TextDefault>
                <TextDefault fontSize='base14'>
                  Informe o endereço onde deseja receber seu pedido
                </TextDefault>
              </BoxDefault>
            </BoxDefault>

            <BoxDefault marginTop='base32' padding='base40'>
              <form>
                <BoxDefault marginBottom='base16'>
                  <InputDefault
                    placeholder='CEP'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                  />
                </BoxDefault>
                <BoxDefault marginBottom='base16'>
                  <InputDefault
                    placeholder='Rua'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                    width='base100p'
                  />
                </BoxDefault>
                <BoxDefault isGridRepeat={2} marginBottom='base16' gap='base12'>
                  <InputDefault
                    placeholder='Número'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                  />
                  <BoxDefault isGridRepeat={2}>
                    <InputDefault
                      placeholder='Complemento'
                      padding='base12'
                      bgcolor='input'
                      bgtext='label'
                      width='unset'
                    />
                    <TextDefault
                      aitems='center'
                      bgcolor='input'
                      bgtext='label'
                      paddingX='base8'
                      width='unset'
                    >
                      Opcional
                    </TextDefault>
                  </BoxDefault>
                </BoxDefault>
                <BoxDefault marginBottom='base16' gap='base12' isGridRepeat={3}>
                  <InputDefault
                    placeholder='Bairro'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                  />
                  <InputDefault
                    placeholder='Cidade'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                  />
                  <InputDefault
                    placeholder='UF'
                    padding='base12'
                    bgcolor='input'
                    bgtext='label'
                  />
                </BoxDefault>
              </form>
            </BoxDefault>
            <BoxDefault
              padding='base36'
              marginBottom='base12'
              bgcolor='card'
              radius='base5'
            >
              <BoxDefault jcontent='flexStart' aitems='flexStart'>
                <BoxDefault width='base32'>
                  <img src={ImgDolar} alt='' />
                </BoxDefault>

                <BoxDefault marginBottom='base32'>
                  <TextDefault fontSize='base16'>Pagamento</TextDefault>
                  <TextDefault fontSize='base14'>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </TextDefault>
                </BoxDefault>
              </BoxDefault>
              <BoxDefault gap='base12' isGridRepeat={3} jcontent='spaceBetween'>
                <ButtonDefault
                  bgcolor='button'
                  bgtext='text'
                  padding='base16'
                  fontSize='base12'
                  aitems='center'
                  jcontent='center'
                  gap='base12'
                  isUppercase
                >
                  <img src={ImgCredito} alt='' />
                  Cartão de crédito
                </ButtonDefault>
                <ButtonDefault
                  bgcolor='button'
                  bgtext='text'
                  padding='base16'
                  fontSize='base12'
                  aitems='center'
                  jcontent='center'
                  gap='base12'
                  isUppercase
                >
                  <img src={ImgDebito} alt='' />
                  cartão de débito
                </ButtonDefault>
                <ButtonDefault
                  bgcolor='button'
                  bgtext='text'
                  padding='base16'
                  fontSize='base12'
                  aitems='center'
                  jcontent='center'
                  gap='base12'
                  isUppercase
                >
                  <img src={ImgDinheiro} alt='' />
                  dinheiro
                </ButtonDefault>
              </BoxDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
        <BoxDefault>
          <BoxDefault>
            <HeadingDefault
              as='h4'
              fontSize='base18'
              fontFamily='baloo'
              marginBottom='base14'
            >
              Cafés selecionados
            </HeadingDefault>
          </BoxDefault>

          <BoxDefault
            marginBottom='base40'
            bgcolor='card'
            radiusTopRight='base32'
            radiusBottomLeft='base32'
            padding='base40'
          >
            <CardCheckout />
            <CardCheckout />
            <CardCheckout />
            <CardCheckout />

            <BoxDefault>
              <BoxDefault
                jcontent='spaceAround'
                bgtext='text'
                marginBottom='base14'
              >
                <TextDefault>Total de itens</TextDefault>
                <TextDefault jcontent='flexEnd'>R$ 29,70</TextDefault>
              </BoxDefault>
              <BoxDefault
                jcontent='spaceAround'
                bgtext='text'
                marginBottom='base14'
              >
                <TextDefault>Entrega</TextDefault>
                <TextDefault jcontent='flexEnd'>R$ 3,50</TextDefault>
              </BoxDefault>
              <BoxDefault
                jcontent='spaceAround'
                bgtext='text'
                marginBottom='base24'
              >
                <TextDefault fontSize='base20' fontWeight='700'>
                  Total
                </TextDefault>
                <TextDefault
                  jcontent='flexEnd'
                  fontSize='base20'
                  fontWeight='700'
                >
                  R$ 33,20
                </TextDefault>
              </BoxDefault>
              <ButtonDefault
                width='base100p'
                bgcolor='yellow'
                bgtext='white'
                paddingY='base14'
                jcontent='center'
              >
                <TextDefault jcontent='center' fontWeight='700'>
                  Confirmar Pedido
                </TextDefault>
              </ButtonDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>
    </HomeLayout>
  );
};

export { CheckoutPage };
