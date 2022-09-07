import { ImgGridSweater } from '@assets/image';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { ImgDefault } from '@componets/ImgDefault';
import { TextDefault } from '@componets/TextDefault';

type CardPostDefaultProps = {
  title?: string;
  description?: string;
  date?: string;
  src?: string;
};

const CardPostDefault: React.FC<TypeDefault> = ({ ...props }) => {
  switch (props.model) {
    case 1:
      return (
        <BoxDefault
          as='article'
          display='flex'
          direction='column'
          isBoxShadow
          radius='base8'
        >
          <img
            className='post-img'
            loading='lazy'
            src={props.src}
            alt='presentation'
          />

          <BoxDefault paddingY='base10' paddingX='base10'>
            <TextDefault
              bgcolor='purple'
              paddingY='base10'
              paddingX='base20'
              radius='base5'
              marginTop='base20'
              textcolor='white'
              display='inline-flex'
              width='maxContent'
            >
              {props.date}
            </TextDefault>
            <HeadingDefault marginBottom='base32' as='h2' fontSize='base32'>
              {props.title}
            </HeadingDefault>
            <TextDefault>{props.description}</TextDefault>
          </BoxDefault>
        </BoxDefault>
      );
    case 2:
      return (
        <BoxDefault paddingY='base20'>
          <BoxDefault as='figure'>
            <ImgDefault
              isRadiusTop
              radius='base5'
              src={ImgGridSweater}
              alt=''
            />
          </BoxDefault>
          <BoxDefault display='flex' marginTop='base5'>
            <TextDefault textcolor='white' fontSize='base12'>
              Winter Clothings
            </TextDefault>
            <TextDefault
              fontWeight='bold'
              textcolor='white'
              fontSize='base12'
              jcontent='flexEnd'
            >
              50% Flat Discount
            </TextDefault>
          </BoxDefault>
          <HeadingDefault
            paddingY='base20'
            as='h2'
            fontSize='base16'
            textcolor='white'
          >
            Women's Winter Sweater
          </HeadingDefault>
          <BoxDefault
            textcolor='white'
            gap='base10'
            fontSize='base14'
            display='flex'
          >
            <TextDefault isTextDecoretionLineThrough width='unset' as='span'>
              $48
            </TextDefault>
            <TextDefault fontWeight='bold' as='span'>
              $24
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
      );

    default:
      return (
        <BoxDefault
          as='article'
          display='flex'
          direction='column'
          isBoxShadow
          radius='base8'
        >
          <img
            className='post-img'
            loading='lazy'
            src={props.src}
            alt='presentation'
          />

          <BoxDefault paddingY='base10' paddingX='base10'>
            <TextDefault
              bgcolor='purple'
              paddingY='base10'
              paddingX='base20'
              radius='base5'
              marginTop='base20'
              textcolor='white'
              display='inline-flex'
              width='maxContent'
            >
              {props.date}
            </TextDefault>
            <HeadingDefault marginBottom='base32' as='h2' fontSize='base32'>
              {props.title}
            </HeadingDefault>
            <TextDefault>{props.description}</TextDefault>
          </BoxDefault>
        </BoxDefault>
      );
  }
};

export { CardPostDefault };
