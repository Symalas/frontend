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

function Register() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  //   const { http_auth } = Config();
  const navigation = useNavigation();
  const route = useRoute();
  const role = route.params.role;

  const registerHandler = async () => {
    let data = {};
    if (role === 'mahasiswa') {
      data = {
        npm: id,
        name: name,
        email: email,
        password: password,
        password_confirm: confirm,
        role: role,
      };
    } else {
      data = {
        nidn: id,
        name: name,
        email: email,
        password: password,
        password_confirm: confirm,
        role: role,
      };
    }
    await http_auth
      .post('/register-mhs', data)
      .then(async (res) => {
        // await AsyncStorage.setItem('token', res.data.data.access_token);
        console.log(res.data.data.data);
        // await AsyncStorage.setItem('data', JSON.stringify(res.data.data.data));
        navigation.navigate('login', {
          role: role,
        });
      })
      .catch((err) => {
        console.log(data);
        console.log(err);
      });
  };

  const onLoginHandler = () => {
    navigation.navigate('login', {
      role: role,
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        {/* <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        /> */}
        <View style={styles.innerContainer}>
          {/* NPM */}
          <View>
            <Text style={styles.label}>
              {role === 'mahasiswa' ? 'NPM' : 'NIDN'}
            </Text>
            <TextInput
              placeholder={`${
                role === 'mahasiswa' ? 'Masukkan NPM' : 'Masukkan NIDN'
              }`}
              keyboardType='numeric'
              style={styles.input}
              placeholderTextColor='#D4D4D4A8'
              onChangeText={(evt) => setId(evt)}
            />
          </View>
          {/* Name */}
          <View>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              placeholder='Masukkan Nama'
              keyboardType='default'
              style={styles.input}
              placeholderTextColor='#D4D4D4A8'
              onChangeText={(evt) => setName(evt)}
            />
          </View>
          {/* Email */}
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
          {/* Password */}
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
          {/* Confirm Password */}
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder='Masukkan Password'
              keyboardType='default'
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor='#D4D4D4A8'
              onChangeText={(evt) => setConfirm(evt)}
            />
          </View>
          {/* <Text style={{ color: '#9F1818' }}>
            Login gagal, silahkan coba lagi
          </Text> */}
          <CustomButton
            style={styles.button}
            title={'Register'}
            titleStyle={styles.buttonTitle}
            onPress={registerHandler}
          />
        </View>
        <View style={styles.register}>
          <Text style={{ color: '#ffffff' }}></Text>
          <Pressable onPress={onLoginHandler}>
            {/* <Text style={styles.registerText}>Login</Text> */}
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default Register;

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
