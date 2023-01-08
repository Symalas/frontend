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
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';

function EditClassMember({
  visible,
  closeModal,
  password,
  name,
  npm,
  deleteMember,
}) {
  const [current, setCurrent] = useState('test');
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
        <Text style={styles.title}>Edit Anggota Kelas</Text>
        <Text style={styles.subTitle}>
          {name} - {npm}
        </Text>
        {/* Admin Data */}
        <View style={styles.adminContainer}>
          <View>
            <Text style={styles.label}>Admin</Text>
            <Text style={styles.subLabel}>
              buat anggota kelas menjadi admin
            </Text>
          </View>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground={Colors.primarBlue}
          >
            <RadioButtonItem
              value='test2'
              label=''
            />
          </RadioButtonGroup>
        </View>
        <Pressable onPress={deleteMember}>
          <Text style={styles.delete}>hapus dari anggota</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default EditClassMember;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 22,
  },
  subTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
  },
  inp: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
    fontSize: 14,
    height: 40,
    fontFamily: 'PoppinsMedium',
  },
  back: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: -5,
    fontFamily: 'PoppinsBold',
  },
  subLabel: {
    fontFamily: 'PoppinsMedium',
    fontSize: 11,
  },
  adminContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  delete: {
    color: Colors.red100,
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    marginTop: 15,
  },
});
