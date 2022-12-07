import * as Font from 'expo-font';

export default useFonts = async () => {
  await Font.loadAsync({
    PoppinsRegular: require('../assets/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/Poppins/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../assets/Poppins/Poppins-Bold.ttf'),
  });
};
