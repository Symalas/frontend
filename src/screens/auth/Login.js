import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import CustomButton from '../../components/micro/CustomButton';
import { http_auth } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const { http_auth } = Config();
  const navigation = useNavigation();
  const route = useRoute();
  const role = route.params.role;

  const loginHandler = async () => {
    const data = {
      email: email,
      password: password,
    };
    await http_auth
      .post('/login', data)
      .then(async (res) => {
        await AsyncStorage.setItem('token', res.data.data.access_token);
        console.log(res.data.data.data);
        await AsyncStorage.setItem('data', JSON.stringify(res.data.data.data));
        navigation.navigate('home');
      })
      .catch((err) => {
        console.log(data);
        console.log(err);
      });
  };

  const openRegisterHandler = () => {
    navigation.navigate('register', {
      role: role,
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder='Masukkan email'
              keyboardType='email-address'
              style={styles.input}
              placeholderTextColor='#D4D4D4A8'
              onChangeText={(evt) => setEmail(evt)}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder='Masukkan Password'
              keyboardType='default'
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor='#D4D4D4A8'
              onChangeText={(evt) => setPassword(evt)}
            />
          </View>
          {/* <Text style={{ color: '#9F1818' }}>
            Login gagal, silahkan coba lagi
          </Text> */}
          <CustomButton
            style={styles.button}
            title={'Login'}
            titleStyle={styles.buttonTitle}
            onPress={loginHandler}
          />
        </View>
        <View style={styles.register}>
          <Text style={{ color: '#ffffff' }}>Belum Punya akun?</Text>
          <Pressable onPress={openRegisterHandler}>
            <Text style={styles.registerText}>Registrasi</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5271FF',
  },
  innerContainer: {
    padding: 5,
    width: '80%',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#4DAEE2',
    marginTop: 10,
  },
  buttonTitle: {
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 50,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    color: 'white',
  },
  logo: {
    height: 200,
    width: 200,
  },
  label: {
    color: 'white',
  },
  register: {
    flexDirection: 'row',
  },
  registerText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});
