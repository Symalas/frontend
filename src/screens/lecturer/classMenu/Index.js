import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import { StyleSheet, View } from 'react-native';
import LecturerClassList from '../../../components/lecturer/classMenu/LecturerClassList';
import ScreenDimension from '../../../static/dimensions';
import Ballon from '../../../components/micro/Ballon';
import { useState } from 'react';
import ModalInput from '../../../components/micro/Modal';
import { useRoute } from '@react-navigation/native';
import Colors from '../../../static/color';

function LecturerClass() {
  const [openMenu, setOpenMenu] = useState(false);
  const email = useRoute().params.email;
  return (
    <>
      <ModalInput
        visible={openMenu}
        closeModal={() => setOpenMenu(false)}
        menu='kelas'
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Kelas'
          email={email}
        />
        <View style={styles.innerContainer}>
          <LecturerClassList email={email} />
        </View>
      </SafeAreaView>
      <Ballon
        icon='plus'
        optionalStyle={styles.balon}
        onPress={() => setOpenMenu(true)}
      />
    </>
  );
}

export default LecturerClass;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    height: ScreenDimension.ScreenHeight + 200,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    marginTop: 30,
    height: ScreenDimension.ScreenHeight - 350,
    alignItems: 'center',
    backgroundColor: 'rgba(153, 153, 153, 0.18)',
    width: '80%',
    paddingVertical: 20,
    paddingTop: -15,
    borderRadius: 16,
  },
  balon: {
    bottom: 50,
  },
});
