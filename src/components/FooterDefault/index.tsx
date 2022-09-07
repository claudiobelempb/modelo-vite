import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';

const FooterDefault: React.FC = () => {
  return (
    <ContainerDefault as='footer'>
      <ContentDefault>
        <HeadingDefault>Footer Default</HeadingDefault>
      </ContentDefault>
    </ContainerDefault>
  );
};

export { FooterDefault };
