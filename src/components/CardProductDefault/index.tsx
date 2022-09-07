import { ImgGridSweater, ImgPost22 } from '@assets/image';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { ImgDefault } from '@componets/ImgDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';

const CardProductDefault: React.FC<TypeDefault> = ({ ...props }) => {
  switch (props.model) {
    case 1:
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
    case 2:
      return (
        <BoxDefault paddingY='base20'>
          <BoxDefault as='figure'>
            <ImgDefault
              isRadiusTop
              radius='base5'
              src={props.src}
              alt={props.title}
            />
          </BoxDefault>
          <BoxDefault display='flex' marginTop='base5'>
            <TextDefault as='h6' textcolor='white' fontSize='base12'>
              {props.category}
            </TextDefault>
            <TextDefault
              fontWeight='bold'
              textcolor='white'
              fontSize='base12'
              jcontent='flexEnd'
            >
              {props.discount && <>{props.discount}% Flat Discount</>}
            </TextDefault>
          </BoxDefault>
          <HeadingDefault
            paddingY='base20'
            as='h2'
            fontSize='base16'
            textcolor='white'
          >
            {props.title}
          </HeadingDefault>
          <BoxDefault
            textcolor='white'
            gap='base10'
            fontSize='base14'
            display='flex'
          >
            <TextDefault isTextDecoretionLineThrough width='unset' as='span'>
              ${props.priceCut}
            </TextDefault>
            <TextDefault fontWeight='bold' as='span'>
              ${props.lowerPrice}
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
      );

    case 3:
      return (
        <BoxDefault
          paddingY='base20'
          gridTemplateColumns={3}
          gridTemplateRows={10}
        >
          <BoxDefault
            as='figure'
            isGridColumn
            gridColumnStart={1}
            gridColumnEnd={-1}
            isGridRow
            gridRowStart={1}
            gridRowEnd={8}
          >
            <ImgDefault
              isRadiusTop
              radius='base5'
              src={props.src}
              alt={props.title}
            />
          </BoxDefault>

          <HeadingDefault
            isGridRow
            gridRowStart={8}
            gridRowEnd={9}
            as='h6'
            textcolor='white'
            fontSize='base12'
          >
            {props.category}
          </HeadingDefault>

          <HeadingDefault
            isGridColumn
            gridColumnStart={1}
            gridColumnEnd={-1}
            isGridRow
            gridRowStart={9}
            gridRowEnd={10}
            as='h2'
            fontSize='base16'
            textcolor='white'
          >
            {props.title}
          </HeadingDefault>

          <TextDefault
            isGridColumn
            gridColumnStart={1}
            gridColumnEnd={3}
            isGridRow
            gridRowStart={10}
            gridRowEnd={11}
          >
            <TextDefault isTextDecoretionLineThrough width='unset' as='span'>
              ${props.priceCut}
            </TextDefault>
            <TextDefault as='span' textcolor='white' marginX='base10'>
              ${props.lowerPrice}
            </TextDefault>
          </TextDefault>
          <TextDefault
            isGridColumn
            gridColumnStart={3}
            gridColumnEnd={4}
            isGridRow
            gridRowStart={8}
            gridRowEnd={9}
            textcolor='white'
            fontSize='base12'
          >
            {props.discount && <>{props.discount}% Flat Discount</>}
          </TextDefault>
        </BoxDefault>
      );

    default:
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
  }
};

CardProductDefault.defaultProps = {
  title: "Women's Winter Sweater",
  subTitle: 'CardProductDefault',
  description: 'Winter Clothings',
  category: 'T-Shirt',
  btnTitle: 'Title Default',
  priceCut: 20,
  lowerPrice: 30,
  src: ImgGridSweater
};

export { CardProductDefault };
