export type FlexType = {
  isFlex?: boolean;
  height?: string;
  garea?: string;
  fjcontent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'self-end + ... safe'
    | 'unsafe';
  fdirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  fwrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  fflow?: 'column wrap';
  forder?: number;
  fgrow?: number;
  fshrink?: number;
  faitems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline '
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end + ... safe'
    | 'unsafe';
  faself?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  facontent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline + ... safe'
    | 'unsafe';
  gap?: number;
  rgap?: number;
  cgap?: number;
};
