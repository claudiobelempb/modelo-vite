import { ImgBrand } from '@assets/image';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { Link } from 'react-router-dom';

import * as Styles from './styles';

import { ImgDefault } from '@componets/ImgDefault';

const BrandDefault: React.FC<TypeDefault> = ({ src, text, type, ...props }) => {
  switch (props.model) {
    case 1: {
      return (
        <Styles.BrandDefautContainer
          textcolor={props.textcolor}
          bgcolor={props.bgcolor}
          fontSize={props.fontSize}
          direction={props.direction}
          jcontent={props.jcontent}
          aitems={props.aitems}
          padding={props.padding}
          paddingX={props.paddingX}
          paddingY={props.paddingY}
          margin={props.margin}
          marginX={props.marginX}
          marginY={props.marginY}
          gridArea={props.gridArea}
        >
          <Link to='/'>
            <ImgDefault height={props.height} src={src} alt={text} />
          </Link>
        </Styles.BrandDefautContainer>
      );
    }
    default: {
      return (
        <Styles.BrandDefautContainer
          textcolor={props.textcolor}
          bgcolor={props.bgcolor}
          fontSize={props.fontSize}
          direction={props.direction}
          jcontent={props.jcontent}
          aitems={props.aitems}
          padding={props.padding}
          paddingX={props.paddingX}
          paddingY={props.paddingY}
          margin={props.margin}
          marginX={props.marginX}
          marginY={props.marginY}
          gridArea={props.gridArea}
        >
          <Link to='/'>
            <HeadingDefault
              textcolor={props.textcolor}
              bgcolor={props.bgcolor}
              fontSize={props.fontSize}
              direction={props.direction}
              jcontent={props.jcontent}
              aitems={props.aitems}
              padding={props.padding}
              paddingX={props.paddingX}
              paddingY={props.paddingY}
              margin={props.margin}
              marginX={props.marginX}
              marginY={props.marginY}
              gridArea={props.gridArea}
            >
              {text}
            </HeadingDefault>
          </Link>
        </Styles.BrandDefautContainer>
      );
    }
  }
};

BrandDefault.defaultProps = {
  type: 'text',
  src: ImgBrand,
  text: 'Brand Default'
};

export { BrandDefault };
