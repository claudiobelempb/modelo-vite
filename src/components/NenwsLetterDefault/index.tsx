import { BoxDefault } from '@componets/BoxDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { ContentDefault } from '@componets/ContentDefault';
import { InputDefault } from '@componets/InputDefault';

const NewsLetterDefault: React.FC = () => {
  return (
    <ContainerDefault bgcolor='blueLight'>
      <ContentDefault>
        <BoxDefault
          paddingY='base20'
          paddingX='base5'
          width='base100p'
          gap='unset'
          as='form'
          isGridRepeat={1}
        >
          <InputDefault
            radius='base5'
            textInput='redLight'
            type='email'
            placeholder='Email Address'
            paddingX='base5'
            paddingY='base10'
            colorFocus='redLight'
            width='unset'
            flexGrow={1}
          />
          <InputDefault
            radius='base5'
            bgcolor='redLight'
            bgtext='white'
            type='submit'
            placeholder='Email Address'
            paddingX='base20'
            paddingY='base10'
            width='unset'
          />
        </BoxDefault>
      </ContentDefault>
    </ContainerDefault>
  );
};

export { NewsLetterDefault };
