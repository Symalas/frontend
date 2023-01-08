import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import { StyleSheet, View } from 'react-native';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import TaskList from '../../../components/lecturer/task/TaskList';

function LecturerAttendance() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent title='Absen' />
        <View style={styles.fileContainer}>
          <TaskList page='absen' />
        </View>
      </SafeAreaView>
    </>
  );
}

export default LecturerAttendance;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: ScreenDimension.ScreenHeight + 200,
    backgroundColor: Colors.white,
  },
  fileContainer: {
    height: ScreenDimension.ScreenHeight - 240,
    marginTop: 20,
    paddingLeft: ScreenDimension.ScreenWidth * 0.13,
  },
});
