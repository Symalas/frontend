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
import Colors from '../../../../static/color';
import ScreenDimension from '../../../../static/dimensions';
import CustomButton from '../../CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function TaskUploadModal({ visible, closeModal, status, subTitle }) {
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
                <View
                  style={[
                    styles.titleContainer,
                    status === 1 ? {} : { justifyContent: 'center' },
                  ]}
                >
                  <Text
                    style={[
                      styles.title,
                      status === 1 ? { marginRight: 7 } : '',
                    ]}
                  >
                    {status === 0 ? 'Unggah Berkas Tugas' : 'Berkas Terunggah'}
                  </Text>
                  {status === 0 ? (
                    ''
                  ) : (
                    <Ionicons
                      name='checkmark-circle'
                      size={24}
                      color={Colors.green500}
                    />
                  )}
                </View>
                <Text
                  style={[
                    styles.subTitle,
                    status === 0 ? { display: 'flex' } : { display: 'none' },
                  ]}
                >
                  {subTitle}
                </Text>
                <View style={styles.formContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder='Berikan keterangan tambahan'
                    numberOfLines={4}
                    multiline={true}
                  />
                  <View style={styles.fileContainer}>
                    <MaterialCommunityIcons
                      name='file-pdf-box'
                      size={24}
                      color={Colors.red100}
                    />
                    <Text style={styles.fileTitle}>File Name</Text>
                  </View>
                  <CustomButton
                    title='Tambah Berkas'
                    style={styles.btnAdd}
                    titleStyle={styles.txtAdd}
                  />
                  {status === 0 ? (
                    ''
                  ) : (
                    <Text style={styles.timer}>
                      Sisa waktu edit berkas 00:30:00
                    </Text>
                  )}
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
                      title={status === 0 ? 'Tambah' : 'Edit'}
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

export default TaskUploadModal;

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
  },
  formContainer: {
    alignItems: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.gray250,
    borderRadius: 9,
    height: 125,
    textAlignVertical: 'top',
    paddingLeft: 8,
    paddingTop: 10,
    fontSize: 12,
    width: 250,
    color: '#606060',
    marginTop: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
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
  fileContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.gray250,
    alignItems: 'center',
    width: '100%',
    borderRadius: 9,
    padding: 8,
  },
  fileTitle: {
    fontFamily: 'PoppinsMedium',
    color: Colors.gray300,
    fontSize: 12,
    marginLeft: 5,
  },
  btnAdd: {
    backgroundColor: Colors.primarBlue,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    borderRadius: 9,
    marginTop: 10,
  },
  txtAdd: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: Colors.white,
  },
  timer: {
    fontSize: 9,
    fontFamily: 'PoppinsSemiBold',
    color: Colors.red100,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
});
