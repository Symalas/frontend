import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import ScreenDimension from '../../../static/dimensions';
import TaskCollectionList from '../../../components/student/task/TaskCollectionList';

function TaskCollection() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Pengumpulan Tugas'
          extraTitleStyle={{ fontSize: 22 }}
        />
        <View style={styles.contentContainer}>
          <TaskCollectionList />
        </View>
      </SafeAreaView>
    </>
  );
}

export default TaskCollection;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    paddingTop: 40,
  },
  contentContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 170,
  },
});
