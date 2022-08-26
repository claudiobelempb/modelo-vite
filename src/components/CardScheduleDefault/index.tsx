import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';

const CardScheduleDefault: React.FC = () => {
  return (
    <BoxDefault
      bgcolor='redLight'
      textcolor='white'
      radius='base10'
      padding='base10'
      display='flex'
      gap='base20'
    >
      <BoxDefault>
        <HeadingDefault
          fontSize='base32'
          fontWeight='bold'
          marginY='base20'
          as='h2'
        >
          Hiking
        </HeadingDefault>
        <TextDefault>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ab.
        </TextDefault>
      </BoxDefault>

      <TextDefault
        width='unset'
        alignSelf='flexStart'
        flexShrink='base0'
        bgcolor='purple'
        radius='base20'
        padding='base10'
        jcontent='center'
        aitems='center'
        marginY='base10'
        as='span'
      >
        5:00 AM
      </TextDefault>
    </BoxDefault>
  );
};

export { CardScheduleDefault };
