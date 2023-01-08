import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../static/color';
import CustomButton from '../../components/micro/CustomButton';
import Footer from '../../components/FooterComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScreenDimension from '../../static/dimensions';
import { useState } from 'react';

function Login() {
  const route = useRoute();
  const navigation = useNavigation();
  const role = route.params.role;
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [failed, setFailed] = useState(false);

  const registerHandler = () => {
    navigation.navigate('register', {
      role: role,
    });
  };

  const loginHandler = () => {
    if (email === 'admin@mail.com' && pw === '12345') {
      navigation.navigate('home', {
        role: role,
      });
    } else {
      setFailed(true);
    }
  };

  const forgotMenu = () => {
    navigation.navigate('forgotEmail', {
      role: role,
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Login {role === 'mahasiswa' ? 'Mahasiswa' : 'Dosen'}
          </Text>
          <Image
            style={styles.imgLogo}
            source={require('../../../assets/logo.png')}
          />
        </View>
        {/* End */}
        <View style={styles.contentContainer}>
          {/* Form */}
          <View>
            {/* Email */}
            <Text
              style={[
                styles.failed,
                failed === true ? { display: 'flex' } : { display: 'none' },
              ]}
            >
              Login Gagal Silahkan Coba Lagi
            </Text>
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Email
                <Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='Masukkan email Anda'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={(e) => setEmail(e)}
              />
            </View>
            {/* Password */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Kata Sandi
                <Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='*************'
                keyboardType='default'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(e) => setPw(e)}
              />
            </View>
          </View>
          {/* End Form */}
          <Pressable
            onPress={forgotMenu}
            style={{ marginTop: 10 }}
          >
            <Text style={styles.btnForgot}>Lupa kata sandi?</Text>
          </Pressable>

          <CustomButton
            style={styles.button}
            title='Login'
            titleStyle={styles.buttonTitle}
            onPress={loginHandler}
          />
          <View style={styles.register}>
            <Text style={{ color: Colors.black, fontWeight: '600' }}>
              Belum Punya akun?
            </Text>
            <Pressable onPress={registerHandler}>
              <Text style={styles.registerText}>Registrasi</Text>
            </Pressable>
          </View>

          {/* Footer */}
          <Footer />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primarBlue,
    height: ScreenDimension.ScreenHeight,
  },
  headerContainer: {
    alignItems: 'center',
  },
  imgLogo: {
    height: 150,
    width: 150,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 25,
    color: Colors.white,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  label: {
    color: Colors.primaryText,
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
  },
  input: {
    borderBottomColor: Colors.primaryText,
    borderBottomWidth: 1,
    height: 50,
  },
  formGroup: {
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primarBlue,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonTitle: {
    color: Colors.white,
    fontFamily: 'PoppinsMedium',
    textAlign: 'center',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: Colors.primaryText,
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontFamily: 'PoppinsRegular',
  },
  btnForgot: {
    textDecorationLine: 'underline',
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: Colors.primaryText,
  },
  failed: {
    fontFamily: 'PoppinsMedium',
    fontSize: 10,
    marginBottom: -20,
    color: Colors.red100,
  },
});
