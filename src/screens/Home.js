import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeComponent from '../components/student/HomeComponent';
import ScreenDimension from '../static/dimensions';
import Ballon from '../components/micro/Ballon';
import ModalInput from '../components/micro/Modal';
import { useState } from 'react';
import Colors from '../static/color';
import MatkulList from '../components/lecturer/matkul/MatkulList';

function Home() {
  const navigation = useNavigation();
  let [modalVisible, setModalVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuData, setMenuData] = useState();
  // const [matkul, setMatkul] = useState(false);
  const route = useRoute();
  const role = route.params.role;

  const modalOpen = () => {
    if (role === 'mahasiswa') {
      setOpenMenu(!openMenu);
    } else {
      setModalVisible(true);
    }
  };
  const modalClose = () => {
    setModalVisible(false);
  };

  const SelectMenu = () => {
    return (
      <View
        style={[
          styles.menuContainer,
          openMenu === true ? { display: 'flex' } : { display: 'none' },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setOpenMenu(false);
            setMenuData('baru');
          }}
        >
          <Text style={styles.menuTitle}>Buat Kelas Baru</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setOpenMenu(false);
            setMenuData('lama');
          }}
          style={{ marginTop: 5 }}
        >
          <Text style={styles.menuTitle}>Gabung Kelas</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SelectMenu />
      <StatusBar style='dark' />
      <ModalInput
        visible={modalVisible}
        closeModal={modalClose}
        menu={role === 'mahasiswa' ? menuData : 'matkul'}
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title={role === 'mahasiswa' ? 'Kelas' : 'Mata Kuliah'}
        />
        <View style={styles.contentContainer}>
          {role === 'mahasiswa' ? <HomeComponent /> : <MatkulList />}
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
  menuContainer: {
    backgroundColor: Colors.primarBlue,
    borderRadius: 5,
    width: 200,
    // height: 160,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 50,
    bottom: 100,
    zIndex: 100,
    // marginTop: 50,
  },
  menuTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: Colors.white,
    borderBottomColor: '#6782FF',
    borderBottomWidth: 1,
    width: '90%',
  },
});
