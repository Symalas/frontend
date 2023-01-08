import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import { StyleSheet } from 'react-native';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Image } from 'react-native';

function AttendanceData() {
  const route = useRoute();
  const nama = route.params.nama;
  const npm = route.params.npm;
  return (
    <>
      <StatusBar
        backgroundColor={Colors.primarBlue}
        style='light'
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <HeaderComponent
            title='Absen'
            searchVisible={false}
            extraTitleStyle={{ color: Colors.white }}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.txt}>20 Mei 2022 - 12.29.19</Text>
          <Image
            style={styles.img}
            source={require('../../../../assets/absen.jpeg')}
          />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.singleDataContainer}>
            <Text style={styles.label}>Nama</Text>
            <View style={styles.dataCard}>
              <Text style={styles.dataTitle}>{nama}</Text>
            </View>
          </View>
          <View style={styles.singleDataContainer}>
            <Text style={styles.label}>Kelas</Text>
            <View style={styles.dataCard}>
              <Text style={styles.dataTitle}>2KA01</Text>
            </View>
          </View>
          <View style={styles.singleDataContainer}>
            <Text style={styles.label}>NPM</Text>
            <View style={styles.dataCard}>
              <Text style={styles.dataTitle}>{npm}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default AttendanceData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: ScreenDimension.ScreenHeight + 200,
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: Colors.primarBlue,
    paddingTop: 40,
    paddingBottom: 150,
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 80,
    width: ScreenDimension.ScreenWidth,
  },
  card: {
    width: ScreenDimension.ScreenWidth - ScreenDimension.ScreenWidth * 0.2,
    backgroundColor: Colors.white,
    marginTop: -140,
    borderRadius: 50,
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'PoppinsMedium',
    fontSize: 20,
    color: '#0000009D',
    marginTop: 10,
    borderBottomColor: '#00000048',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  img: {
    width: ScreenDimension.ScreenWidth - ScreenDimension.ScreenWidth * 0.4,
    height: ScreenDimension.ScreenWidth - ScreenDimension.ScreenWidth * 0.49,
    borderRadius: 30,
    marginTop: 30,
  },
  dataContainer: {
    width: ScreenDimension.ScreenWidth - ScreenDimension.ScreenWidth * 0.3,
    marginTop: 50,
  },
  singleDataContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  label: {
    width: '25%',
    fontFamily: 'PoppinsBold',
    fontSize: 18,
  },
  dataCard: {
    backgroundColor: '#EBEBEB',
    width: '75%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  dataTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
  },
});
