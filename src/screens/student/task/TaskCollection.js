import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import ScreenDimension from '../../../static/dimensions';
import TaskCollectionList from '../../../components/student/task/TaskCollectionList';
import Colors from '../../../static/color';
import { useRoute } from '@react-navigation/native';

function TaskCollection() {
  const route = useRoute().params;
  const email = route.email;
  const role = route.role;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Pengumpulan Tugas'
          extraTitleStyle={{ fontSize: 22 }}
          role={role}
          email={email}
        />
        <View style={styles.contentContainer}>
          <TaskCollectionList
            email={email}
            role={role}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default TaskCollection;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 200,
    paddingTop: 40,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 170,
  },
});
