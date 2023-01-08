import { Modal, StyleSheet, View, Text } from 'react-native';
import Colors from '../../../../static/color';
import ScreenDimension from '../../../../static/dimensions';
import CustomButton from '../../CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ModalFile({ visible, closeModal, menu }) {
  return (
    <>
      <Modal
        transparent={true}
        visible={visible}
        animationType='fade'
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <Text style={styles.title}>File Terunggah</Text>
              <View style={styles.preview}>
                <MaterialCommunityIcons
                  name='file-pdf-box'
                  size={35}
                  color='red'
                />
                <Text style={styles.txt}>File Name</Text>
              </View>
              <CustomButton
                style={[styles.button, { backgroundColor: Colors.red100 }]}
                titleStyle={styles.buttonTitle}
                title='Tutup'
                onPress={closeModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ModalFile;

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
    width: ScreenDimension.ScreenWidth - ScreenDimension.ScreenWidth * 0.4,
  },
  formContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9B0',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  txt: {
    fontFamily: 'PoppinsMedium',
    color: '#999999',
    marginLeft: 2,
  },
});
