import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/HeaderComponent';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeComponent from '../components/student/HomeComponent';
import ScreenDimension from '../static/dimensions';
import Ballon from '../components/micro/Ballon';
import ModalInput from '../components/micro/Modal';
import { useState } from 'react';

function Home() {
  let [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const role = route.params.role;

  const modalOpen = () => {
    setModalVisible(true);
  };
  const modalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style='dark' />
      <ModalInput
        visible={modalVisible}
        closeModal={modalClose}
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title={role === 'mahasiswa' ? 'Kelas' : 'Mata Kuliah'}
        />
        <View style={styles.contentContainer}>
          <HomeComponent />
        </View>
        <Ballon
          onPress={modalOpen}
          icon='plus'
        />
      </SafeAreaView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: ScreenDimension.ScreenWidth,
    height: ScreenDimension.ScreenHeight,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 35,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 160,
  },
});
