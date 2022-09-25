import {
  ImgClient1,
  ImgClient2,
  ImgClient3,
  ImgClient4,
  ImgContact,
  ImgDot,
  ImgHero,
  ImgMyWorks1,
  ImgMyWorks2,
  ImgMyWorks3,
  ImgMyWorks4,
  ImgMyWorks5,
  ImgMyWorks6,
  ImgMyWorks7,
  ImgMyWorks8,
  ImgMyWorks9,
  ImgNews,
  ImgPersonal
} from '@assets/image';
import { afterDefault } from '@assets/styles/themes/functions/afterDefault';
import { backgroundImgDefault } from '@assets/styles/themes/functions/backgroundImgDefault';
import { beforeDefault } from '@assets/styles/themes/functions/beforeDefault';
import {
  borderDefault,
  borderLeftDefault,
  borderRadiusDefault,
  borderTopDefault
} from '@assets/styles/themes/functions/borderDefault';
import {
  backgroundColorDefault,
  iconDefault,
  textColorDefault,
  textHoverDefault
} from '@assets/styles/themes/functions/colorDefault';
import {
  effectHoverBeforeDefault,
  effectHoverDefault
} from '@assets/styles/themes/functions/effectDefaults';
import {
  alignItemsDefault,
  alignSelfDefault,
  flexBasisDefault,
  flexDirectionDefault,
  flexGapDefault,
  flexWrapDefault,
  justifyContentDefault
} from '@assets/styles/themes/functions/flexDefault';
import {
  fontLineHeightDefault,
  fontSizeDynamicDefault,
  fontSizeStaticDefault,
  textAlignDefault,
  textTransformDefault
} from '@assets/styles/themes/functions/fontDefault';
import {
  gridColumnDefault,
  gridRowDefault,
  gridTemplateColumnsDefault,
  gridTemplateRowsDefault,
  overallDefault
} from '@assets/styles/themes/functions/gridDefault';
import {
  heightDynamicDefault,
  heightStaticDefault
} from '@assets/styles/themes/functions/heightDefault';
import {
  marginBottomDefault,
  marginTopDefault
} from '@assets/styles/themes/functions/marginDefault';
import {
  paddingBottomDefault,
  paddingDefault,
  paddingDynamicDefault,
  paddingDynamicXDefault,
  paddingDynamicYDefault,
  paddingStaticDefault,
  paddingStaticXDefault,
  paddingStaticYDefault,
  paddingTopDefault
} from '@assets/styles/themes/functions/paddingDefault';
import { positionDefault } from '@assets/styles/themes/functions/positionDefault';
import {
  displayDefault,
  overflowDefault,
  parDefault,
  zIndexDefault
} from '@assets/styles/themes/functions/utilsDefault';
import {
  widthDynamicDefault,
  widthStaticDefault
} from '@assets/styles/themes/functions/widthDefault';
import { BoxDefault } from '@componets/common/BoxDefault';
import { ContentDefault } from '@componets/common/ContentDefault';
import { HeadingDefault } from '@componets/common/HeadingDefault';
import { ImgDefault } from '@componets/common/ImgDefault';
import { LinkDefault } from '@componets/common/LinkDefault';
import { TextDefault } from '@componets/common/TextDefault';
import { LayoutPhoxul } from '@componets/layout/LayoutPhoxul';
import { ListDefault } from '@componets/ListDefault';
import {
  FaBrush,
  FaCamera,
  FaCheckCircle,
  FaLightbulb,
  FaRulerCombined,
  FaVideo
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PhoxulPage: React.FC = () => {
  return (
    <LayoutPhoxul>
      {/* ------------ Section Hero ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        as='section'
        paddingDynamicDefault={() =>
          paddingDynamicDefault({ value: 2, valueX: 12, valueY: 12 })
        }
        afterDefault={() =>
          afterDefault({
            width: 6.25,
            height: 5,
            bottom: -0.5,
            backgroundColor: 'grayDarkHsl',
            clipPath: true
          })
        }
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexBasisDefault={() => flexBasisDefault(5)}
          flexGapDefault={() => flexGapDefault({ row: 3 })}
          zIndexDefault={() => zIndexDefault(3)}
        >
          <HeadingDefault
            as='h6'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 1.5 })
            }
          >
            Welcome to
          </HeadingDefault>
          <HeadingDefault
            fontSizeDynamicDefault={() =>
              fontSizeDynamicDefault({ vstatic: 2, vdynamic: 3 })
            }
            as='h1'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textTransformDefault={() => textTransformDefault('uppercase')}
          >
            Phoxul Studio
          </HeadingDefault>
          <TextDefault
            fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
          >
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold.
          </TextDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            flexGapDefault={() => flexGapDefault({ column: 2 })}
          >
            <Link to={'/'}>
              <TextDefault
                effectHoverDefault={() =>
                  effectHoverDefault({
                    color: 'whiteHsl',
                    backgroundColor: 'transparent'
                  })
                }
                borderDefault={() => borderDefault({ color: 'whiteHsl' })}
                paddingDynamicXDefault={() =>
                  paddingDynamicXDefault({ vstatic: 1, vdynamic: 2 })
                }
                paddingDynamicYDefault={() =>
                  paddingDynamicYDefault({ vstatic: 1, vdynamic: 0.2 })
                }
                borderRadiusDefault={() =>
                  borderRadiusDefault({ width: 1, unit: 'rem' })
                }
                textColorDefault={() =>
                  textColorDefault({ color: 'grayDarkHsl' })
                }
                backgroundColorDefault={() =>
                  backgroundColorDefault('whiteHsl')
                }
              >
                My works
              </TextDefault>
            </Link>
            <Link to={'/'}>
              <TextDefault
                effectHoverDefault={() => effectHoverDefault({})}
                borderDefault={() => borderDefault({ color: 'whiteHsl' })}
                paddingDynamicXDefault={() =>
                  paddingDynamicXDefault({ vstatic: 1, vdynamic: 2 })
                }
                paddingDynamicYDefault={() =>
                  paddingDynamicYDefault({ vstatic: 1, vdynamic: 0.2 })
                }
                borderRadiusDefault={() =>
                  borderRadiusDefault({ width: 1, unit: 'rem' })
                }
                textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              >
                Contact
              </TextDefault>
            </Link>
          </BoxDefault>
        </BoxDefault>

        <ImgDefault
          positionDefault={() =>
            positionDefault({
              position: 'absolute',
              zIndex: 1,
              left: 5,
              width: 9,
              height: 10,
              transformX: true,
              translate: -5
            })
          }
          src={ImgHero}
          alt='Phoxul Studio'
        />
      </ContentDefault>

      {/* ------------ Section Personal ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        as='section'
        paddingDynamicDefault={() =>
          paddingDynamicDefault({ value: 2, valueX: 12, valueY: 12 })
        }
        flexGapDefault={() => flexGapDefault({ row: 10 })}
        flexWrapDefault={() => flexWrapDefault('wrap')}
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexBasisDefault={() => flexBasisDefault(5)}
          alignItemsDefault={() => alignItemsDefault('center')}
          justifyContentDefault={() => justifyContentDefault('center')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
        >
          <HeadingDefault
            as='h2'
            textColorDefault={() => textColorDefault({ color: 'blackHsl' })}
            fontSizeDynamicDefault={() =>
              fontSizeDynamicDefault({ vstatic: 1, vdynamic: 1.5 })
            }
            fontLineHeightDefault={() => fontLineHeightDefault('160%')}
          >
            Hello, I'm Martin Dow, a professional photographer based in USA
          </HeadingDefault>
          <TextDefault
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 1.5 })
            }
            fontLineHeightDefault={() => fontLineHeightDefault('160%')}
            textColorDefault={() => textColorDefault({ color: 'grayDarkHsl' })}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem reiciendis officiis quis quasi corporis possimus
            obcaecati alias esse! Animi voluptates reiciendis repudiandae
            assumenda! Ex, ab.
          </TextDefault>

          <BoxDefault
            as='ul'
            displayDefault={() => displayDefault('flex')}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
          >
            <BoxDefault
              displayDefault={() => displayDefault('flex')}
              flexGapDefault={() => flexGapDefault({ column: 2 })}
              alignItemsDefault={() => alignItemsDefault('center')}
              textColorDefault={() =>
                textColorDefault({ color: 'grayDarkHsl' })
              }
              iconDefault={() => iconDefault({ color: 'blackHsl', size: 3.2 })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              <FaCheckCircle />
              Over 7 Years of Experience
            </BoxDefault>
            <BoxDefault
              displayDefault={() => displayDefault('flex')}
              flexGapDefault={() => flexGapDefault({ column: 2 })}
              alignItemsDefault={() => alignItemsDefault('center')}
              textColorDefault={() =>
                textColorDefault({ color: 'grayDarkHsl' })
              }
              iconDefault={() => iconDefault({ color: 'blackHsl', size: 3.2 })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              <FaCheckCircle /> 200+ Successfully Executed Projets
            </BoxDefault>
            <BoxDefault
              displayDefault={() => displayDefault('flex')}
              flexGapDefault={() => flexGapDefault({ column: 2 })}
              alignItemsDefault={() => alignItemsDefault('center')}
              textColorDefault={() =>
                textColorDefault({ color: 'grayDarkHsl' })
              }
              iconDefault={() => iconDefault({ color: 'blackHsl', size: 3.2 })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              <FaCheckCircle /> Exceptional Work Quality
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>

        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexBasisDefault={() => flexBasisDefault(5)}
          alignItemsDefault={() => alignItemsDefault('flex-end')}
          justifyContentDefault={() => justifyContentDefault('center')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
        >
          <ImgDefault
            displayDefault={() => displayDefault('flex')}
            alignItemsDefault={() => alignItemsDefault('flex-end')}
            justifyContentDefault={() => justifyContentDefault('center')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            zIndexDefault={() => zIndexDefault(1)}
            heightDynamicDefault={() =>
              heightDynamicDefault({ rem: 5, unit: '%' })
            }
            widthDynamicDefault={() =>
              widthDynamicDefault({ vw: 5, unit: '%' })
            }
            beforeDefault={() =>
              beforeDefault({
                top: -0.4,
                left: -0.4,
                width: 5,
                height: 5,
                backgroundImg: ImgDot,
                transform: 'none',
                transitionProperty: 'none'
              })
            }
            afterDefault={() =>
              afterDefault({
                top: 1.6,
                right: 0,
                left: 1.6,
                width: 5,
                height: 5,
                backgroundColor: 'grayDarkHsl',
                transform: 'none',
                transitionProperty: 'none'
              })
            }
            effectHoverDefault={() =>
              effectHoverDefault({
                element: 'img',
                transformValue: [0.95],
                transform: 'scale',
                transitionProperty: 'all',
                transitionDuration: 0.6,
                transitionTimingFunction: 'ease-in-out'
              })
            }
            src={ImgPersonal}
            alt="Hello, I'm Martin Dow, a professional photographer based in USA"
          />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Service ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        as='section'
        backgroundColorDefault={() => backgroundColorDefault('grayHsl')}
        paddingDynamicDefault={() =>
          paddingDynamicDefault({ value: 2, valueX: 12, valueY: 12 })
        }
        flexDirectionDefault={() => flexDirectionDefault('column')}
        flexGapDefault={() => flexGapDefault({ row: 4 })}
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 4 })}
        >
          <HeadingDefault
            textAlignDefault={() => textAlignDefault('center')}
            as='h2'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            paddingDefault={() =>
              paddingDefault({ type: 'padding', vs: 0.5, vd: 2, hs: 2, hd: 3 })
            }
            fontSizeDynamicDefault={() =>
              fontSizeDynamicDefault({ vstatic: 1, vdynamic: 1.5 })
            }
          >
            My Services
          </HeadingDefault>
          <TextDefault
            textAlignDefault={() => textAlignDefault('center')}
            fontLineHeightDefault={() => fontLineHeightDefault('160%')}
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 1.5 })
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            tempore{' '}
            <span>
              quidem reprehenderit. Provident excepturi odio aspernatur
            </span>
          </TextDefault>
        </BoxDefault>
        <BoxDefault
          displayDefault={() => displayDefault('grid')}
          textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          flexGapDefault={() => flexGapDefault({ row: 6, column: 6 })}
          gridTemplateColumnsDefault={() => gridTemplateColumnsDefault(2)}
        >
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-top',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaCamera />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Photography
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-bottom',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaVideo />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Videography
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-top',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaBrush />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Photo Retouching
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-bottom',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaCamera />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Aerial Photography
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-top',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaLightbulb />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Lighting Setup
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            iconDefault={() => iconDefault({ color: 'whiteHsl', size: 3.2 })}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            flexGapDefault={() => flexGapDefault({ row: 2 })}
            paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 3 })}
            parDefault={() =>
              parDefault({
                element: 'border-bottom',
                vstatic: 1,
                color: 'whiteHsl'
              })
            }
          >
            <FaRulerCombined />
            <HeadingDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              as='h3'
            >
              Video Color Grading
            </HeadingDefault>
            <TextDefault
              textColorDefault={() =>
                textColorDefault({ color: 'grayLightHsl' })
              }
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 1.5 })
              }
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, debitis!
            </TextDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Latest News ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        as='section'
        paddingDynamicDefault={() =>
          paddingDynamicDefault({ value: 2, valueX: 12, valueY: 12 })
        }
        flexDirectionDefault={() => flexDirectionDefault('column')}
        flexGapDefault={() => flexGapDefault({ row: 4 })}
      >
        <BoxDefault
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 4 })}
        >
          <HeadingDefault
            as='h2'
            paddingBottomDefault={() => paddingBottomDefault({ vstatic: 2 })}
            marginBottomDefault={() => marginBottomDefault({ vstatic: 2 })}
            fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
            textColorDefault={() => textColorDefault({ color: 'grayDarkHsl' })}
            afterDefault={() =>
              afterDefault({
                top: 8,
                backgroundColor: 'grayDarkHsl',
                width: 5,
                height: 0.1
              })
            }
          >
            Latest News
          </HeadingDefault>
          <TextDefault
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 1.5 })
            }
            textColorDefault={() => textColorDefault({ color: 'grayRgba' })}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, velit!
          </TextDefault>
        </BoxDefault>

        <BoxDefault
          as='article'
          gridTemplateColumnsDefault={() => gridTemplateColumnsDefault(6, 0)}
          gridTemplateRowsDefault={() => gridTemplateRowsDefault(8)}
        >
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            zIndexDefault={() => zIndexDefault(1)}
            flexDirectionDefault={() => flexDirectionDefault('column')}
            gridColumnDefault={() =>
              gridColumnDefault({ start: 1, span: 'span', end: 3 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 3, span: 'span', end: 4 })
            }
            flexGapDefault={() => flexGapDefault({ row: 3 })}
            backgroundColorDefault={() => backgroundColorDefault('whiteHsl')}
            paddingStaticDefault={() =>
              paddingStaticDefault({ valueX: 3, valueY: 3 })
            }
          >
            <Link to={'/'}>
              <TextDefault
                alignSelfDefault={() => alignSelfDefault('flex-start')}
                backgroundColorDefault={() =>
                  backgroundColorDefault('grayDarkHsl')
                }
                textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
                paddingStaticXDefault={() =>
                  paddingStaticXDefault({
                    vstatic: 1,
                    vdynamic: 2
                  })
                }
                paddingStaticYDefault={() =>
                  paddingStaticYDefault({
                    vstatic: 1,
                    vdynamic: 2
                  })
                }
              >
                Resources
              </TextDefault>
            </Link>
            <HeadingDefault
              as='h3'
              textColorDefault={() =>
                textColorDefault({ color: 'grayDarkHsl' })
              }
              paddingTopDefault={() => paddingTopDefault({ vstatic: 2 })}
              marginTopDefault={() => marginTopDefault({ vstatic: 2 })}
              fontLineHeightDefault={() => fontLineHeightDefault('160%')}
            >
              Cosina announces its fastest full-frame lens
            </HeadingDefault>
            <TextDefault
              fontLineHeightDefault={() => fontLineHeightDefault('160%')}
              fontSizeStaticDefault={() =>
                fontSizeStaticDefault({ vstatic: 2 })
              }
              textColorDefault={() => textColorDefault({ color: 'grayRgba' })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis quas doloribus.
            </TextDefault>
            <BoxDefault
              justifyContentDefault={() =>
                justifyContentDefault('space-between')
              }
              alignItemsDefault={() => alignItemsDefault('center')}
              paddingTopDefault={() => paddingTopDefault({ vstatic: 2 })}
              marginTopDefault={() => marginTopDefault({ vstatic: 2 })}
              displayDefault={() => displayDefault('flex')}
              borderTopDefault={() =>
                borderTopDefault({
                  color: 'grayHsla'
                })
              }
            >
              <Link to={'/'}>
                <TextDefault
                  textAlignDefault={() => textAlignDefault('center')}
                  paddingStaticXDefault={() =>
                    paddingStaticXDefault({
                      vstatic: 1,
                      vdynamic: 2
                    })
                  }
                  paddingStaticYDefault={() =>
                    paddingStaticYDefault({
                      vstatic: 1,
                      vdynamic: 2
                    })
                  }
                  beforeDefault={() =>
                    beforeDefault({
                      top: 6,
                      left: 0.6,
                      width: 5,
                      height: 0.1,
                      backgroundColor: 'grayDarkHsl',
                      transitionProperty: 'transform',
                      transform: 'scale',
                      transitionValue: [0],
                      transformOrigin: 'right'
                    })
                  }
                  effectHoverBeforeDefault={() =>
                    effectHoverBeforeDefault({
                      transitionProperty: 'transform',
                      transitionTimingFunction: 'ease-in-out',
                      transform: 'scale',
                      transformValue: [1],
                      transformOrigin: 'left'
                    })
                  }
                >
                  Read More
                </TextDefault>
              </Link>
              <TextDefault
                textColorDefault={() => textColorDefault({ color: 'grayRgba' })}
                textAlignDefault={() => textAlignDefault('right')}
                fontSizeStaticDefault={() =>
                  fontSizeStaticDefault({ vstatic: 1.5 })
                }
              >
                20 Oct, 2035
              </TextDefault>
            </BoxDefault>
          </BoxDefault>

          <ImgDefault
            overflowDefault={() => overflowDefault('hidden')}
            gridColumnDefault={() =>
              gridColumnDefault({ start: 3, span: '', end: -1 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 1, span: '', end: -1 })
            }
            src={ImgNews}
            effectHoverDefault={() =>
              effectHoverDefault({
                transformValue: [0.95],
                transform: 'scale',
                transitionProperty: 'all',
                transitionDuration: 0.6,
                transitionTimingFunction: 'ease-in-out'
              })
            }
          />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Works ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        flexDirectionDefault={() => flexDirectionDefault('column')}
        as='section'
        paddingDefault={() =>
          paddingDefault({ type: 'padding', vs: 2, vd: 12, hs: 2, hd: 12 })
        }
        textColorDefault={() => textColorDefault({ color: 'grayHsl' })}
        backgroundColorDefault={() => backgroundColorDefault('blackHsl')}
      >
        <HeadingDefault
          as='h2'
          paddingBottomDefault={() => paddingBottomDefault({ vstatic: 3 })}
          fontSizeDynamicDefault={() =>
            fontSizeDynamicDefault({ vstatic: 1, vdynamic: 1.5 })
          }
          textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
          afterDefault={() =>
            afterDefault({
              top: 8,
              backgroundColor: 'whiteHsl',
              width: 3.125,
              height: 0.1
            })
          }
        >
          My Works
        </HeadingDefault>
        <ListDefault
          textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
          paddingStaticYDefault={() => paddingStaticYDefault({ vstatic: 2 })}
        >
          <LinkDefault
            isActive
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            All
          </LinkDefault>
          <LinkDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            Pessonal
          </LinkDefault>
          <LinkDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            Wedding
          </LinkDefault>
          <LinkDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            Event
          </LinkDefault>
          <LinkDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            Fashion
          </LinkDefault>
          <LinkDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
          >
            Product
          </LinkDefault>
        </ListDefault>
        <BoxDefault
          gridTemplateColumnsDefault={() => gridTemplateColumnsDefault(3)}
          gridTemplateRowsDefault={() => gridTemplateRowsDefault(4)}
          flexGapDefault={() => flexGapDefault({ row: 2, column: 2 })}
        >
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 1, span: '', end: 2 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 1, span: '', end: 3 })
            }
            src={ImgMyWorks1}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 2, span: '', end: 3 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 1, span: '', end: 2 })
            }
            src={ImgMyWorks2}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 3, span: '', end: 4 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 1, span: '', end: 3 })
            }
            src={ImgMyWorks3}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 1, span: '', end: 2 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 3, span: '', end: 4 })
            }
            src={ImgMyWorks4}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 2, span: '', end: 3 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 2, span: '', end: 4 })
            }
            src={ImgMyWorks5}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 3, span: '', end: 4 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 3, span: '', end: 4 })
            }
            src={ImgMyWorks6}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 1, span: '', end: 2 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 4, span: '', end: 5 })
            }
            src={ImgMyWorks7}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 2, span: '', end: 3 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 4, span: '', end: 5 })
            }
            src={ImgMyWorks8}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
          <ImgDefault
            gridColumnDefault={() =>
              gridColumnDefault({ start: 3, span: '', end: 4 })
            }
            gridRowDefault={() =>
              gridRowDefault({ start: 4, span: '', end: 5 })
            }
            src={ImgMyWorks9}
            beforeDefault={() =>
              beforeDefault({
                zIndex: 1,
                width: 6.25,
                height: 6.25,
                backgroundColor: 'grayRgba',
                transformOrigin: 'unset'
              })
            }
            effectHoverBeforeDefault={() =>
              effectHoverBeforeDefault({
                transitionDuration: 0.25,
                transitionTimingFunction: 'ease-in-out',
                transitionProperty: 'all',
                transformOrigin: 'unset',
                backgroundColor: 'transparent'
              })
            }
          />
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Profissional ----------- */}
      <ContentDefault
        overallDefault={() => overallDefault()}
        as='section'
        paddingDefault={() =>
          paddingDefault({ type: 'padding', vs: 2, vd: 12, hs: 2, hd: 12 })
        }
        textColorDefault={() => textColorDefault({ color: 'grayHsl' })}
        justifyContentDefault={() => justifyContentDefault('space-between')}
        alignItemsDefault={() => alignItemsDefault('flex-start')}
        flexGapDefault={() => flexGapDefault({ row: 2 })}
        backgroundImgDefault={() =>
          backgroundImgDefault({
            position: 'relative',
            width: 10,
            height: 10,
            backgroundColor: 'transparent',
            backgroundImg: ImgHero,
            backgroundAttachment: 'fixed'
          })
        }
        flexWrapDefault={() => flexWrapDefault('wrap')}
      >
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexGapDefault={() => flexGapDefault({ row: 2 })}
          flexBasisDefault={() => flexBasisDefault(5)}
        >
          <HeadingDefault
            as='h2'
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 2.5 })
            }
            fontLineHeightDefault={() => fontLineHeightDefault('160%')}
          >
            Need help with professional photography? Let's work together!
          </HeadingDefault>
          <Link to={'/'}>
            <TextDefault
              textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
              textHoverDefault={() => textHoverDefault({ color: 'whiteHsl' })}
              widthStaticDefault={() =>
                widthStaticDefault({ vw: 'max-content' })
              }
              paddingStaticXDefault={() =>
                paddingStaticXDefault({ vstatic: 3 })
              }
              paddingStaticYDefault={() =>
                paddingStaticYDefault({ vstatic: 1 })
              }
              borderDefault={() =>
                borderDefault({
                  type: 'border',
                  width: 1,
                  unit: 'px',
                  style: 'solid',
                  color: 'whiteHsl'
                })
              }
              borderRadiusDefault={() =>
                borderRadiusDefault({ type: 'radius', width: 1, unit: 'rem' })
              }
              effectHoverDefault={() => effectHoverDefault({})}
            >
              Contact Me
            </TextDefault>
          </Link>
        </BoxDefault>
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          flexGapDefault={() => flexGapDefault({ row: 4 })}
          backgroundColorDefault={() =>
            backgroundImgDefault({
              position: 'relative',
              width: 10,
              height: 10,
              backgroundColor: 'whiteHsl'
            })
          }
          flexDirectionDefault={() => flexDirectionDefault('column')}
          flexBasisDefault={() => flexBasisDefault(4)}
          paddingStaticDefault={() =>
            paddingStaticDefault({ valueX: 4, valueY: 4 })
          }
        >
          <TextDefault
            fontLineHeightDefault={() => fontLineHeightDefault('160%')}
            textColorDefault={() => textColorDefault({ color: 'grayRgba' })}
            paddingDefault={() =>
              paddingDefault({ type: 'left', hs: 3, hd: 3 })
            }
            fontSizeStaticDefault={() =>
              fontSizeStaticDefault({ vstatic: 1.5 })
            }
            borderLeftDefault={() =>
              borderLeftDefault({
                color: 'grayRgba'
              })
            }
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            dicta error. Eum illum amet ducimus eius ex odio animi consectetur
            ad maxime. Placeat, eum iure.a
          </TextDefault>
          <BoxDefault
            displayDefault={() => displayDefault('flex')}
            alignItemsDefault={() => alignItemsDefault('center')}
            flexGapDefault={() => flexGapDefault({ column: 2 })}
          >
            <ImgDefault
              widthStaticDefault={() => widthStaticDefault({ rem: 1 })}
              heightStaticDefault={() => heightStaticDefault({ rem: 0.6 })}
              src={ImgContact}
              borderRadiusDefault={() =>
                borderRadiusDefault({ type: 'radius', width: 5, unit: '%' })
              }
            />
            <BoxDefault
              displayDefault={() => displayDefault('flex')}
              flexDirectionDefault={() => flexDirectionDefault('column')}
            >
              <TextDefault
                fontLineHeightDefault={() => fontLineHeightDefault('160%')}
              >
                James Brown
              </TextDefault>
              <TextDefault
                fontSizeStaticDefault={() =>
                  fontSizeStaticDefault({ vstatic: 1 })
                }
                fontLineHeightDefault={() => fontLineHeightDefault('160%')}
                textColorDefault={() => textColorDefault({ color: 'grayRgba' })}
              >
                CEO, ColorImage
              </TextDefault>
            </BoxDefault>
          </BoxDefault>
        </BoxDefault>
      </ContentDefault>

      {/* ------------ Section Clients ----------- */}
      <ContentDefault
        as='section'
        overallDefault={() => overallDefault()}
        backgroundColorDefault={() => backgroundColorDefault('blackHsl')}
        paddingDynamicXDefault={() =>
          paddingDynamicXDefault({ vstatic: 2, vdynamic: 12, unit: 'vw' })
        }
        textColorDefault={() => textColorDefault({ color: 'grayHsl' })}
        heightDynamicDefault={() =>
          heightDynamicDefault({ rem: 0.5, unit: 'vw' })
        }
      >
        <ImgDefault src={ImgClient1} />
        <ImgDefault src={ImgClient2} />
        <ImgDefault src={ImgClient3} />
        <ImgDefault src={ImgClient4} />
      </ContentDefault>
    </LayoutPhoxul>
  );
};
export { PhoxulPage };
