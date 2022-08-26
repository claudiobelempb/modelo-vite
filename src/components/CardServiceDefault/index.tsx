import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';
import { FaHtml5 } from 'react-icons/fa';

const CardServiceDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <BoxDefault
      isBoxShadow
      display='flex'
      direction='column'
      padding='base20'
      radius='base8'
    >
      <BoxDefault
        height='base32'
        width='base32'
        bgcolor='blue'
        textcolor='white'
        radius='base5'
        jcontent='center'
        aitems='center'
        marginBottom='base10'
        alignSelf={props.alignSelf}
      >
        <FaHtml5 />
      </BoxDefault>
      <HeadingDefault as='h3' marginBottom='base10'>
        Refreshing Disign
      </HeadingDefault>
      <TextDefault>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum nisi
        accusamus, error quis temporibus animi?
      </TextDefault>
    </BoxDefault>
  );
};

export { CardServiceDefault };
