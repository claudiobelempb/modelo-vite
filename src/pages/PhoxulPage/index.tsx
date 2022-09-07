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
import { gridColumnsDefault } from '@assets/styles/themes/ThemeType';
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
        bgcolor='grayDarkHsl'
        isPaddingCustom
        paddingStaticX='base20'
        paddingDynamicX='base12VW'
        paddingStaticY='base10'
        paddingDynamicY='base2VH'
      >
        <BrandDefault textcolor='grayLightHsl' text='Phoxul' />
        <ListDefault gap='base32' aitems='center' jcontent='flexEnd'>
          <li>
            <LinkDefault isActive textcolor='grayLightHsl'>
              Home
            </LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl'>Services</LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl'>Works</LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl'>Gallery</LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl'>Blog</LinkDefault>
          </li>
          <li>
            <LinkDefault textcolor='grayLightHsl'>Contact</LinkDefault>
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
        isPaddingCustom
        paddingStaticX='base20'
        paddingDynamicX='base12VW'
        paddingStaticY='base20'
        paddingDynamicY='base2VH'
        isAfter
        afterPosition='absolute'
        afterBottom={0}
        afterLeft={0}
        afterWidth='base100p'
        afterHeight='base100p'
        afterZindex={0}
        afterClipPath
        afterBackgroundColor='grayDarkHsl'
      >
        <BoxDefault
          display='flex'
          direction='column'
          flexBasis='base50p'
          gap='base30'
          zIndex={6}
        >
          <HeadingDefault as='h6' textcolor='title'>
            Welcome to
          </HeadingDefault>
          <HeadingDefault fontSizeDynamic='2' as='h1' textcolor='title'>
            Phoxul Studio
          </HeadingDefault>
          <TextDefault fontSize='base20' textcolor='whiteHsl'>
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold.
          </TextDefault>
          <BoxDefault display='flex' gap='base20'>
            <LinkDefault
              bgcolor='whiteHsl'
              textcolor='grayDarkHsl'
              bgHover='transparent'
              textHover='whiteHsl'
              isPaddingCustom
              paddingStaticX='base10'
              paddingDynamicX='base2VW'
              paddingStaticY='base10'
              paddingDynamicY='base1VH'
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
              isPaddingCustom
              paddingStaticX='base10'
              paddingDynamicX='base2VW'
              paddingStaticY='base10'
              paddingDynamicY='base1VH'
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
          isPosition
          position='absolute'
          top='base0'
          bottom='base0'
          left='base50p'
          zIndex={2}
          src={ImgHero}
          isWidth='isWidthP'
          widthP={10}
          widthCalc={9}
          alt='Phoxul Studio
'
        />
      </ContentDefault>

      {/* ------------ Section Personal ----------- */}
      <ContentDefault
        isOverall
        as='section'
        display='flex'
        isPaddingCustom
        paddingDynamicX='base12VW'
        paddingDynamicY='base2VH'
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
            fontSizeDynamic='1.5'
            lineHeight='base160'
          >
            Hello, I'm Martin Dow, a professional photographer based in USA
          </HeadingDefault>
          <TextDefault
            fontSizeStatic='base10'
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
          zIndex={1}
          isBefore
          beforePosition='absolute'
          beforeTop={-5}
          beforeLeft={15}
          beforeWidth='base50p'
          beforeHeight='base50p'
          beforeBackgroundImg={ImgDot}
          isAfter
          afterPosition='absolute'
          afterTop={5}
          afterRight={-5}
          afterWidth='base50p'
          afterHeight='base100p'
          afterBackgroundColor='grayDarkHsl'
          isTransform
          isWidth='isWidthP'
          widthP={10}
          widthCalc={8}
          isHeight='isHeightP'
          heightP={10}
          heightCalc={10}
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
        bgcolor='grayDarkHsl'
        display='flex'
        isPaddingCustom
        paddingDynamicX='base12VW'
        paddingDynamicY='base2VH'
        direction='column'
        gap='base40'
      >
        <BoxDefault display='flex' direction='column' gap='base40'>
          <HeadingDefault
            textAling='center'
            as='h2'
            textcolor='title'
            fontSizeDynamic='1.5'
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
          >
            <FaCamera />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
          >
            <FaVideo />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
          >
            <FaBrush />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
          >
            <FaCamera />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
          >
            <FaLightbulb />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
          >
            <FaRulerCombined />
            <HeadingDefault fontSizeStatic='base20' as='h3'>
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
        isPaddingCustom
        paddingDynamicX='base12VW'
        paddingDynamicY='base2VH'
      >
        <BoxDefault
          display='flex'
          direction='column'
          gap='base40'
          paddingY='base20'
        >
          <HeadingDefault
            fontSizeDynamic='1.5'
            textAling='center'
            as='h2'
            textcolor='grayDarkHsl'
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
            gridColumnsDefault={() => gridColumnsDefault(1, 'span', 3)}
            gridColumnEndSpan='span'
            isGridRow
            gridRowStart={3}
            gridRowEnd={4}
            gridRowEndSpan='span'
          >
            <LinkDefault>Resources</LinkDefault>
            <HeadingDefault as='h3' textcolor='grayDarkHsl'>
              Cosina announces its fastest full-frame lens
            </HeadingDefault>
            <TextDefault>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis quas doloribus.
            </TextDefault>
            <BoxDefault>
              <LinkDefault>Read More</LinkDefault>
              <TextDefault>20 Oct, 2035</TextDefault>
            </BoxDefault>
          </BoxDefault>
          <BoxDefault
            as='figure'
            isGridColumn
            gridColumnStart={3}
            gridColumnEnd={-1}
            isGridRow
            gridRowStart={1}
            gridRowEnd={-1}
          >
            <ImgDefault src={ImgNews} />
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Works ----------- */}
      <ContentDefault isOverall as='section'>
        <HeadingDefault as='h2' textcolor='title'>
          My Works
        </HeadingDefault>
        <ListDefault>
          <li>
            <LinkDefault>All</LinkDefault>
          </li>
          <li>
            <LinkDefault>Pessonal</LinkDefault>
          </li>
          <li>
            <LinkDefault>Wedding</LinkDefault>
          </li>
          <li>
            <LinkDefault>Event</LinkDefault>
          </li>
          <li>
            <LinkDefault>Fashion</LinkDefault>
          </li>
          <li>
            <LinkDefault>Product</LinkDefault>
          </li>
        </ListDefault>
        <BoxDefault>
          <ImgDefault src={ImgMyWorks1} />
          <ImgDefault src={ImgMyWorks2} />
          <ImgDefault src={ImgMyWorks3} />
          <ImgDefault src={ImgMyWorks4} />
          <ImgDefault src={ImgMyWorks5} />
          <ImgDefault src={ImgMyWorks6} />
          <ImgDefault src={ImgMyWorks7} />
          <ImgDefault src={ImgMyWorks8} />
          <ImgDefault src={ImgMyWorks9} />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Profissional ----------- */}
      <ContentDefault isOverall as='section'>
        <BoxDefault>
          <HeadingDefault as='h2' textcolor='title'>
            Need help with professional photography? Let's work together!
          </HeadingDefault>
          <LinkDefault>Contact Me</LinkDefault>
        </BoxDefault>
        <BoxDefault>
          <TextDefault>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            dicta error. Eum illum amet ducimus eius ex odio animi consectetur
            ad maxime. Placeat, eum iure.
          </TextDefault>
          <BoxDefault>
            <ImgDefault src={ImgContact} />
            <BoxDefault>
              <TextDefault>James Brown</TextDefault>
              <TextDefault>CEO, ColorImage</TextDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Clients ----------- */}
      <ContentDefault isOverall as='section'>
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
        imgBgcolor='grayDarkHsl'
        imgBgPosition='center'
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
