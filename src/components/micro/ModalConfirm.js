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

function ModalConfirm({ visible, cancel, deleteClick }) {
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
                  Anda yakin ingin menghapus anggota?
                </Text>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    style={[styles.button, { backgroundColor: Colors.red100 }]}
                    titleStyle={styles.buttonTitle}
                    title='Hapus'
                    onPress={deleteClick}
                  />
                  <CustomButton
                    style={[
                      styles.button,
                      { backgroundColor: Colors.primarBlue, marginRight: 5 },
                    ]}
                    titleStyle={styles.buttonTitle}
                    title='Batal'
                    onPress={cancel}
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

export default ModalConfirm;

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
    width: ScreenDimension.ScreenWidth - 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 9,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 9,
    height: 35,
    paddingLeft: 8,
    fontSize: 12,
    width: 250,
    color: '#606060',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    marginTop: 30,
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
    fontSize: 12,
  },
});
