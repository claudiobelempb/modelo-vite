import { BoxDefault } from '@componets/BoxDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { InputDefault } from '@componets/InputDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';

const SignInPage: React.FC = () => {
  return (
    <ContainerDefault>
      <ContentDefault
        jcontent='center'
        aitems='center'
        display='flex'
        marginTop='base50'
      >
        <BoxDefault as='form' direction='column'>
          <HeadingDefault
            fontSize='base32'
            fontWeight='bold'
            textAling='center'
          >
            Evolutive Learning
          </HeadingDefault>

          <InputDefault
            paddingX='base10'
            paddingY='base8'
            type='text'
            placeholder='Email'
            marginBottom='base10'
          />
          <InputDefault
            paddingX='base10'
            paddingY='base8'
            type='password'
            placeholder='Password'
            marginBottom='base10'
          />

          <ButtonDefault
            paddingX='base10'
            jcontent='center'
            paddingY='base8'
            bgcolor='blue'
            bgtext='white'
          >
            Signin
          </ButtonDefault>
          <TextDefault paddingY='base20' jcontent='center' aitems='center'>
            OR Connect with
          </TextDefault>
          <BoxDefault
            gap='base10'
            display='flex'
            jcontent='center'
            aitems='center'
            marginBottom='base10'
            isGridRepeat={3}
          >
            <LinkDefault
              radius='base5'
              bgcolor='blueDark'
              bgtext='white'
              paddingX='base10'
              paddingY='base8'
            >
              Facebook
            </LinkDefault>
            <LinkDefault
              radius='base5'
              bgcolor='blueLight'
              bgtext='white'
              paddingX='base10'
              paddingY='base8'
            >
              Twiter
            </LinkDefault>
            <LinkDefault
              radius='base5'
              bgcolor='redLight'
              bgtext='white'
              paddingX='base10'
              paddingY='base8'
            >
              Google
            </LinkDefault>
          </BoxDefault>
          <LinkDefault
            paddingX='base10'
            paddingY='base8'
            jcontent='center'
            aitems='center'
            bgtext='blue'
          >
            Forgot Password?
          </LinkDefault>

          <TextDefault display='flex' aitems='center' jcontent='center'>
            Not a member yes?{' '}
            <LinkDefault
              bgtext='blue'
              width='unset'
              paddingX='base10'
              paddingY='base8'
            >
              Signin Up
            </LinkDefault>
          </TextDefault>
        </BoxDefault>
      </ContentDefault>
    </ContainerDefault>
  );
};

export { SignInPage };
