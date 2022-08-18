import React from 'react';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

import { ImgBrand } from '@assets/image/icons';
import { BoxDefault } from '@componets/BoxDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { NavBarDefault } from '@componets/NavBarDefault';
import { Link } from 'react-router-dom';

const HomeHeader: React.FC = () => {
  return (
    <NavBarDefault>
      <ContainerDefault>
        <ContentDefault jcontent='spaceBetween' as='header' aitems='center'>
          <BoxDefault>
            <Link to={'/'}>
              <img src={ImgBrand} />
            </Link>
          </BoxDefault>
          <BoxDefault jcontent='flexEnd' aitems='center'>
            <button>
              <FaMapMarkerAlt />
              Porto Alegre, RS
            </button>
            <button>
              <FaShoppingCart />
            </button>
          </BoxDefault>
        </ContentDefault>
      </ContainerDefault>
    </NavBarDefault>
  );
};

export { HomeHeader };
