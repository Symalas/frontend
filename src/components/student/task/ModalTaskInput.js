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
import RNDateTimePicker from '@react-native-community/datetimepicker';

function ModalTaskInput({ visible, closeModal, password }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
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
        <Text style={styles.title}>Tambah List Tugas</Text>
        <Text style={styles.subTitle}>
          Menambah list tugas yang berguna sebagai pengingat mahasiswa mengenai
          segala tugas
        </Text>
        <Text style={styles.label}>Judul Tugas</Text>
        <TextInput
          style={styles.inp}
          placeholder='Tugas Baru'
        />
        <Text style={styles.label}>Tenggat Waktu Tugas</Text>
        <CustomButton
          onPress={showDatepicker}
          title={date.toDateString()}
          style={styles.btnDate}
          titleStyle={styles.btnTitleDate}
        />

        <CustomButton
          title='Submit'
          style={styles.btn}
          titleStyle={styles.btnTitle}
        />
      </View>
      {show && (
        <RNDateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
    </Modal>
  );
}

export default ModalTaskInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
  },
  subTitle: {
    fontFamily: 'PoppinsRegular',
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
    marginTop: 40,
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
  btnDate: {
    backgroundColor: Colors.gray250,
    width: 150,
    borderRadius: 5,
    paddingVertical: 3,
    marginTop: 10,
  },
  btnTitleDate: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
  },
});
