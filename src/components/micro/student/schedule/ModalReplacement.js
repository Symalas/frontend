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

function ModalInput({ visible, closeModal, datas, edit, mhsRole }) {
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
                <Text style={styles.title}>{datas}</Text>
                {/* Data */}
                {data.map((item, i) => {
                  return (
                    <View style={styles.txtContainer}>
                      <Text style={styles.dataTitle}>{item.title}</Text>
                      <Text style={styles.dataTxt}>{item.txt}</Text>
                    </View>
                  );
                })}
                {/* End Data */}
                <Text style={styles.pengganti}>Pengganti Minggu ke: 7</Text>
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
                      mhsRole === 'mhs'
                        ? { display: 'none' }
                        : {
                            display: 'flex',
                            backgroundColor: Colors.primarBlue,
                            marginLeft: 5,
                          },
                    ]}
                    titleStyle={styles.buttonTitle}
                    title='Edit'
                    onPress={edit}
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
  },
  formContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    paddingLeft: 20,
  },
  txtContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  dataTitle: {
    width: '25%',
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
  },
  dataTxt: {
    width: '60%',
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
  },
  pengganti: {
    paddingLeft: 20,
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  button: {
    height: 30,
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
