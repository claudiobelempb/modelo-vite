import { ImgBrand } from '@assets/image';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { Link } from 'react-router-dom';

import { textColorDefault } from '@assets/styles/themes/functions/colorDefault';
import { ImgDefault } from '@componets/ImgDefault';

const BrandDefault: React.FC<TypeDefault> = ({ ...props }) => {
  switch (props.model) {
    case 1: {
      return (
        <Link to='/'>
          <ImgDefault src={props.src} alt={props.title} />
        </Link>
      );
    }
    default: {
      return (
        <Link to='/'>
          <HeadingDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
          >
            {props.title}
          </HeadingDefault>
        </Link>
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
