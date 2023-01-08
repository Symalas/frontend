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
import { useState } from 'react';

function InputClassCode({
  visible,
  closeModal,
  password,
  onChangeText,
  onPress,
}) {
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
        <Text style={styles.title}>Masukkan Kode Kelas</Text>
        <Text style={styles.subTitle}>
          Masukkan kode kelas yang diberikan dosen Anda untuk terhubung dengan
          kelas dosen
        </Text>
        <Text style={styles.label}>Kode Kelas</Text>
        <TextInput
          style={styles.inp}
          placeholder='Masukkan Kode Kelas'
          secureTextEntry={password}
          onChangeText={onChangeText}
        />
        <CustomButton
          title='Submit'
          style={styles.btn}
          titleStyle={styles.btnTitle}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
}

export default InputClassCode;

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
