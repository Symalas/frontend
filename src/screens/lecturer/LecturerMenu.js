import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../static/color';
import ScreenDimension from '../../static/dimensions';
import { StatusBar } from 'expo-status-bar';
import Footer from '../../components/FooterComponent';
import { useNavigation } from '@react-navigation/native';

function LecturerMenu() {
  const navigation = useNavigation();

  const handleTugas = () => {
    navigation.navigate('LecturerTask');
  };
  return (
    <>
      <StatusBar backgroundColor='#ffffff' />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <HeaderComponent
            title='Tugas & Absen'
            searchVisible={false}
          />
        </View>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={handleTugas}
          >
            <Text style={styles.txt}>Tugas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.btn, { marginTop: 50 }]}
            onPress={() => navigation.navigate('LecturerAttendance')}
          >
            <Text style={styles.txt}>Kelas</Text>
          </TouchableOpacity>
          {/* <Text>Absen</Text> */}
        </View>
      </SafeAreaView>
      <Footer
        extraStyle={styles.footer}
        extraTitle={{ color: Colors.white }}
      />
    </>
  );
}

export default LecturerMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primarBlue,
  },
  topContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: Colors.white,
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70,
  },
  innerContainer: {
    height: ScreenDimension.ScreenHeight,
    width: ScreenDimension.ScreenWidth,
    alignItems: 'center',
    paddingTop: 100,
  },
  btn: {
    backgroundColor: Colors.white,
    width: ScreenDimension.ScreenWidth * 0.5,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 30,
    elevation: 12,
  },
  txt: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
