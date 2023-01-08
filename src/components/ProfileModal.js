import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Colors from '../static/color';
import CustomButton from './micro/CustomButton';
import { AntDesign } from '@expo/vector-icons';

function ProfileModal({ visible, closeModal, password, title }) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Pressable onPress={closeModal}>
        <AntDesign
          name='closecircleo'
          size={30}
          color={Colors.gray300}
          style={styles.back}
        />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Kata Sandi Lama</Text>
        <TextInput
          style={styles.inp}
          placeholder='Kata Sandi Lama'
          secureTextEntry={password}
        />
        <Text style={styles.label}>Masukkan Kata Sandi Baru</Text>
        <TextInput
          style={styles.inp}
          placeholder='Kata Sandi Baru'
          secureTextEntry={password}
        />
        <Text style={styles.label}>Konfirmasi Kata Sandi Baru</Text>
        <TextInput
          style={styles.inp}
          placeholder='Konfirmas Kata Sandi Baru'
          secureTextEntry={password}
        />
        <CustomButton
          title='Submit'
          style={styles.btn}
          titleStyle={styles.btnTitle}
        />
      </View>
    </Modal>
  );
}

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
  },
  inp: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
    fontSize: 14,
    height: 40,
    fontFamily: 'PoppinsMedium',
  },
  btn: {
    backgroundColor: Colors.primarBlue,
    borderRadius: 5,
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
  },
  btnTitle: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    color: Colors.white,
  },
  back: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    marginTop: 20,
    marginBottom: -5,
    fontFamily: 'PoppinsMedium',
  },
});
