import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Colors from '../../../static/color';
import CustomButton from '../../micro/CustomButton';
import { AntDesign } from '@expo/vector-icons';

function EditClassName({ visible, closeModal, password, title }) {
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
        <Text style={styles.title}>Merubah Nama Kelas</Text>
        <TextInput
          style={styles.inp}
          placeholder='Masukkan Nama Kelas'
          defaultValue='2KA01 - 2022/2023'
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

export default EditClassName;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 16,
  },
  subTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
  },
  inp: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
    fontSize: 14,
    height: 40,
    fontFamily: 'PoppinsMedium',
    marginTop: 20,
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
