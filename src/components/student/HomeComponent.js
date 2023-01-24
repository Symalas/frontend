import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StudentClass from '../micro/StudentClass';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../static/color';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import InputClassCode from './classMenu/InputClassCode';
import ModalValidation from '../ModalValidation';
import Navigation from '../../static/navigation/Index';

function HomeComponent({ email, role, mhsRole }) {
  const navigation = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const [validation, setValidation] = useState(false);
  const [code, setCode] = useState();
  const [validationTitle, setValidationTitle] = useState();
  const [validationStatus, setValidationStatus] = useState();
  const [validationBtn, setValidaitonBtn] = useState();
  const { navigationRoute } = Navigation();
  const data = [
    {
      id: 1,
      title: '2KA01 - 2022/2023',
    },
    {
      id: 2,
      title: '2KA02 - 2022/2023',
    },
    {
      id: 3,
      title: '2KA03 - 2022/2023',
    },
    {
      id: 4,
      title: '2KA04 - 2022/2023',
    },
    {
      id: 5,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 6,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 7,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 8,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 9,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 10,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 11,
      title: '2KA011 - 2022/2023',
    },
    {
      id: 12,
      title: '2KA012 - 2022/2023',
    },
    {
      id: 13,
      title: '2KA013 - 2022/2023',
    },
  ];

  const Item = ({ item }) => {
    return <StudentClass title={item.title} />;
  };

  const openClass = () => {
    navigation.navigate('fileScreen');
    navigationRoute('fileScreen', role, mhsRole, email);
    navigation.setOptions({ title: 'Anjay' });
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
          onPress={() =>
            navigation.navigate('ClassSetting', { mhsRole: mhsRole })
          }
        >
          <Text style={styles.menuTitle}>Pengaturan Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={
            mhsRole === 'mhs'
              ? { display: 'none' }
              : { display: 'flex', marginTop: 5 }
          }
        >
          <Text style={styles.menuTitle}>Masukkan Kode Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            mhsRole === 'mhs'
              ? { display: 'none' }
              : { display: 'flex', marginTop: 5 }
          }
        >
          <Text style={styles.menuTitle}>Hapus Kelas</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const openMenuHandler = (index) => {
    // setIdxKey(index);

    if (index === 0) {
      setOpenMenu(!openMenu);
    }
    // setVisible(true);
  };

  const handleCodeInput = () => {
    if (code === 'KA2301') {
      setValidation(true);
      setValidaitonBtn('kembali ke halaman kelas');
      setValidationStatus('success');
      setValidationTitle('Kode Berhasil Dimasukkan!');
    } else {
      setValidation(true);
      setValidaitonBtn('masukkan ulang');
      setValidationStatus('failed');
      setValidationTitle('Kode Kelas Tidak Dapat Ditemukan');
    }
  };

  return (
    <>
      {/* Class Code Input */}
      <InputClassCode
        visible={visible}
        closeModal={() => setVisible(false)}
        onPress={handleCodeInput}
        onChangeText={(e) => setCode(e)}
      />
      <ModalValidation
        visible={validation}
        btnTitle={validationBtn}
        title={validationTitle}
        status={validationStatus}
        onPress={() => {
          if (validationStatus === 'success') {
            setValidation(false);
            setVisible(false);
          } else {
            setValidation(false);
          }
        }}
      />
      <FlatList
        data={data}
        key={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <View style={styles.container}>
              <TouchableOpacity
                key={index.toString()}
                onPress={openClass}
                activeOpacity={0.7}
                style={styles.menu}
              >
                <StudentClass title={item.title} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openMenuHandler(index)}>
                <Entypo
                  name='dots-three-vertical'
                  size={18}
                  color='black'
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      />
      <SelectMenu />
    </>
  );
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  menu: {
    width: '90%',
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
    right: 5,
    marginTop: 50,
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
