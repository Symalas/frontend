import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import ScreenDimension from '../../static/dimensions';

function TaskCollection() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Pengumpulan Tugas'
          extraTitleStyle={{ fontSize: 22 }}
        />
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
});
