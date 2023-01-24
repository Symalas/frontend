import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Keyboard,
  Pressable,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useRef, useState } from 'react';

function PasswordForgotOtp() {
  const navigation = useNavigation();
  const route = useRoute();
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);

  const [txt1, setTxt1] = useState(null);
  const [txt2, setTxt2] = useState(null);
  const [txt3, setTxt3] = useState(null);
  const [txt4, setTxt4] = useState(null);

  const email = route.params.email;
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

  const handleText1 = (e) => {
    setTxt1(e);
    if (e.length == 1) {
      text2.current.focus();
    }
  };
  const handleText2 = (e) => {
    setTxt2(e);
    if (e.length == 1) {
      text3.current.focus();
    }
  };
  const handleText3 = (e) => {
    setTxt3(e);
    if (e.length == 1) {
      text4.current.focus();
    }
  };
  const handleText4 = (e) => {
    setTxt4(e);
    if (e.length == 1) {
      text4.current.focus();
    }
  };

  const sendHandler = () => {
    navigation.navigate('forgotPassword', {
      role: role,
    });
  };

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
      >
        <StatusBar />
        <SafeAreaView>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Kode Verifikasi Email</Text>
            <View style={styles.circle}>
              <Image
                style={styles.img}
                source={require('../../../../assets/verify.png')}
              />
            </View>
            <Text style={styles.msg}>
              Masukkan kode yang telah dikirimkan ke akun email {email}
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputCard}>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                autoCapitalize='none'
                maxLength={1}
                ref={text1}
                onChangeText={handleText1}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                  } else {
                    text2.current.focus();
                  }
                }}
              />
            </View>
            <View style={styles.inputCard}>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                autoCapitalize='none'
                maxLength={1}
                ref={text2}
                onChangeText={handleText2}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    text1.current.focus();
                  } else {
                    text3.current.focus();
                  }
                }}
              />
            </View>
            <View style={styles.inputCard}>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                autoCapitalize='none'
                maxLength={1}
                ref={text3}
                onChangeText={handleText3}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    text2.current.focus();
                  } else {
                    text4.current.focus();
                  }
                }}
              />
            </View>
            <View style={styles.inputCard}>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                autoCapitalize='none'
                maxLength={1}
                // ref={text4}
                ref={(ref) => {
                  (text4.current = ref) &&
                    localInputRef &&
                    (localInputRef.current = ref);
                }}
                onChangeText={handleText4}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    text3.current.focus();
                  }
                }}
              />
            </View>
          </View>
          <Pressable>
            <Text style={styles.codeAgain}>Kirim Ulang Kode</Text>
          </Pressable>
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

export default PasswordForgotOtp;

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
    height: 60,
    width: 72,
  },
  msg: {
    color: Colors.blue800,
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    textAlign: 'center',
    width: 300,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  label: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
  },
  inputCard: {
    backgroundColor: Colors.gray200,
    height: 90,
    width: 75,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    borderBottomColor: Colors.primarBlue,
    borderBottomWidth: 2,
    fontSize: 30,
    height: 70,
    width: 60,
    paddingHorizontal: 10,
    textAlign: 'center',
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
  codeAgain: {
    textAlign: 'center',
    color: Colors.red100,
    textDecorationLine: 'underline',
    fontFamily: 'PoppinsBold',
    fontSize: 12,
    marginTop: 5,
  },
});
