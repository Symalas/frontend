import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Footer from '../../components/FooterComponent';
import CustomButton from '../../components/micro/CustomButton';
import Colors from '../../static/color';
import { useRoute } from '@react-navigation/native';

function Register() {
  const route = useRoute();

  const role = route.params.role;
  return (
    <>
      <StatusBar style='dark' />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Registrasi</Text>
            <Text style={styles.title}>
              Akun {role === 'mahasiswa' ? 'Mahasiswa' : 'Dosen'}
            </Text>
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            {/* NPM */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                {role === 'mahasiswa' ? 'NPM' : 'NIDN'}
                <Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder={`Masukkan ${
                  role === 'mahasiswa' ? 'NPM' : 'NIDN'
                } Anda`}
                keyboardType='number-pad'
              />
            </View>
            {/* Nama */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Nama<Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='Masukkan Nama Anda'
                keyboardType='default'
                autoCapitalize='sentences'
              />
            </View>
            {/* Email */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Email<Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='Masukkan Email Anda'
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
                placeholder='************'
                keyboardType='default'
                autoCapitalize='none'
                secureTextEntry={true}
              />
            </View>
            {/* Password Confirm */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>
                Konfirmasi Password
                <Text style={{ color: 'red', fontWeight: '800' }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder='************'
                keyboardType='default'
                autoCapitalize='none'
                secureTextEntry={true}
              />
            </View>
            {/* Button */}
            <CustomButton
              style={styles.button}
              title={'Daftar'}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </View>
        <Footer extraStyle={{ marginTop: 100 }} />
      </ScrollView>
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  formContainer: {
    backgroundColor: Colors.primarBlue,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.primarBlue,
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 24,
  },
  formGroup: {
    marginTop: 15,
  },
  label: {
    fontWeight: '700',
    color: Colors.white,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primaryText,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    borderRadius: 9,
    height: 40,
    marginTop: 5,
  },
  button: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 30,
  },
  buttonTitle: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
