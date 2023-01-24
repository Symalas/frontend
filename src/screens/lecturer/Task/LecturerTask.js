import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import { StyleSheet } from 'react-native';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import { View } from 'react-native';
import TaskList from '../../../components/lecturer/task/TaskList';
import { useRoute } from '@react-navigation/native';

function LecturerTask() {
  const email = useRoute().params.email;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Tugas'
          email={email}
        />
        <View style={styles.fileContainer}>
          <TaskList email={email} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default LecturerTask;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    height: ScreenDimension.ScreenHeight + 200,
  },
  fileContainer: {
    height: ScreenDimension.ScreenHeight - 240,
    marginTop: 20,
    paddingLeft: ScreenDimension.ScreenWidth * 0.13,
  },
});
