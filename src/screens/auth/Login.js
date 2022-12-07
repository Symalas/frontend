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

function Login() {
  const route = useRoute();
  const navigation = useNavigation();
  const role = route.params.role;

  const registerHandler = () => {
    navigation.navigate('register', {
      role: role,
    });
  };

  const loginHandler = () => {
    navigation.navigate('home', {
      role: role,
    });
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
              />
            </View>
            {/* Password */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Password
                <Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='*************'
                keyboardType='default'
                autoCapitalize='none'
                secureTextEntry={true}
              />
            </View>
          </View>
          {/* End Form */}
          <Pressable
            onPress={forgotMenu}
            style={{ marginTop: 10 }}
          >
            <Text>Lupa password?</Text>
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
});
