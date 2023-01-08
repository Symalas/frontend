import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import ScheduleMenu from '../../../components/micro/student/schedule/ScheduleMenu';
import { StyleSheet, Text, View } from 'react-native';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import ScheduleList from '../../../components/student/schedule/ScheduleList';
import Ballon from '../../../components/micro/Ballon';
import { useState } from 'react';
import ModalReplacement from '../../../components/micro/student/schedule/ModalReplacement';
import ScheduleModalCreate from '../../../components/micro/student/schedule/ScheduleModalCreate';

function ReplacementSchedule() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ScheduleModalCreate
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        status='create'
      />
      <View style={styles.container}>
        <ScheduleList />
        <Ballon
          onPress={() => setOpenModal(true)}
          icon='plus'
        />
      </View>
    </>
  );
}

export default ReplacementSchedule;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight - 200,
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
});
