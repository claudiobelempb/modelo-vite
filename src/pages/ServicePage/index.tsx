import { CardServiceDefault } from '@componets/CardServiceDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';

const ServicePage: React.FC = () => {
  return (
    <ContainerDefault>
      <ContentDefault
        display='flex'
        direction='column'
        jcontent='center'
        aitems='center'
      >
        <TextDefault textcolor='blue' textAling='center' paddingY='base20'>
          Our Service
        </TextDefault>
        <HeadingDefault as='h2' fontSize='base32' textAling='center'>
          What We Offer
        </HeadingDefault>
        <TextDefault textAling='center' paddingY='base20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          velit porro et voluptas nihil ex id!
        </TextDefault>
      </ContentDefault>
      <ContentDefault isGridRepeat={3}>
        <CardServiceDefault />
        <CardServiceDefault alignSelf='center' />
        <CardServiceDefault alignSelf='flexEnd' />
        <CardServiceDefault />
        <CardServiceDefault />
        <CardServiceDefault />
      </ContentDefault>
    </ContainerDefault>
  );
};

export { ServicePage };
