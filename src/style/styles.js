// Blues
const Chathams = '#10437D';
const FunBlue = '#18579f';
const DownRiver = '#082749';
const CornFlower = '#52e5ff';
const Eastern = '#22beda';

// Greens
const Sushi = '#73BF43';
const Olive = '#4E9229';

// Reds
const Pomegranate = '#EF3D36';
const Thunderbird = '#D32920';

// Greys
const CodGray = '#181818';
const Silver = '#CDCDCD';
const Alto = '#DFDFDF';
const Concrete = '#F2F2F2';

export const colors = {
  primary: Chathams,
  primaryLight: FunBlue,
  primaryDark: DownRiver,
  accent: Sushi,
  accentDark: Olive,
  error: Pomegranate,
  errorDark: Thunderbird,
  headerBg: CodGray,
  textLight: Concrete,
  bgLight: Concrete,
  highlight: CornFlower,
  highlightDark: Eastern,
  border: Alto
};

const BASE = 9;
export const spacing = {
  sm: BASE / 2,
  md: BASE * 2,
  lg: BASE * 3,
  xl: BASE * 4
};

export const fonts = {
  sm: BASE / 2,
  md: BASE * 2,
  lg: BASE * 3,
  xl: BASE * 4,
  light: 'open-sans-light',
  bold: 'open-sans-bold'
};

export default { colors, spacing, fonts };
