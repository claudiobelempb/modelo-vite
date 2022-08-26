import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { BoxDefault } from '@componets/BoxDefault';
import { TextDefault } from '@componets/TextDefault';

const CardPesonalInfo: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <BoxDefault
      display='flex'
      jcontent='center'
      aitems='center'
      gap='base10'
      paddingY='base36'
      paddingX='base48'
    >
      <BoxDefault width='base100r' height='base100r' isImgRadius>
        <img src={props.src} alt='' />
      </BoxDefault>
      <BoxDefault direction='column'>
        <TextDefault bgtext='title' fontWeight='bold'>
          {props.title}
        </TextDefault>
        <TextDefault bgtext='grayRgba' isUppercase>
          {props.description}
        </TextDefault>
      </BoxDefault>
    </BoxDefault>
  );
};

export { CardPesonalInfo };
