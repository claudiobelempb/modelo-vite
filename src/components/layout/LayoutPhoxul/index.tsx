import {
  gridTemplateColumnsDefault,
  gridTemplateRowsDefault
} from '@assets/styles/themes/functions/gridDefault';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { ContainerDefault } from '@componets/ContainerDefault';
import { FooterPhoxul } from './ProxulFooter';
import { ProxulHeader } from './ProxulHeader';

const LayoutPhoxul: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <ContainerDefault
      gridTemplateColumnsDefault={() => gridTemplateColumnsDefault(12, 12.5)}
      gridTemplateRowsDefault={() => gridTemplateRowsDefault(9)}
    >
      <ProxulHeader />
      {props.children}
      <FooterPhoxul />
    </ContainerDefault>
  );
};

export { LayoutPhoxul };
