import { StatusBar } from 'expo-status-bar';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../static/color';
import ScreenDimension from '../../static/dimensions';
import CustomButton from './CustomButton';

function ModalInput({ visible, closeModal, menu }) {
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
                  {menu === 'baru'
                    ? 'Tambah Kelas Baru'
                    : menu === 'folder'
                    ? 'Tambah Folder Baru'
                    : menu === 'matkul'
                    ? 'Tambah Matakuliah'
                    : menu === 'kelas'
                    ? 'Tambah Kelas Baru'
                    : 'Masukkan Kode Kelas'}
                </Text>
                <View style={styles.formContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={
                      menu === 'baru'
                        ? 'Masukkan Nama Kelas Baru'
                        : menu === 'folder'
                        ? 'Masukkan Folder Baru'
                        : menu === 'matkul'
                        ? 'Tambah Matakuliah Baru'
                        : menu === 'kelas'
                        ? 'Tambah Kelas Baru'
                        : 'Masukkan Kode Kelas'
                    }
                  />
                  <View style={styles.buttonContainer}>
                    <CustomButton
                      style={[
                        styles.button,
                        { backgroundColor: Colors.red100 },
                      ]}
                      titleStyle={styles.buttonTitle}
                      title='Tutup'
                      onPress={closeModal}
                    />
                    <CustomButton
                      style={[
                        styles.button,
                        { backgroundColor: Colors.primarBlue, marginLeft: 5 },
                      ]}
                      titleStyle={styles.buttonTitle}
                      title='Tambah'
                    />
                  </View>
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

export default ModalInput;

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
    width: ScreenDimension.ScreenWidth * 0.7,
  },
  formContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: ScreenDimension.ScreenWidth * 0.044,
    textAlign: 'center',
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 9,
    height: 35,
    paddingLeft: 8,
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    width: '100%',
    color: '#606060',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 25,
    width: 70,
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
});
