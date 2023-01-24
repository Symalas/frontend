import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import Footer from '../../../components/FooterComponent';
import { View } from 'react-native';
import CustomButton from '../../../components/micro/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function PasswordForgot() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const route = useRoute();
  const role = route.params.role;

  const localInputRef = useRef();

  const keyboardDidHideCallback = () => {
    localInputRef.current.blur?.();
  };

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback,
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);
  const sendHandler = () => {
    navigation.navigate('forgotSuccess', {
      email: email,
      role: role,
    });
  };
  return (
    <>
      <StatusBar style='dark' />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Buat Kata Sandi Baru</Text>
            <View style={styles.circle}>
              <Image
                style={styles.img}
                source={require('../../../../assets/change.png')}
              />
            </View>
            <Text style={styles.msg}>
              Masukkan kata sandi baru untuk akun Anda
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Password Baru Anda</Text>
            <TextInput
              style={styles.input}
              placeholder='********'
              keyboardType='default'
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Konfirmasi Password Baru Anda</Text>
            <TextInput
              style={styles.input}
              placeholder='********'
              keyboardType='default'
              secureTextEntry={true}
              autoCapitalize='none'
              ref={(ref) => {
                localInputRef && (localInputRef.current = ref);
              }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={sendHandler}
              activeOpacity={0.7}
            >
              <CustomButton
                style={styles.button}
                titleStyle={styles.buttonTitle}
                title='Kirim'
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Footer extraStyle={{ paddingBottom: 20 }} />
      </KeyboardAwareScrollView>
    </>
  );
}

export default PasswordForgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenDimension.ScreenHeight,
    width: ScreenDimension.ScreenWidth,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    color: Colors.blue800,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
  circle: {
    backgroundColor: Colors.primarBlue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    marginVertical: 20,
  },
  img: {
    height: 70,
    width: 80,
    marginLeft: 5,
  },
  msg: {
    color: Colors.blue800,
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    textAlign: 'center',
    width: 300,
  },
  formContainer: {
    paddingHorizontal: 50,
    marginTop: 20,
  },
  label: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
  },
  input: {
    backgroundColor: 'rgba(153, 153, 153, 0.18)',
    height: 35,
    fontSize: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.primarBlue,
    height: 35,
    width: 170,
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
