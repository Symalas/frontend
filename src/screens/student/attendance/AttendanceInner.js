import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
// import AttendanceList from '../../../components/student/attendance/AttendanceList';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import AttendanceInnerList from '../../../components/student/attendance/AttendanceInnerList';
import { useRoute } from '@react-navigation/native';

function AttendanceInner() {
  const route = useRoute();
  const mata = route.params.matkul;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Absen'
          searchVisible={false}
        />
        <View style={styles.innerContainer}>
          <AttendanceInnerList matkul={mata} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default AttendanceInner;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 100,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  innerContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 175,
  },
});
