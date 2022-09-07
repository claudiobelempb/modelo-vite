import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';
import { FaCheck, FaTimes } from 'react-icons/fa';

const CardPaymentDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <BoxDefault isBorder radius='base8' padding='base20'>
      <HeadingDefault as='h3' fontSize='base16'>
        {props.title}
      </HeadingDefault>
      <TextDefault fontSize='base14'>{props.subTitle}</TextDefault>
      <BoxDefault display='flex' gap='base10'>
        <HeadingDefault
          width='unset'
          fontSize='base24'
          as='h2'
          paddingY='base10'
          isTextDecoretionLineThrough
          fontWeight='bold'
        >
          {props.lowerPrice === 0 ? '' : `${props.lowerPrice}$`}
        </HeadingDefault>
        <HeadingDefault
          width='unset'
          fontSize='base24'
          as='h2'
          paddingY='base10'
          fontWeight='bold'
        >
          {props.priceCut === 1 ? '' : `${props.priceCut}$`}
        </HeadingDefault>
      </BoxDefault>
      <TextDefault fontSize='base14' marginBottom='base10'>
        {props.description}
      </TextDefault>
      <ButtonDefault
        bgcolor={props.bgcolor}
        textcolor={props.textcolor}
        paddingX='base20'
        paddingY='base10'
      >
        {props.btnTitle}
      </ButtonDefault>
      <BoxDefault
        as='ul'
        gap='base10'
        display='flex'
        direction='column'
        marginTop='base20'
      >
        {props.plansOptions?.map(item => {
          return (
            <BoxDefault key={item.title} as='li' gap='base10' display='flex'>
              <>
                {item.isCheck ? (
                  <BoxDefault width='unset' textcolor='red'>
                    <FaTimes />
                  </BoxDefault>
                ) : (
                  <BoxDefault width='unset' textcolor='green'>
                    <FaCheck />
                  </BoxDefault>
                )}
                {item.title}
              </>
            </BoxDefault>
          );
        })}
      </BoxDefault>
    </BoxDefault>
  );
};

CardPaymentDefault.defaultProps = {
  id: 1,
  title: 'Free Lite',
  btnTitle: 'Current Plan',
  subTitle: "It's totally free",
  priceCut: 0,
  lowerPrice: 0,
  description: 'One time payment',
  bgcolor: 'blue',
  textcolor: 'white',
  plansOptions: [
    { title: 'Up to 1 User', isCheck: false },
    { title: 'All UI Components', isCheck: false },
    { title: 'Litetime Access', isCheck: false },
    { title: 'Free Update', isCheck: true },
    { title: 'Community Support', isCheck: true },
    { title: 'Downloadable Files', isCheck: true }
  ]
};

export { CardPaymentDefault };
