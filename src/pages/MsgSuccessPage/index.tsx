import { ImgClock, ImgDolares, ImgEntregar, ImgLocal } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { HomeLayout } from '@componets/LayoutHome';
import { TextDefault } from '@componets/TextDefault';

const MsgSuccessPage: React.FC = () => {
  return (
    <HomeLayout>
      <ContentDefault isGridRepeat={2} gap='base32' marginBottom='base32'>
        <BoxDefault>
          <HeadingDefault
            as='h2'
            fontFamily='baloo'
            fontWeight='bold'
            fontSize='base32'
            bgtext='yellowDark'
            marginBottom='base5'
          >
            Uhu! Pedido confirmado
          </HeadingDefault>
          <TextDefault fontSize='base20' bgtext='text' marginBottom='base36'>
            Agora é só aguardar que logo o café chegará até você
          </TextDefault>
          <BoxDefault
            radiusTopRight='base32'
            radiusBottomLeft='base32'
            border='yellowDark'
            padding='base40'
          >
            <BoxDefault gap='base12' marginBottom='base32' display='flex'>
              <img src={ImgLocal} />
              <BoxDefault bgtext='text'>
                <BoxDefault>
                  <TextDefault width='base100r'>Entrega em</TextDefault>
                  <TextDefault as='span' fontWeight='bold'>
                    Rua João Daniel Martinelli, 102
                  </TextDefault>
                </BoxDefault>
                <TextDefault as='span'>Farrapos - Porto Alegre, RS</TextDefault>
              </BoxDefault>
            </BoxDefault>
            <BoxDefault display='flex' gap='base12' marginBottom='base32'>
              <img src={ImgClock} />
              <BoxDefault bgtext='text'>
                <TextDefault as='span'>Previsão de entrega</TextDefault>
                <TextDefault as='span' fontWeight='bold'>
                  20 min - 30 min
                </TextDefault>
              </BoxDefault>
            </BoxDefault>
            <BoxDefault display='flex' gap='base12' marginBottom='base32'>
              <img src={ImgDolares} />
              <BoxDefault bgtext='text'>
                <TextDefault as='span'>Pagamento na entrega</TextDefault>
                <TextDefault as='span' fontWeight='bold'>
                  Cartão de Crédito
                </TextDefault>
              </BoxDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
        <BoxDefault jcontent='center' aitems='center'>
          <img src={ImgEntregar} />
        </BoxDefault>
      </ContentDefault>
    </HomeLayout>
  );
};

export { MsgSuccessPage };
