import { ImgGrid221, ImgGrid222, ImgGrid223, ImgGrid224 } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';

const TestePage: React.FC = () => {
  return (
    <>
      <ContainerDefault>
        <ContentDefault isGridRepeat={2} gap='unset'>
          <BoxDefault as='figure'>
            <img src={ImgGrid221} alt='' />
          </BoxDefault>
          <BoxDefault as='figure'>
            <img src={ImgGrid222} alt='' />
          </BoxDefault>
          <BoxDefault as='figure'>
            <img src={ImgGrid223} alt='' />
          </BoxDefault>
          <BoxDefault as='figure'>
            <img src={ImgGrid224} alt='' />
          </BoxDefault>
        </ContentDefault>
      </ContainerDefault>
    </>
  );
};

export { TestePage };
