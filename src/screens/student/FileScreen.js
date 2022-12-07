import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import File from '../../components/micro/File';
import FileList from '../../components/student/FileList';
import BottomNav from '../../components/BottomNav';
import ScreenDimension from '../../static/dimensions';
import Colors from '../../static/color';
import Ballon from '../../components/micro/Ballon';

function FileScreen() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <HeaderComponent title='Berkas' />
        <View style={styles.fileContainer}>
          <FileList />
        </View>
        <Ballon icon='folder' />
      </SafeAreaView>
    </>
  );
}

export default FileScreen;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  fileContainer: {
    height: ScreenDimension.ScreenHeight - 240,
    marginTop: 20,
    paddingLeft: 60,
  },
});
