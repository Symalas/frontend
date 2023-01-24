import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../../components/micro/CustomButton';
import { Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function AttendanceInput() {
  const navigation = useNavigation();
  const route = useRoute();
  const image = route.params.image;
  const tugas = route.params.tugas;
  const minggu = route.params.minggu;
  const email = route.params.email;
  const role = route.params.role;

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Absen'
          searchVisible={false}
          email={email}
          role={role}
        />
        <View style={styles.innerContainer}>
          <View style={styles.previewContainer}>
            {image === '' ? (
              <Text style={styles.previewTitle}>Pratinjau Foto Absen</Text>
            ) : (
              <Image
                source={{
                  uri: image,
                }}
                style={{ width: '100%', height: 300 }}
              />
            )}
          </View>
          <Text style={styles.inputTitle}>{tugas}</Text>
          <Text style={styles.inputDate}>{minggu}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Camera', {
                  tugas: tugas,
                  minggu: minggu,
                })
              }
              style={styles.cameraButton}
            >
              <FontAwesome
                name='camera'
                size={40}
                color={Colors.white}
              />
            </TouchableOpacity>
            <CustomButton
              title='Kirim Foto Absen'
              style={styles.btnSend}
              titleStyle={styles.btnSendTitle}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default AttendanceInput;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 100,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  innerContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  previewContainer: {
    height: 300,
    width: '100%',
    backgroundColor: Colors.gray250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  previewTitle: {
    color: Colors.gray300,
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
  },
  inputTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
  },
  inputDate: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: Colors.gray800,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  cameraButton: {
    backgroundColor: Colors.primarBlue,
    height: 62,
    width: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnSend: {
    backgroundColor: Colors.primarBlue,
    width: ScreenDimension.ScreenWidth - 122,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnSendTitle: {
    color: Colors.white,
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
