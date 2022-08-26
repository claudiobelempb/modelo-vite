import { ImgCardTop } from '@assets/image';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { BrandDefault } from '@componets/BrandDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';
import { FaBars, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      as='header'
      isGridRepeat={2}
      gap='base10'
      jcontent='center'
      aitems='center'
      bgcolor='white'
      zIndex={zIndex}
      isOpenNav={isOpenNav}
      paddingY='base32'
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
      <BoxDefault jcontent='end' aitems='center' gap='base12'>
        <ButtonDefault
          bgtext='purple'
          bgcolor='purpleLight'
          jcontent='center'
          aitems='center'
          padding='base8'
        >
          <FaMapMarkerAlt />
          <TextDefault marginX='base5' fontSize='base14' bgtext='purpleDark'>
            Porto Alegre, RS
          </TextDefault>
        </ButtonDefault>
        <Link to='/checkout'>
          <ButtonDefault
            bgtext='yellow'
            bgcolor='yellowLight'
            isPosition='relative'
          >
            <TextDefault
              isPosition='absolute'
              as='span'
              top='base6n'
              right='base6n'
              bgcolor='yellowDark'
              bgtext='white'
              width='base20'
              height='base20'
              radius='base50'
              jcontent='center'
              aitems='center'
              fontSize='base12'
              fontWeight='bold'
            >
              1
            </TextDefault>
            <TextDefault
              width='base40'
              height='base40'
              jcontent='center'
              aitems='center'
            >
              <img src={ImgCardTop} alt='' />
            </TextDefault>
          </ButtonDefault>
        </Link>
      </BoxDefault>

      {isOpenNav && (
        <>
          <Styles.NavMobileDefaultMask></Styles.NavMobileDefaultMask>
          <Styles.NavMobileDefaultContainer isOpenNav={isOpenNav}>
            <ContentDefault gap='base10' jcontent='center'>
              <BoxDefault direction='column' height='base100'>
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
