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
  const email = route.params.email;
  const role = route.params.role;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Absen'
          searchVisible={false}
          email={email}
          role={role}
        />
        <View style={styles.innerContainer}>
          <AttendanceInnerList
            matkul={mata}
            email={email}
            role={role}
          />
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
