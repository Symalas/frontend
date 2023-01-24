import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
// import File from '../../../components/micro/File';
import FileList from '../../../components/student/file/FileList';
import BottomNav from '../../../components/BottomNav';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import Ballon from '../../../components/micro/Ballon';
import { useRoute } from '@react-navigation/native';
import FileInnerList from '../../../components/student/file/FileInnerList';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import ModalInput from '../../../components/micro/Modal';

function FileInnerScreen() {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const route = useRoute();
  const title = route.params.title;
  const email = route.params.email;
  const role = route.params.role;
  const mhsRole = route.params.mhsRole;

  const data = [
    {
      icon: 'microsoft-word',
      title: 'Nama Dokumen',
    },
    {
      icon: 'file-pdf-box',
      title: 'Nama Dokumen',
    },
  ];

  const SelectMenu = () => {
    return (
      <>
        <ModalInput
          menu='folder'
          closeModal={() => setVisible(false)}
          visible={visible}
        />
        <View
          style={[
            styles.menuContainer,
            openMenu === true ? { display: 'flex' } : { display: 'none' },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}
          >
            <Text style={styles.menuTitle}>Tambah Folder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // setOpenMenu(false);
              // setMenuData('lama');
            }}
            style={{ marginTop: 5 }}
          >
            <Text style={styles.menuTitle}>Unggah Berkas</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      <SelectMenu />
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title={title}
          email={email}
          role={role}
        />
        <View style={styles.folderContainer}>
          <FileInnerList />
        </View>
        <View style={styles.fileContainer}>
          {data.map((item, i) => {
            return (
              <View
                key={i}
                style={styles.file}
              >
                <View style={styles.previewContainer}>
                  <Text style={styles.previewTitle}>preview dokumen</Text>
                </View>
                <View style={styles.fileContent}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={17}
                    color={Colors.white}
                  />
                  <Text
                    numberOfLines={1}
                    style={styles.contentTitle}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        {mhsRole === 'mhs' ? (
          ''
        ) : (
          <Ballon
            onPress={() => setOpenMenu(!openMenu)}
            icon='folder'
          />
        )}
      </SafeAreaView>
    </>
  );
}

export default FileInnerScreen;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 60,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  folderContainer: {
    marginTop: 20,
    paddingLeft: 60,
  },
  fileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  file: {
    height: 120,
    width: 120,
    backgroundColor: Colors.gray250,
    borderRadius: 5,
  },
  fileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 25,
    backgroundColor: Colors.primarBlue,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  previewContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewTitle: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: Colors.gray300,
  },
  contentTitle: {
    fontSize: 10,
    fontFamily: 'PoppinsMedium',
    color: Colors.white,
    marginLeft: 2,
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
