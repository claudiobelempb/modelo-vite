import { BoxDefault } from '@componets/BoxDefault';
import { HeadingDefault } from '@componets/HeadingDefault';
import { TextDefault } from '@componets/TextDefault';

type CardPostDefaultProps = {
  title?: string;
  description?: string;
  date?: string;
  src?: string;
};

const CardPostDefault: React.FC<CardPostDefaultProps> = ({
  title,
  description,
  date,
  src
}) => {
  return (
    <BoxDefault as='article' display='flex' direction='column'>
      <img loading='lazy' src={src} alt='presentation' />
      <TextDefault
        bgcolor='purple'
        paddingY='base10'
        paddingX='base20'
        radius='base5'
        marginTop='base20'
        bgtext='white'
        display='inline-flex'
        width='maxContent'
      >
        {date}
      </TextDefault>
      <HeadingDefault marginBottom='base32' as='h2' fontSize='base32'>
        {title}
      </HeadingDefault>
      <TextDefault>{description}</TextDefault>
    </BoxDefault>
  );
};

export { CardPostDefault };
