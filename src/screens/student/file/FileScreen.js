import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import FileList from '../../../components/student/file/FileList';
import BottomNav from '../../../components/BottomNav';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import Ballon from '../../../components/micro/Ballon';
import ModalInput from '../../../components/micro/Modal';
import { useState } from 'react';

function FileScreen({ email, role, mhsRole }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ModalInput
        visible={visible}
        closeModal={() => setVisible(false)}
        menu='folder'
      />
      <StatusBar
        style='dark'
        backgroundColor='white'
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Berkas'
          email={email}
          role={role}
        />
        <View style={styles.fileContainer}>
          <FileList
            email={email}
            role={role}
            mhsRole={mhsRole}
          />
        </View>
        {mhsRole === 'mhs' ? (
          ''
        ) : (
          <Ballon
            onPress={() => setVisible(true)}
            icon='folder'
          />
        )}
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
