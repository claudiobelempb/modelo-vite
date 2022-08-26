import { ImgPost81, ImgPost82, ImgPost83 } from '@assets/image';
import { CardPesonalInfo } from '@componets/CardPesonalInfo';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';

const BlogPage: React.FC = () => {
  return (
    <>
      {/* <NavigationDefault /> */}

      <ContainerDefault as='main'>
        <ContentDefault as='section' isGridRepeat={3} gap='base10'>
          <CardPesonalInfo
            src={ImgPost81}
            title='Alice Lvy'
            description='Ceo'
          />
          <CardPesonalInfo src={ImgPost82} title='AlexLvy' description='Cfo' />
          <CardPesonalInfo src={ImgPost83} title='Joy Lvy' description='Cmo' />
        </ContentDefault>
      </ContainerDefault>
    </>
  );
};

export { BlogPage };
