import { HeadingDefault } from '@componets/HeadingDefault';
import { Link } from 'react-router-dom';

import { ImgBrand } from '@assets/image/icons';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';

const BrandDefault: React.FC<TypeDefault> = ({ src, text, type }) => {
  switch (type) {
    case 'image': {
      return (
        <Link to='/'>
          <img src={src} alt={text} />
        </Link>
      );
    }
    default: {
      return (
        <Link to='/'>
          <HeadingDefault>{text}</HeadingDefault>
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
