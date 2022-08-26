import { ImgCoffeeAgua } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardDefault: React.FC = () => {
  return (
    <BoxDefault
      direction='column'
      bgcolor='card'
      isPosition='relative'
      aitems='center'
      radiusTopRight='base36'
      radiusBottomLeft='base36'
      width='base256'
      height='base310'
    >
      <BoxDefault
        marginTop='base20n'
        marginBottom='base12'
        isPosition='absolute'
        jcontent='center'
        aitems='center'
      >
        <img src={ImgCoffeeAgua} alt='' />
      </BoxDefault>
      <BoxDefault jcontent='center' marginBottom='base16'>
        <TextDefault
          paddingX='base8'
          paddingY='base5'
          bgcolor='yellowLight'
          bgtext='yellowDark'
          fontWeight='bold'
          fontSize='base10'
          // width='base81'
          height='base20'
          radius='base10'
          jcontent='center'
          aitems='center'
        >
          Tradicional
        </TextDefault>
      </BoxDefault>
      <BoxDefault jcontent='center' marginBottom='base8'>
        <HeadingDefault
          bgtext='title'
          as='h3'
          fontSize='base20'
          fontFamily='baloo'
          paddingX='base24'
        >
          Expresso Tradicional
        </HeadingDefault>
      </BoxDefault>
      <BoxDefault
        jcontent='center'
        aitems='center'
        marginBottom='base32'
        paddingX='base24'
      >
        <TextDefault bgtext='label' fontSize='base14' textAling='center'>
          O tradicional café feito com água quente e grãos moídos
        </TextDefault>
      </BoxDefault>

      <BoxDefault
        gap='base5'
        jcontent='center'
        aitems='center'
        paddingX='base24'
      >
        <BoxDefault display='grid' isGridRepeat={2} jcontent='start'>
          <TextDefault
            width='unset'
            aitems='center'
            fontFamily='baloo'
            fontSize='base14'
          >
            R$
          </TextDefault>
          <TextDefault
            width='unset'
            margin='base5'
            fontWeight='bold'
            fontFamily='baloo'
            fontSize='base24'
            jcontent='center'
            aitems='center'
            bgtext='text'
          >
            9,90
          </TextDefault>
        </BoxDefault>
        <BoxDefault display='grid' gap='base5' isGridRepeat={2}>
          <BoxDefault
            display='grid'
            radius='base8'
            isGridRepeat={3}
            bgcolor='button'
          >
            <ButtonDefault
              bgtext='purple'
              fontSize='base16'
              width='base36'
              height='base36'
              jcontent='center'
              aitems='center'
            >
              -
            </ButtonDefault>
            <TextDefault
              jcontent='center'
              aitems='center'
              bgtext='title'
              width='base36'
              height='base36'
            >
              1
            </TextDefault>
            <ButtonDefault
              padding='base5'
              bgtext='purple'
              fontSize='base16'
              width='base36'
              height='base36'
              jcontent='center'
              aitems='center'
            >
              +
            </ButtonDefault>
          </BoxDefault>
          <BoxDefault>
            <Link to='/checkout'>
              <ButtonDefault
                padding='base8'
                bgtext='white'
                bgcolor='purpleDark'
                radius='base10'
                height='base36'
                // width='base36'
                jcontent='center'
                aitems='center'
              >
                <FaShoppingCart />
              </ButtonDefault>
            </Link>
          </BoxDefault>
        </BoxDefault>
      </BoxDefault>
    </BoxDefault>
  );
};

export { CardDefault };
