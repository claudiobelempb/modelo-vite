import {
  ImgClient1,
  ImgClient2,
  ImgClient3,
  ImgClient4,
  ImgContact,
  ImgDot,
  ImgFooter,
  ImgHero,
  ImgMyWorks1,
  ImgMyWorks2,
  ImgMyWorks3,
  ImgMyWorks4,
  ImgMyWorks5,
  ImgMyWorks6,
  ImgMyWorks7,
  ImgMyWorks8,
  ImgMyWorks9,
  ImgNews,
  ImgPersonal
} from '@assets/image';
import { afterDefault } from '@assets/styles/themes/functions/afterDefault';
import { backgroundImgDefault } from '@assets/styles/themes/functions/backgroundImgDefault';
import { beforeDefault } from '@assets/styles/themes/functions/beforeDefault';
import { borderDefaultLeft } from '@assets/styles/themes/functions/borderDefault';
import { effectDefault } from '@assets/styles/themes/functions/effectDefaults';
import { positionDefault } from '@assets/styles/themes/functions/positionDefault';
import {
  fontSizeDynamic,
  gridColumnsDefault,
  gridRows,
  paddingDynamic,
  paddingDynamicX,
  paddingStatic,
  paddingStaticY
} from '@assets/styles/themes/ThemeType';
import { BoxDefault } from '@componets/BoxDefault';
import { BrandDefault } from '@componets/BrandDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { ImgDefault } from '@componets/ImgDefault';
import { InputDefault } from '@componets/InputDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { ListDefault } from '@componets/ListDefault';
import { TextDefault } from '@componets/TextDefault';
import {
  FaAddressCard,
  FaBrush,
  FaCamera,
  FaCheckCircle,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaLightbulb,
  FaLinkedin,
  FaPhone,
  FaRulerCombined,
  FaTwitter,
  FaVideo
} from 'react-icons/fa';

const PhoxulPage: React.FC = () => {
  return (
    <ContainerDefault isGridTemplateColumns>
      {/* ------------ Header ----------- */}
      <ContentDefault
        position='relative'
        as='header'
        isOverall
        display='flex'
        bgcolor='grayHsl'
        paddingDynamic={() => paddingDynamic(1, 2, 2, 12)}
      >
        <BrandDefault textcolor='whiteHsl' text='Phoxul' />
        <ListDefault gap='base32' aitems='center' jcontent='flexEnd'>
          <li>
            <LinkDefault isActive textcolor='grayLightHsl'>
              Home
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
              Services
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
              Works
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
              Gallery
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
              Blog
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
              Contact
            </LinkDefault>
          </li>
        </ListDefault>
      </ContentDefault>
      {/* ------------ Section Hero ----------- */}

      <ContentDefault
        isOverall
        as='section'
        display='flex'
        position='relative'
        isHeight='isHeightVH'
        heightVH={10}
        heightCalc={8}
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        afterDefault={() =>
          afterDefault({
            bottom: -0.5,
            backgroundColor: 'grayDarkHsl',
            clipPath: true
          })
        }
      >
        <BoxDefault
          display='flex'
          direction='column'
          flexBasis='base50p'
          gap='base30'
          zIndex={6}
        >
          <HeadingDefault as='h6' textcolor='title' fontSizeStatic={1.5}>
            Welcome to
          </HeadingDefault>
          <HeadingDefault
            fontSizeDynamic={() => fontSizeDynamic(2, 3)}
            as='h1'
            textcolor='title'
          >
            Phoxul Studio
          </HeadingDefault>
          <TextDefault fontSizeStatic={2} textcolor='whiteHsl'>
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold.
          </TextDefault>
          <BoxDefault display='flex' gap='base20'>
            <LinkDefault
              bgcolor='whiteHsl'
              textcolor='grayDarkHsl'
              bgHover='transparent'
              textHover='whiteHsl'
              paddingStatic={() => paddingStatic(1, 2.5)}
              isBorderDefault
              borderWidth={1}
              borderStyle='solid'
              borderColor='whiteHsl'
              radius='base30'
            >
              My works
            </LinkDefault>
            <LinkDefault
              bgcolor='transparent'
              textcolor='whiteHsl'
              bgHover='whiteHsl'
              textHover='grayDarkHsl'
              paddingStatic={() => paddingStatic(1, 2.5)}
              isBorderDefault
              borderWidth={1}
              borderStyle='solid'
              borderColor='whiteHsl'
              radius='base30'
            >
              Contact
            </LinkDefault>
          </BoxDefault>
        </BoxDefault>

        <ImgDefault
          position='relative'
          positionDefault={() =>
            positionDefault({
              position: 'absolute',
              zIndex: 1,
              left: 5,
              width: 9,
              height: 10,
              transformX: true,
              translate: -5
            })
          }
          src={ImgHero}
          alt='Phoxul Studio
'
        />
      </ContentDefault>

      {/* ------------ Section Personal ----------- */}
      <ContentDefault
        isOverall
        as='section'
        display='flex'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        columnGap='base100r'
      >
        <BoxDefault
          flexBasis='base50p'
          aitems='center'
          jcontent='center'
          direction='column'
          gap='base20'
        >
          <HeadingDefault
            as='h2'
            textcolor='grayDarkHsl'
            fontWeight='bold'
            fontSizeDynamic={() => fontSizeDynamic(1, 1.5)}
            lineHeight='base160'
          >
            Hello, I'm Martin Dow, a professional photographer based in USA
          </HeadingDefault>
          <TextDefault
            fontSizeStatic={1.5}
            lineHeight='base160'
            textcolor='grayLightHsl'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem reiciendis officiis quis quasi corporis possimus
            obcaecati alias esse! Animi voluptates reiciendis repudiandae
            assumenda! Ex, ab.
          </TextDefault>

          <ListDefault display='flex' direction='column' gap='base20'>
            <BoxDefault
              display='flex'
              gap='base20'
              aitems='center'
              textcolor='grayLightHsl'
              iconColor='grayDarkHsl'
              iconSize='base32'
            >
              <FaCheckCircle />
              Over 7 Years of Experience
            </BoxDefault>
            <BoxDefault
              display='flex'
              gap='base20'
              aitems='center'
              textcolor='grayLightHsl'
              iconColor='grayDarkHsl'
              iconSize='base32'
            >
              <FaCheckCircle /> 200+ Successfully Executed Projets
            </BoxDefault>
            <BoxDefault
              display='flex'
              gap='base20'
              aitems='center'
              textcolor='grayLightHsl'
              iconColor='grayDarkHsl'
              iconSize='base32'
            >
              <FaCheckCircle /> Exceptional Work Quality
            </BoxDefault>
          </ListDefault>
        </BoxDefault>

        <ImgDefault
          beforeDefault={() =>
            beforeDefault({
              top: 0.4,
              left: 1.5,
              width: 5,
              height: 5,
              backgroundImg: ImgDot
            })
          }
          afterDefault={() =>
            afterDefault({
              top: 1.5,
              right: -0.5,
              left: 2.5,
              width: 8,
              height: 8,
              backgroundColor: 'grayDarkHsl'
            })
          }
          zIndex={1}
          width={8}
          height={8}
          effectDefault={() =>
            effectDefault({
              value: [0.9],
              transform: 'scale',
              property: 'all',
              duration: 0.6,
              timingFunction: 'ease-in-out',
              delay: 0
            })
          }
          display='flex'
          flexBasis='base50p'
          position='relative'
          jcontent='flexEnd'
          aitems='center'
          src={ImgPersonal}
          alt="Hello, I'm Martin Dow, a professional photographer based in USA"
        />
      </ContentDefault>

      {/* ------------ Section Service ----------- */}
      <ContentDefault
        isOverall
        as='section'
        bgcolor='grayHsl'
        display='flex'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        direction='column'
        gap='base40'
      >
        <BoxDefault display='flex' direction='column' gap='base40'>
          <HeadingDefault
            textAling='center'
            as='h2'
            textcolor='title'
            // fpdx={() => fpdx(1, 1.5)}
            paddingDynamicX={() => paddingDynamicX(1, 1.5)}
            fontSizeDynamic={() => fontSizeDynamic(1, 1.5)}
            // fsd={1.5}
            // fsdcalc={2}
            // fss={3.5}
          >
            My Services
          </HeadingDefault>
          <TextDefault
            textAling='center'
            lineHeight='base160'
            textcolor='grayLightHsl'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            tempore quidem reprehenderit. Provident excepturi odio aspernatur
            cupiditate cum tempora facere!
          </TextDefault>
        </BoxDefault>
        <BoxDefault isGridRepeat={2} textcolor='title' gap='base50'>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isPar
          >
            <FaCamera />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Photography
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isImpar
          >
            <FaVideo />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Videography
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isPar
          >
            <FaBrush />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Photo Retouching
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isImpar
          >
            <FaCamera />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Aerial Photography
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isPar
          >
            <FaLightbulb />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Lighting Setup
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            iconSize='base32'
            display='flex'
            direction='column'
            gap='base20'
            paddingY='base32'
            isImpar
          >
            <FaRulerCombined />
            <HeadingDefault textcolor='whiteHsl' fontSizeStatic={2} as='h3'>
              Video Color Grading
            </HeadingDefault>
            <TextDefault textcolor='grayLightHsl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Latest News ----------- */}
      <ContentDefault
        isOverall
        as='section'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        gap='base40'
      >
        <BoxDefault display='flex' direction='column' paddingY='base20'>
          <HeadingDefault
            as='h2'
            position='relative'
            paddingBottom={2}
            marginBottom={2}
            fontSizeDynamic={() => fontSizeDynamic(1, 1.5)}
            textcolor='grayDarkHsl'
            afterDefault={() =>
              afterDefault({
                top: 8,
                backgroundColor: 'grayDarkHsl',
                width: 5,
                height: 0.1
              })
            }
          >
            Latest News
          </HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, velit!
          </TextDefault>
        </BoxDefault>
        <BoxDefault as='article' gridTemplateColumns={6} gridTemplateRows={8}>
          <BoxDefault
            display='flex'
            direction='column'
            gridColumnsDefault={() => gridColumnsDefault(1, 'span', 3)}
            gridRows={() => gridRows(3, 'span', 4)}
            gap='base30'
            bgcolor='whiteHsl'
            padding='base30'
            zIndex={1}
          >
            <LinkDefault
              bgcolor='grayDarkHsl'
              textcolor='white'
              paddingX='base20'
              paddingY='base10'
              bgHover='grayDarkHsl'
            >
              Resources
            </LinkDefault>
            <HeadingDefault
              as='h3'
              textcolor='grayDarkHsl'
              fontSizeStatic={-8}
              lineHeight='base160'
            >
              Cosina announces its fastest full-frame lens
            </HeadingDefault>
            <TextDefault lineHeight='base160' fontSizeStatic={-8.5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis quas doloribus.
            </TextDefault>
            <BoxDefault
              display='flex'
              jcontent='spaceBetween'
              aitems='center'
              paddingStaticY={() => paddingStaticY(10)}
              marginTop={12.5}
            >
              <LinkDefault textAling='center' paddingY='base10'>
                Read More
              </LinkDefault>
              <TextDefault textAling='right'>20 Oct, 2035</TextDefault>
            </BoxDefault>
          </BoxDefault>

          <ImgDefault
            // isTransform
            gridColumnsDefault={() => gridColumnsDefault(3, '', -1)}
            gridRows={() => gridRows(1, '', -1)}
            src={ImgNews}
            effectDefault={() =>
              effectDefault({
                value: [0.9],
                transform: 'scale',
                property: 'all',
                duration: 0.6,
                timingFunction: 'ease-in-out',
                delay: 0
              })
            }
          />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Works ----------- */}
      <ContentDefault
        isOverall
        as='section'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        bgcolor='grayHsl'
      >
        <HeadingDefault
          as='h2'
          paddingY='base20'
          marginBottom={12.5}
          position='relative'
          fontSizeDynamic={() => fontSizeDynamic(1, 1.5)}
          textcolor='whiteHsl'
          afterDefault={() =>
            afterDefault({
              top: 8,
              backgroundColor: 'grayLightHsl',
              width: 5,
              height: 0.1
            })
          }
        >
          My Works
        </HeadingDefault>
        <ListDefault textcolor='whiteHsl' gap='base20' paddingY='base20'>
          <LinkDefault isActive textcolor='grayLightHsl' textHover='whiteHsl'>
            All
          </LinkDefault>
          <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
            Pessonal
          </LinkDefault>
          <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
            Wedding
          </LinkDefault>
          <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
            Event
          </LinkDefault>
          <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
            Fashion
          </LinkDefault>
          <LinkDefault textcolor='grayLightHsl' textHover='whiteHsl'>
            Product
          </LinkDefault>
        </ListDefault>
        <BoxDefault gridTemplateColumns={3} gridTemplateRows={4} gap='base20'>
          <ImgDefault
            position='relative'
            gridColumnsDefault={() => gridColumnsDefault(1, '', 2)}
            gridRows={() => gridRows(1, '', 3)}
            src={ImgMyWorks1}
            // effectDefault={() =>
            //   effectDefault({
            //     element: 'background-color',
            //     value: [0.9],
            //     transform: 'scale',
            //     property: 'all',
            //     duration: 2.5,
            //     timingFunction: 'ease-in-out',
            //     delay: 0
            //   })
            // }
            // beforeDefault={() =>
            //   beforeDefault({
            //     width: 10,
            //     height: 10,
            //     backgroundColor: 'grayLightHsl'
            //   })
            // }
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(2, '', 3)}
            gridRows={() => gridRows(1, '', 2)}
            src={ImgMyWorks2}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(3, '', 4)}
            gridRows={() => gridRows(1, '', 3)}
            src={ImgMyWorks3}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(1, '', 2)}
            gridRows={() => gridRows(3, '', 4)}
            src={ImgMyWorks4}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(2, '', 3)}
            gridRows={() => gridRows(2, '', 4)}
            src={ImgMyWorks5}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(3, '', 4)}
            gridRows={() => gridRows(3, '', 4)}
            src={ImgMyWorks6}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(1, '', 2)}
            gridRows={() => gridRows(4, '', 5)}
            src={ImgMyWorks7}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(2, '', 3)}
            gridRows={() => gridRows(4, '', 5)}
            src={ImgMyWorks8}
          />
          <ImgDefault
            gridColumnsDefault={() => gridColumnsDefault(3, '', 4)}
            gridRows={() => gridRows(4, '', 5)}
            src={ImgMyWorks9}
          />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Profissional ----------- */}
      <ContentDefault
        isOverall
        as='section'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
        bgcolor='grayHsl'
        display='flex'
        jcontent='spaceBetween'
        aitems='flexStart'
        gap='base20'
        position='relative'
        backgroundImgDefault={() =>
          backgroundImgDefault({
            position: 'relative',
            width: 10,
            height: 10,
            backgroundColor: 'transparent',
            backgroundImg: ImgHero,
            backgroundAttachment: 'fixed'
          })
        }
      >
        <BoxDefault
          display='flex'
          direction='column'
          gap='base20'
          flexBasis='base50p'
        >
          <HeadingDefault
            as='h2'
            textcolor='title'
            fontSizeStatic={2.5}
            lineHeight='base160'
          >
            Need help with professional photography? Let's work together!
          </HeadingDefault>
          <LinkDefault
            bgcolor='transparent'
            textcolor='whiteHsl'
            bgHover='whiteHsl'
            textHover='grayDarkHsl'
            paddingStatic={() => paddingStatic(1, 2.5)}
            isBorderDefault
            borderWidth={1}
            borderStyle='solid'
            borderColor='whiteHsl'
            radius='base30'
          >
            Contact Me
          </LinkDefault>
        </BoxDefault>
        <BoxDefault
          gap='base40'
          bgcolor='whiteHsl'
          flexBasis='base50p'
          display='flex'
          aitems='center'
          direction='column'
          paddingDynamic={() => paddingDynamic(1, 4, 1, 4)}
        >
          <TextDefault
            paddingLeft={3}
            borderDefaultLeft={() =>
              borderDefaultLeft(1, 'solid', 'grayDarkHsl')
            }
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            dicta error. Eum illum amet ducimus eius ex odio animi consectetur
            ad maxime. Placeat, eum iure.
          </TextDefault>
          <BoxDefault display='flex' aitems='center' gap='base20'>
            <ImgDefault
              src={ImgContact}
              borderRadius={{
                valueStatic: 5,
                opeation: '*',
                valueDinamic: 10,
                unit: '%'
              }}
            />
            <BoxDefault>
              <TextDefault>James Brown</TextDefault>
              <TextDefault>CEO, ColorImage</TextDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Clients ----------- */}
      <ContentDefault
        isOverall
        as='section'
        paddingDynamicX={() => paddingDynamicX(2, 12)}
        display='flex'
        bgcolor='grayHsl'
      >
        <ImgDefault src={ImgClient1} />
        <ImgDefault src={ImgClient2} />
        <ImgDefault src={ImgClient3} />
        <ImgDefault src={ImgClient4} />
      </ContentDefault>

      {/* ------------ Section Footer ----------- */}
      <ContentDefault
        isOverall
        as='footer'
        isImgBackgroundGradient
        imgBgUrl={ImgFooter}
        imgBgSize='cover'
        imgBgcolor='grayHsl'
        imgBgPosition='center'
        paddingDynamic={() => paddingDynamic(2, 12, 2, 12)}
      >
        <BoxDefault>
          <BoxDefault>
            <HeadingDefault as='h2' textcolor='title'>
              Sign up to get latest update
            </HeadingDefault>
            <TextDefault>
              Sign up for our monthly newsletter for the latest news & articles
            </TextDefault>
          </BoxDefault>
          <BoxDefault as='form'>
            <InputDefault placeholder='Enter Your Email' />
            <ButtonDefault>Subscribe Now</ButtonDefault>
          </BoxDefault>
        </BoxDefault>
        <BoxDefault>
          <BoxDefault>
            <BrandDefault text='Phoxul' />
            <TextDefault>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate velit magnam doloribus reiciendis
            </TextDefault>
          </BoxDefault>
          <BoxDefault>
            <HeadingDefault as='h3' textcolor='title'>
              Quick Links
            </HeadingDefault>
            <ListDefault>
              <li>About</li>
              <li>Services</li>
              <li>Works</li>
              <li>Blog</li>
            </ListDefault>
          </BoxDefault>
          <BoxDefault>
            <HeadingDefault as='h3' textcolor='title'>
              Contact
            </HeadingDefault>
            <ListDefault>
              <li>
                <FaPhone /> +93 123 456 7890
              </li>
              <li>
                <FaEnvelope /> el@el.cool
              </li>
              <li>
                <FaAddressCard /> 177A Bleecker Street, NYC, USA
              </li>
            </ListDefault>
          </BoxDefault>
          <BoxDefault>
            <TextDefault>Muslim Helalee. All Rights Reserved</TextDefault>
            <ListDefault>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaDribbble />
              </li>
            </ListDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>
    </ContainerDefault>
  );
};

export { PhoxulPage };
