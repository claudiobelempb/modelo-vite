import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { LinkDefault } from '@componets/LinkDefault';

const NavigationDefault: React.FC = () => {
  return (
    <ContainerDefault as='header' bgcolor='blue' bgtext='white'>
      <ContentDefault
        padding='base5'
        as='nav'
        isGridRepeat={1}
        jcontent='spaceBetween'
      >
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          isHover
          bgcolor='white'
          bgtext='white'
          radius='base32'
        >
          Profile
        </LinkDefault>
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          isHover
          bgcolor='white'
          bgtext='white'
          radius='base32'
        >
          Notification
        </LinkDefault>
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          isHover
          bgcolor='white'
          bgtext='white'
          radius='base32'
        >
          Payments
        </LinkDefault>
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          isHover
          bgcolor='white'
          bgtext='white'
          radius='base32'
        >
          Contact
        </LinkDefault>
      </ContentDefault>
    </ContainerDefault>
  );
};

export { NavigationDefault };
