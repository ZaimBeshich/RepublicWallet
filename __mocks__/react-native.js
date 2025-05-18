const StyleSheet = {
  create: styles => styles,
  flatten: style => style,
  compose: (style1, style2) => ({...style1, ...style2}),
};

const Platform = {
  OS: 'ios',
  select: obj => obj.ios,
};

const Dimensions = {
  get: () => ({
    width: 375,
    height: 812,
  }),
};

const PixelRatio = {
  get: () => 2,
  roundToNearestPixel: size => Math.round(size),
};

const Animated = {
  createAnimatedComponent: component => component,
  Value: jest.fn(),
  timing: jest.fn(),
  spring: jest.fn(),
  View: 'Animated.View',
  Text: 'Animated.Text',
};

const requireNativeComponent = name => name;

const View = 'View';
const Text = 'Text';
const TouchableOpacity = 'TouchableOpacity';
const Image = 'Image';
const ScrollView = 'ScrollView';
const TextInput = 'TextInput';

module.exports = {
  StyleSheet,
  Platform,
  Dimensions,
  PixelRatio,
  Animated,
  requireNativeComponent,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
};
