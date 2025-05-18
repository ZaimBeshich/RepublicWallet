const StyleSheet = {
  create: styles => styles,
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
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
};
