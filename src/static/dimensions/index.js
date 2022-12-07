import { Dimensions } from 'react-native';

const ScreenDimension = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,
};

export default ScreenDimension;
