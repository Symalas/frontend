import { StatusBar } from 'expo-status-bar';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import Footer from '../../../components/FooterComponent';
import { View } from 'react-native';
import CustomButton from '../../../components/micro/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

function PasswordForgotSuccess() {
  const navigation = useNavigation();
  const route = useRoute();
  const role = route.params.role;
  const [email, setEmail] = useState();
  const sendHandler = () => {
    navigation.navigate('login', {
      role: role,
    });
  };
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Kata Sandi Baru Berhasil Dibuat!</Text>
          <View style={styles.circle}>
            <FontAwesome5
              name='check'
              size={80}
              color={Colors.white}
            />
          </View>
          <Text style={styles.msg}>
            Silahkan kembali ke halaman login untuk masuk ke akun Anda
          </Text>
          <CustomButton
            style={styles.button}
            titleStyle={styles.buttonTitle}
            title='Kembali ke halaman login'
            onPress={sendHandler}
          />
        </View>
        <Footer extraStyle={{ paddingBottom: 20 }} />
      </SafeAreaView>
    </>
  );
}

export default PasswordForgotSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenDimension.ScreenHeight,
    width: ScreenDimension.ScreenWidth,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: Colors.blue800,
    fontSize: 20,
    width: ScreenDimension.ScreenWidth - 100,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    marginTop: 50,
  },
  circle: {
    backgroundColor: Colors.primarBlue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    marginVertical: 50,
  },
  msg: {
    color: Colors.blue800,
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    textAlign: 'center',
    width: ScreenDimension.ScreenWidth - 50,
  },
  button: {
    backgroundColor: Colors.primarBlue,
    height: 45,
    width: 210,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  buttonTitle: {
    color: Colors.white,
    fontFamily: 'PoppinsBold',
    fontSize: 12,
  },
});
