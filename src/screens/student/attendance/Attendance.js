import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import AttendanceList from '../../../components/student/attendance/AttendanceList';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';

function Attendance({ email, role, mhsRole }) {
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
          <AttendanceList
            email={email}
            role={role}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default Attendance;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  innerContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 175,
  },
});
