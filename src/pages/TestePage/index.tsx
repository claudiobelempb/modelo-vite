import {
  ImgGridJacket,
  ImgGridShirt,
  ImgGridSunglasses,
  ImgGridSweater
} from '@assets/image';
import { PLansTypeDefault } from '@assets/styles/themes/ThemeType';
import { CardProductDefault } from '@componets/CardProductDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { useState } from 'react';

const plans: PLansTypeDefault[] = [
  {
    id: 1,
    title: 'Free Lite',
    btnTitle: 'Current Plan',
    subTitle: "It's totally free",
    priceCut: 0,
    lowerPrice: 0,
    description: 'One time payment',
    bgcolor: 'blue',
    textcolor: 'white',
    options: [
      { title: 'Up to 1 User', isCheck: false },
      { title: 'All UI Components', isCheck: false },
      { title: 'Litetime Access', isCheck: false },
      { title: 'Free Update', isCheck: true },
      { title: 'Community Support', isCheck: true },
      { title: 'Downloadable Files', isCheck: true }
    ]
  },
  {
    id: 2,
    title: 'Starter',
    btnTitle: 'Current Plan',
    subTitle: 'Single Site',
    priceCut: 39,
    lowerPrice: 29,
    description: 'One time payment',
    bgcolor: 'grayDark',
    textcolor: 'white',
    options: [
      { title: 'Up to 1 User', isCheck: false },
      { title: 'All UI Components', isCheck: false },
      { title: 'Litetime Access', isCheck: false },
      { title: 'Free Update', isCheck: false },
      { title: 'Community Support', isCheck: false },
      { title: 'Downloadable Files', isCheck: true }
    ]
  },
  {
    id: 3,
    title: 'Business',
    btnTitle: 'Unlimited Site',
    subTitle: "It's totally free",
    priceCut: 99,
    lowerPrice: 59,
    description: 'One time payment',
    bgcolor: 'grayDark',
    textcolor: 'white',
    options: [
      { title: 'Up to 1 User', isCheck: false },
      { title: 'All UI Components', isCheck: false },
      { title: 'Litetime Access', isCheck: false },
      { title: 'Free Update', isCheck: false },
      { title: 'Community Support', isCheck: false },
      { title: 'Downloadable Files', isCheck: false }
    ]
  },
  {
    id: 4,
    title: 'Extended',
    btnTitle: 'For paying users',
    subTitle: "It's totally free",
    priceCut: 259,
    lowerPrice: 189,
    description: 'One time payment',
    bgcolor: 'grayDark',
    textcolor: 'white',
    options: [
      { title: 'Up to 1 User', isCheck: false },
      { title: 'All UI Components', isCheck: false },
      { title: 'Litetime Access', isCheck: false },
      { title: 'Free Update', isCheck: false },
      { title: 'Community Support', isCheck: false },
      { title: 'Downloadable Files', isCheck: false }
    ]
  },
  {
    id: 5,
    title: 'Free Lite',
    btnTitle: 'Current Plan',
    subTitle: "It's totally free",
    priceCut: 259,
    lowerPrice: 420,
    description: 'One time payment',
    bgcolor: 'grayDark',
    textcolor: 'white',
    options: [
      { title: 'Up to 1 User', isCheck: false },
      { title: 'All UI Components', isCheck: false },
      { title: 'Litetime Access', isCheck: false },
      { title: 'Free Update', isCheck: false },
      { title: 'Community Support', isCheck: false },
      { title: 'Downloadable Files', isCheck: false }
    ]
  }
];

const TestePage: React.FC = () => {
  const [planos, setPLanos] = useState<PLansTypeDefault[]>(plans);

  return (
    <>
      <ContainerDefault as='main' bgcolor='blueDark'>
        <ContentDefault isGridRepeat={4} bgcolor='blueDark'>
          <CardProductDefault
            model={2}
            src={ImgGridSweater}
            title="Women's Winter Sweater"
            category='Winter Clothings
            '
            lowerPrice={24}
            priceCut={49}
            discount={50}
          />
          <CardProductDefault
            model={2}
            src={ImgGridJacket}
            title='Ladies Jacket
            '
            category='Ladies Jacket

            '
          />
          <CardProductDefault
            model={2}
            src={ImgGridSunglasses}
            title='Black Stylish Sunglasses
            '
            category='Sunglasses
            '
            lowerPrice={59}
          />
          <CardProductDefault
            model={2}
            src={ImgGridShirt}
            title='Stylish Black T-Shirt
            '
            category='T-Shirt'
            lowerPrice={120}
            priceCut={60}
            discount={70}
          />
        </ContentDefault>

        {/* <ContentDefault gridTemplateColumns={5} gridTemplateRows={4}>
          <BoxDefault
            isGridColumn
            gridColumnStart={1}
            gridColumnEnd={2}
            isGridRow
            gridRowStart={1}
            gridRowEnd={2}
            gridRowEndSpan='span'
          >
            <img src={ImgGrid131} alt='' />
          </BoxDefault>
          <BoxDefault>
            <img src={ImgGrid132} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={4}
            gridColumnEnd={-1}
            isGridRow
            gridRowStart={2}
            gridRowEnd={3}
          >
            <img src={ImgGrid133} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={1}
            gridColumnEnd={2}
            isGridRow
            gridRowStart={3}
            gridRowEnd={5}
          >
            <img src={ImgGrid134} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={2}
            gridColumnEnd={2}
            gridColumnEndSpan='span'
            isGridRow
            gridRowStart={2}
            gridRowEnd={3}
          >
            <img src={ImgGrid135} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={3}
            gridColumnEnd={5}
            isGridRow
            gridRowStart={1}
            gridRowEnd={2}
          >
            <img src={ImgGrid136} alt='' />
          </BoxDefault>
          <BoxDefault>
            <img src={ImgGrid137} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={4}
            gridColumnEnd={-1}
            isGridRow
            gridRowStart={3}
            gridRowEnd={4}
          >
            <img src={ImgGrid138} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={2}
            gridColumnEnd={4}
            isGridRow
            gridRowStart={3}
            gridRowEnd={5}
          >
            <img src={ImgGrid139} alt='' />
          </BoxDefault>
          <BoxDefault
            isGridColumn
            gridColumnStart={4}
            gridColumnEnd={2}
            gridColumnEndSpan='span'
            isGridRow
            gridRowStart={4}
            gridRowEnd={5}
          >
            <img src={ImgGrid1310} alt='' />
          </BoxDefault>
        </ContentDefault> */}

        {/* <ContentDefault bgcolor='greenDark' isGridRepeat={1} padding='base40'>
          <BoxDefault textcolor='white'>
            <HeadingDefault marginBottom='base20' fontSize='base24'>
              Join our community
            </HeadingDefault>
            <TextDefault marginBottom='base20'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TextDefault>
            <TextDefault>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              ea, itaque voluptates dolorum sunt ex.
            </TextDefault>
          </BoxDefault>
        </ContentDefault>
        <ContentDefault isGridRepeat={2} columnGap='base0' rowGap='base0'>
          <BoxDefault bgcolor='greenLight' padding='base40'>
            <HeadingDefault
              marginBottom='base40'
              fontSize='base24'
              textcolor='white'
              as='h2'
            >
              Monthly Subscription
            </HeadingDefault>
            <BoxDefault as='ul' textcolor='white' marginBottom='base40'>
              <BoxDefault as='li'>$14 per month</BoxDefault>
              <BoxDefault as='li'>
                Full access for less than half a dollar a day
              </BoxDefault>
            </BoxDefault>
            <ButtonDefault
              paddingX='base20'
              paddingY='base10'
              bgcolor='greenDark'
              textcolor='white'
            >
              Sign Up
            </ButtonDefault>
          </BoxDefault>
          <BoxDefault padding='base40' bgcolor='green'>
            <HeadingDefault
              marginBottom='base20'
              fontSize='base24'
              textcolor='white'
              as='h2'
            >
              Why Us
            </HeadingDefault>
            <BoxDefault marginBottom='base20' textcolor='white' as='ul'>
              <BoxDefault as='li'>Up to 1 User</BoxDefault>
              <BoxDefault as='li'>All UI Components</BoxDefault>
              <BoxDefault as='li'>Lifetime Access</BoxDefault>
              <BoxDefault as='li'>Free Updates</BoxDefault>
              <BoxDefault as='li'>Community Support</BoxDefault>
              <BoxDefault as='li'>Downloadable Files</BoxDefault>
            </BoxDefault>
          </BoxDefault>
        </ContentDefault> */}

        {/* <ContentDefault isGridRepeat={4}>
          {planos.map(item => {
            return (
              <CardPaymentDefault
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                bgcolor={item.bgcolor}
                priceCut={item.priceCut}
                lowerPrice={item.lowerPrice}
                plansOptions={item.options}
              />
            );
          })}
        </ContentDefault> */}
      </ContainerDefault>
    </>
  );
};

export { TestePage };
