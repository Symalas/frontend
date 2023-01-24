import { StatusBar } from 'expo-status-bar';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../../../static/color';
import ScreenDimension from '../../../../static/dimensions';
import CustomButton from '../../CustomButton';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
function ScheduleModalCreate({ visible, closeModal, datas, status, mhsRole }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const data = [
    {
      title: 'Tanggal',
      txt: ': 16 November 2022',
    },
    {
      title: 'Hari',
      txt: ': Rabu',
    },
    {
      title: 'Ruang',
      txt: ': E324',
    },
    {
      title: 'Jam',
      txt: ': 3/4',
    },
  ];

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
    <>
      <Modal
        transparent={true}
        visible={visible}
        animationType='fade'
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <KeyboardAvoidingView behavior='position'>
              <View style={styles.card}>
                <Text style={styles.title}>
                  {datas === undefined ? 'Tambah Data' : datas}
                </Text>
                <View style={styles.formContainer}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.label}>Tanggal</Text>
                    <CustomButton
                      onPress={showDatepicker}
                      title={date.toDateString()}
                      style={styles.btn}
                      titleStyle={styles.btnTitle}
                    />
                  </View>
                  <View style={styles.inpContainer}>
                    <Text style={styles.label}>Ruang</Text>
                    <TextInput
                      style={styles.inp}
                      defaultValue={status === 'create' ? '' : 'G123'}
                    />
                  </View>
                  <View style={styles.inpContainer}>
                    <Text style={styles.label}>Jam</Text>
                    <TextInput
                      style={styles.inp}
                      defaultValue={status === 'create' ? '' : '3/4'}
                    />
                  </View>
                  <View style={styles.inpContainer}>
                    <Text style={styles.label}>Pengganti Minggu ke</Text>
                    <TextInput
                      style={styles.inp}
                      defaultValue={status === 'create' ? '' : '7'}
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
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    style={[styles.button, { backgroundColor: Colors.red100 }]}
                    titleStyle={styles.buttonTitle}
                    title='Tutup'
                    onPress={closeModal}
                  />
                  <CustomButton
                    style={[
                      styles.button,
                      {
                        backgroundColor: Colors.primarBlue,
                        marginLeft: 5,
                      },
                    ]}
                    titleStyle={styles.buttonTitle}
                    title={status === 'create' ? 'Tambah' : 'Edit'}
                    onPress={closeModal}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 0.1 }}
        ></KeyboardAwareScrollView>
      </Modal>
    </>
  );
}

export default ScheduleModalCreate;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    width: ScreenDimension.ScreenWidth,
    backgroundColor: 'rgba(175, 188, 255, 0.21)',
    elevation: 3,
    zIndex: 3,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 9,
    width: ScreenDimension.ScreenWidth - 100,
  },
  formContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: ScreenDimension.ScreenWidth * 0.044,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  button: {
    height: 33,
    width: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
  dateContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  inpContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  label: {
    fontFamily: 'PoppinsSemiBold',
    marginRight: 9,
  },
  inp: {
    backgroundColor: Colors.gray250,
    height: 25,
    width: 50,
    textAlign: 'center',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    fontFamily: 'PoppinsMedium',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: Colors.gray250,
    width: 150,
    borderRadius: 5,
    paddingVertical: 3,
  },
  btnTitle: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
});
