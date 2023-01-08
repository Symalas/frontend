import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import TaskInnerList from '../../../components/lecturer/task/TaskInnerList';
import Ballon from '../../../components/micro/Ballon';
import { useState } from 'react';
import ModalTaskUpload from '../../../components/micro/lecturer/taskAttendance/ModalTaskUpload';

function AttendanceInnerL() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ModalTaskUpload
        visible={visible}
        closeModal={() => setVisible(false)}
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Absen'
          extraTitleStyle={{ fontSize: 20 }}
        />
        <View>
          <TaskInnerList page='absen' />
        </View>
      </SafeAreaView>
    </>
  );
}

export default AttendanceInnerL;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    height: ScreenDimension.ScreenHeight + 200,
  },
});
