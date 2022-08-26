import { ImgCoffeeAgua, ImgDelete } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';

const CardCheckout: React.FC = () => {
  return (
    <>
      <BoxDefault gap='base12'>
        <BoxDefault
          isGridRepeat={2}
          jcontent='center'
          aitems='center'
          gap='base20'
        >
          <BoxDefault width='base64' height='base64'>
            <img src={ImgCoffeeAgua} alt='' />
          </BoxDefault>
          <BoxDefault isGridRepeat={2} gap='base8'>
            <HeadingDefault as='h3' fontSize='base16' bgtext='subTitle'>
              Expresso Tradicional
            </HeadingDefault>

            <TextDefault
              as='span'
              fontWeight='700'
              fontSize='base16'
              bgtext='subTitle'
              jcontent='flexEnd'
            >
              R$ 9,90
            </TextDefault>
            <BoxDefault gap='base12'>
              <BoxDefault height='base32' jcontent='start' gap='base8'>
                <ButtonDefault
                  padding='base16'
                  bgtext='purple'
                  fontSize='base16'
                  jcontent='center'
                  aitems='center'
                >
                  -
                </ButtonDefault>
                <TextDefault jcontent='center' aitems='center' bgtext='title'>
                  1
                </TextDefault>
                <ButtonDefault
                  padding='base16'
                  bgtext='purple'
                  fontSize='base16'
                  jcontent='center'
                  aitems='center'
                >
                  +
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
                  <img src={ImgDelete} alt='' />
                  Remover
                </ButtonDefault>
              </BoxDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
      </BoxDefault>

      <TextDefault isBorder marginY='base24' />
    </>
  );
};

export { CardCheckout };
