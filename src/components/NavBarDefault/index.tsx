import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { BrandDefault } from '@componets/BrandDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { LinkDefault } from '@componets/LinkDefault/LinkDefault';
import { TextDefault } from '@componets/TextDefault';
import {
  FaBars,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaTimes
} from 'react-icons/fa';

import * as Styles from './styles';

const NavBarDefault: React.FC<TypeDefault> = ({
  children,
  bgtext,
  fontSize,
  bgcolor,
  direction,
  aitems,
  jcontent,
  links,
  zIndex = 1,
  isOpenNav = false,
  target,
  type
}) => {
  return (
    <ContentDefault
      gap='base10'
      jcontent='center'
      aitems='center'
      isHeight='100%'
      media='media'
      bgcolor='white'
    >
      <Styles.NavDefaultContainer zIndex={zIndex} isOpenNav={isOpenNav}>
        <ContentDefault
          gap='base10'
          jcontent='center'
          aitems='center'
          isHeight='100%'
          media='media'
        >
          <BoxDefault>
            {isOpenNav ? (
              <>
                <ButtonDefault>
                  {isOpenNav ? <FaTimes /> : <FaBars />}
                </ButtonDefault>
              </>
            ) : (
              <BrandDefault type='image' />
            )}
          </BoxDefault>

          <BoxDefault
            jcontent='end'
            aitems='center'
            direction='row'
            gap='base12'
          >
            <ButtonDefault
              bgtext='purple'
              bgcolor='purpleLight'
              jcontent='center'
              aitems='center'
              padding='base8'
            >
              <FaMapMarkerAlt />
              <TextDefault
                marginX='base5'
                fontSize='base14'
                bgtext='purpleDark'
              >
                Porto Alegre, RS
              </TextDefault>
            </ButtonDefault>
            <ButtonDefault
              bgtext='yellow'
              bgcolor='yellowLight'
              padding='base8'
            >
              <FaShoppingCart />
            </ButtonDefault>
          </BoxDefault>
        </ContentDefault>
      </Styles.NavDefaultContainer>

      {isOpenNav && (
        <>
          <Styles.NavMobileDefaultMask></Styles.NavMobileDefaultMask>
          <Styles.NavMobileDefaultContainer isOpenNav={isOpenNav}>
            <ContentDefault gap='base10' jcontent='center'>
              <BoxDefault direction='column' isHeight='100%'>
                <BrandDefault type='image' />
                <LinkDefault>Brand Default</LinkDefault>
              </BoxDefault>
              <BoxDefault padding='base10' jcontent='center'>
                <ButtonDefault bgtext='red' isPosition='fixed' bottom='base16'>
                  <FaTimes />
                </ButtonDefault>
              </BoxDefault>
            </ContentDefault>
          </Styles.NavMobileDefaultContainer>
        </>
      )}
    </ContentDefault>
  );
};

// NavDefault.defaultProps = {
//   links: [
//     {
//       children: 'Link 01',
//       href: '/',
//       target: '_self'
//     },
//     {
//       children: 'Link 02',
//       href: '/',
//       target: '_self'
//     },
//     {
//       children: 'Link 03',
//       href: '/',
//       target: '_self'
//     }
//   ]
// };

export { NavBarDefault };
