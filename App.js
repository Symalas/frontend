import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreen from './screenNavigation/student/stack/MainStackScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/Poppins/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/Poppins/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </>
  );
}
