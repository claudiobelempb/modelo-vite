import { ImgPost22 } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';

const CardProductDefault: React.FC = () => {
  return (
    <BoxDefault
      isBoxShadow
      paddingX='base10'
      paddingY='base20'
      marginTop='base20'
      radius='base10'
    >
      <BoxDefault as='figure'>
        <img src={ImgPost22} />
      </BoxDefault>
      <BoxDefault display='flex'>
        <TextDefault
          width='unset'
          as='span'
          padding='base5'
          bgcolor='greenLight'
          textcolor='white'
          radius='base8'
          marginBottom='base20'
        >
          $1200
        </TextDefault>
      </BoxDefault>
      <HeadingDefault
        as='h2'
        fontWeight='bold'
        fontSize='base24'
        marginBottom='base20'
      >
        Mountain Bike
      </HeadingDefault>
      <TextDefault marginBottom='base20'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        consectetur voluptatem voluptate explicabo accusamus magni dolorem.
      </TextDefault>
      <BoxDefault display='flex' jcontent='flexEnd'>
        <LinkDefault
          width='unset'
          bgcolor='greenLight'
          textcolor='white'
          paddingY='base8'
          paddingX='base20'
          radius='base8'
        >
          Add to Card
        </LinkDefault>
      </BoxDefault>
    </BoxDefault>
  );
};

export { CardProductDefault };
