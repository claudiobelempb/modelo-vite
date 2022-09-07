import { ImgGridEl, ImgGridSignUp } from '@assets/image';
import { BoxDefault } from '@componets/BoxDefault';
import { BrandDefault } from '@componets/BrandDefault';
import { ButtonDefault } from '@componets/ButtonDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { ImgDefault } from '@componets/ImgDefault';
import { InputDefault } from '@componets/InputDefault';
import { LinkDefault } from '@componets/LinkDefault';
import { TextDefault } from '@componets/TextDefault';
import * as Styles from './styles';
const SignUpPage: React.FC = () => {
  return (
    <Styles.SignUpPageContainer>
      <BrandDefault
        gridArea='brand'
        height='base32'
        model={1}
        src={ImgGridEl}
      />
      <BoxDefault gridArea='nav'>
        <TextDefault fontSize='base12' fontWeight='bold'>
          START FOR FREE
        </TextDefault>
      </BoxDefault>
      <BoxDefault gridArea='desc'>
        <TextDefault textAling='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum
          obcaecati iusto quia corporis nostrum.
        </TextDefault>
      </BoxDefault>
      <BoxDefault gridArea='title'>
        <HeadingDefault fontSize='base32'>
          Sign Up to Evolutive Learning
        </HeadingDefault>
      </BoxDefault>
      <BoxDefault gridArea='img' as='figure'>
        <ImgDefault src={ImgGridSignUp} />
      </BoxDefault>
      <BoxDefault gridArea='email'>
        <InputDefault
          label='Email'
          isBorder
          placeholder='Enter Your Email'
          type='email'
        />
      </BoxDefault>
      <BoxDefault gridArea='password'>
        <InputDefault
          label='Password'
          isBorder
          placeholder='Al least 8 Characters'
          type='password'
        />
      </BoxDefault>
      <BoxDefault gridArea='submit'>
        <ButtonDefault
          bgcolor='blue'
          textcolor='white'
          paddingX='base20'
          paddingY='base16'
        >
          Create an account
        </ButtonDefault>
      </BoxDefault>
      <BoxDefault gridArea='gap'>
        <ButtonDefault
          bgcolor='blueLight'
          textcolor='blueDark'
          paddingX='base20'
          paddingY='base16'
        >
          Sign Up with Google
        </ButtonDefault>
      </BoxDefault>
      <BoxDefault gridArea='p' jcontent='center' gap='base10'>
        <TextDefault width='unset'>Already have an account?</TextDefault>
        <LinkDefault width='unset' textcolor='blueDark'>
          Sign In
        </LinkDefault>
      </BoxDefault>
    </Styles.SignUpPageContainer>
  );
};

export { SignUpPage };
