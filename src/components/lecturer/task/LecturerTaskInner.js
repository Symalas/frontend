import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../HeaderComponent';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import TaskInnerList from './TaskInnerList';
import Ballon from '../../micro/Ballon';
import { useState } from 'react';
import ModalTaskUpload from '../../micro/lecturer/taskAttendance/ModalTaskUpload';

function LecturerTaskInner() {
  const [visible, setVisible] = useState(false);
  const route = useRoute();
  return (
    <>
      <ModalTaskUpload
        visible={visible}
        closeModal={() => setVisible(false)}
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title={route.params.name}
          extraTitleStyle={{ fontSize: 20 }}
        />
        <View>
          <TaskInnerList />
        </View>
        <Ballon
          icon='plus'
          onPress={() => setVisible(true)}
          optionalStyle={styles.balon}
        />
      </SafeAreaView>
    </>
  );
}

export default LecturerTaskInner;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    height: ScreenDimension.ScreenHeight + 200,
  },
  balon: {
    bottom: 200,
  },
});
