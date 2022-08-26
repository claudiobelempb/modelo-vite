import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';

const ModalDefault: React.FC = () => {
  return (
    <BoxDefault
      margin='auto'
      marginTop='base20'
      bgcolor='purple'
      textcolor='white'
      paddingX='base20'
      paddingY='base20'
      radius='base8'
      width='base310'
    >
      <HeadingDefault
        fontSize='base20'
        fontWeight='700'
        as='h2'
        textAling='center'
        paddingY='base20'
      >
        Attempt Successful
      </HeadingDefault>
      <TextDefault textAling='center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        libero fugiat quasi maiores facere quisquam dignissimos?
      </TextDefault>
      <BoxDefault display='flex' gap='base10' marginTop='base20'>
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          bgcolor='purpleDark'
          textcolor='white'
          radius='base10'
        >
          Cancel
        </LinkDefault>
        <LinkDefault
          paddingX='base20'
          paddingY='base10'
          bgcolor='white'
          textcolor='purpleDark'
          radius='base10'
        >
          View Details
        </LinkDefault>
      </BoxDefault>
    </BoxDefault>
  );
};

export { ModalDefault };
