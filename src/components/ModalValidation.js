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
import Colors from '../static/color';
import ScreenDimension from '../static/dimensions';
import CustomButton from './micro/CustomButton';
import { Image } from 'react-native';

function ModalValidation({
  visible,
  cancel,
  onPress,
  status,
  title,
  btnTitle,
}) {
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
              <Text style={styles.title}>{title}</Text>
              {status === 'success' ? (
                <Image source={require(`../../assets/success.png`)} />
              ) : (
                <Image source={require(`../../assets/failed.png`)} />
              )}
              <CustomButton
                style={[styles.button, { backgroundColor: Colors.primarBlue }]}
                titleStyle={styles.buttonTitle}
                title={btnTitle}
                onPress={onPress}
              />
            </View>
          </View>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 0.1 }}
        ></KeyboardAwareScrollView>
      </Modal>
    </>
  );
}

export default ModalValidation;

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
    alignItems: 'center',
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
  button: {
    height: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
  },
});
