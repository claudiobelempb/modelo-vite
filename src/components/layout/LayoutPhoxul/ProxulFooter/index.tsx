import { ImgFooter } from '@assets/image';
import {
  borderBottomDefault,
  borderDefault,
  borderRadiusBottomLeftDefault,
  borderRadiusBottomRightDefault,
  borderRadiusTopLeftDefault,
  borderRadiusTopRightDefault,
  borderRightDefault,
  borderTopDefault
} from '@assets/styles/themes/functions/borderDefault';
import {
  backgroundColorDefault,
  backgroundLinearGradientDefault,
  iconDefault,
  textColorDefault
} from '@assets/styles/themes/functions/colorDefault';
import {
  alignItemsDefault,
  flexBasisDefault,
  flexDirectionDefault,
  flexGapDefault,
  flexGrowDefault,
  justifyContentDefault
} from '@assets/styles/themes/functions/flexDefault';
import {
  fontLineHeightDefault,
  fontSizeStaticDefault
} from '@assets/styles/themes/functions/fontDefault';
import { overallDefault } from '@assets/styles/themes/functions/gridDefault';
import { heightDynamicDefault } from '@assets/styles/themes/functions/heightDefault';
import { marginDefault } from '@assets/styles/themes/functions/marginDefault';
import {
  paddingBottomDefault,
  paddingDynamicDefault,
  paddingRightDefault,
  paddingStaticXDefault,
  paddingStaticYDefault,
  paddingTopDefault
} from '@assets/styles/themes/functions/paddingDefault';
import { displayDefault } from '@assets/styles/themes/functions/utilsDefault';
import { BoxDefault } from '@componets/common/BoxDefault';
import { ButtonDefault } from '@componets/common/ButtonDefault';
import { ContentDefault } from '@componets/common/ContentDefault';
import { HeadingDefault } from '@componets/common/HeadingDefault';
import { InputDefault } from '@componets/common/InputDefault';
import { TextDefault } from '@componets/common/TextDefault';
import {
  FaAddressCard,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterPhoxul: React.FC = () => {
  return (
    <ContentDefault
      overallDefault={() => overallDefault()}
      displayDefault={() => displayDefault('flex')}
      flexDirectionDefault={() => flexDirectionDefault('column')}
      flexGapDefault={() => flexGapDefault({ row: 4 })}
      as='footer'
      backgroundLinearGradientDefault={() =>
        backgroundLinearGradientDefault({
          colorPrimary: 'blackHsl',
          colorSecondary: 'grayHsla',
          urlImg: ImgFooter
        })
      }
      paddingDynamicDefault={() =>
        paddingDynamicDefault({ value: 2, valueX: 12, valueY: 12 })
      }
    >
      <BoxDefault
        displayDefault={() => displayDefault('flex')}
        flexGapDefault={() => flexGapDefault({ column: 2 })}
        alignItemsDefault={() => alignItemsDefault('center')}
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexBasisDefault={() => flexBasisDefault(5)}
        >
          <HeadingDefault
            as='h2'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 2.5 })
            }
            marginDefault={() => marginDefault({ type: 'bottom', vs: 1 })}
          >
            Sign up to get latest update
          </HeadingDefault>
          <TextDefault
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Sign up for our monthly newsletter for the latest news & articles
          </TextDefault>
        </BoxDefault>
        <BoxDefault
          as='form'
          displayDefault={() => displayDefault('flex')}
          heightDynamicDefault={() =>
            heightDynamicDefault({ rem: 0.5, unit: 'vh' })
          }
          flexBasisDefault={() => flexBasisDefault(5)}
        >
          <InputDefault
            flexGrowDefault={() => flexGrowDefault(2)}
            type='email'
            borderDefault={() =>
              borderDefault({ color: 'grayLightHsl', width: 1 })
            }
            borderRadiusTopLeftDefault={() => borderRadiusTopLeftDefault({})}
            borderRadiusBottomLeftDefault={() =>
              borderRadiusBottomLeftDefault({})
            }
            placeholder='Enter Your Email'
            paddingStaticXDefault={() =>
              paddingStaticXDefault({
                vstatic: 1,
                vdynamic: 1.5
              })
            }
            paddingStaticYDefault={() =>
              paddingStaticYDefault({
                vstatic: 1,
                vdynamic: 1.5
              })
            }
          />
          <ButtonDefault
            borderRadiusTopRightDefault={() => borderRadiusTopRightDefault({})}
            borderRadiusBottomRightDefault={() =>
              borderRadiusBottomRightDefault({})
            }
            backgroundColorDefault={() => backgroundColorDefault('whiteHsl')}
            paddingStaticXDefault={() =>
              paddingStaticXDefault({
                vstatic: 1,
                vdynamic: 1.5
              })
            }
            paddingStaticYDefault={() =>
              paddingStaticYDefault({
                vstatic: 1,
                vdynamic: 1.5
              })
            }
          >
            Subscribe Now
          </ButtonDefault>
        </BoxDefault>
      </BoxDefault>

      <BoxDefault
        displayDefault={() => displayDefault('flex')}
        flexGapDefault={() => flexGapDefault({ row: 4, column: 4 })}
        borderTopDefault={() => borderTopDefault({ color: 'grayDarkHsl' })}
        borderBottomDefault={() =>
          borderBottomDefault({ color: 'grayDarkHsl' })
        }
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          alignItemsDefault={() => alignItemsDefault('center')}
        >
          <BoxDefault
            borderRightDefault={() =>
              borderRightDefault({ color: 'grayDarkHsl' })
            }
            paddingTopDefault={() => paddingTopDefault({ vstatic: 3 })}
            paddingRightDefault={() => paddingRightDefault({ vstatic: 3 })}
            paddingBottomDefault={() => paddingBottomDefault({ vstatic: 3 })}
            displayDefault={() => displayDefault('flex')}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
          >
            <Link to={'/'}>
              <TextDefault
                textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
                fontSizeStaticDefault={() =>
                  fontSizeStaticDefault({ vstatic: 2 })
                }
              >
                Phoxul
              </TextDefault>
            </Link>
            <TextDefault
              fontLineHeightDefault={() => fontLineHeightDefault('160%')}
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate velit magnam doloribus reiciendis
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
        <BoxDefault
          borderRightDefault={() =>
            borderRightDefault({ color: 'grayDarkHsl' })
          }
          paddingTopDefault={() => paddingTopDefault({ vstatic: 3 })}
          paddingRightDefault={() => paddingRightDefault({ vstatic: 3 })}
          paddingBottomDefault={() => paddingBottomDefault({ vstatic: 3 })}
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
        >
          <HeadingDefault
            as='h3'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
          >
            Quick Links
          </HeadingDefault>
          <BoxDefault
            as='ul'
            displayDefault={() => displayDefault('flex')}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
          >
            <Link to={'/'}>
              <TextDefault
                textColorDefault={() =>
                  textColorDefault({ color: 'grayLightHsl' })
                }
              >
                About
              </TextDefault>
            </Link>
            <Link to={'/'}>
              <TextDefault
                textColorDefault={() =>
                  textColorDefault({ color: 'grayLightHsl' })
                }
              >
                Services
              </TextDefault>
            </Link>
            <Link to={'/'}>
              <TextDefault
                textColorDefault={() =>
                  textColorDefault({ color: 'grayLightHsl' })
                }
              >
                Works
              </TextDefault>
            </Link>
            <Link to={'/'}>
              <TextDefault
                textColorDefault={() =>
                  textColorDefault({ color: 'grayLightHsl' })
                }
              >
                Blog
              </TextDefault>
            </Link>
          </BoxDefault>
        </BoxDefault>
        <BoxDefault
          paddingTopDefault={() => paddingTopDefault({ vstatic: 3 })}
          paddingRightDefault={() => paddingRightDefault({ vstatic: 3 })}
          paddingBottomDefault={() => paddingBottomDefault({ vstatic: 3 })}
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
        >
          <HeadingDefault
            as='h3'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
          >
            Contact
          </HeadingDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
          >
            <TextDefault
              iconDefault={() => iconDefault({ size: 1.5 })}
              displayDefault={() => displayDefault('flex')}
              alignItemsDefault={() => alignItemsDefault('center')}
              flexGapDefault={() => flexGapDefault({ row: 2, column: 2 })}
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaPhone /> +93 123 456 7890
            </TextDefault>
            <TextDefault
              iconDefault={() => iconDefault({ size: 1.5 })}
              displayDefault={() => displayDefault('flex')}
              alignItemsDefault={() => alignItemsDefault('center')}
              flexGapDefault={() => flexGapDefault({ row: 2, column: 2 })}
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaEnvelope /> el@el.cool
            </TextDefault>
            <TextDefault
              iconDefault={() => iconDefault({ size: 1.5 })}
              displayDefault={() => displayDefault('flex')}
              alignItemsDefault={() => alignItemsDefault('center')}
              flexGapDefault={() => flexGapDefault({ row: 2, column: 2 })}
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaAddressCard /> 177A Bleecker Street, NYC, USA
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
      </BoxDefault>
      <BoxDefault
        displayDefault={() => displayDefault('flex')}
        alignItemsDefault={() => alignItemsDefault('center')}
      >
        <BoxDefault>
          <TextDefault
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Muslim Helalee. All Rights Reserved
          </TextDefault>
        </BoxDefault>
        <BoxDefault
          as='ul'
          displayDefault={() => displayDefault('flex')}
          justifyContentDefault={() => justifyContentDefault('flex-end')}
          flexGapDefault={() => flexGapDefault({ column: 2 })}
        >
          <Link to={'/'}>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaFacebook />
            </TextDefault>
          </Link>
          <Link to={'/'}>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaTwitter />
            </TextDefault>
          </Link>
          <Link to={'/'}>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaLinkedin />
            </TextDefault>
          </Link>
          <Link to={'/'}>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
            >
              <FaDribbble />
            </TextDefault>
          </Link>
        </BoxDefault>
      </BoxDefault>
    </ContentDefault>
  );
};

export { FooterPhoxul };
