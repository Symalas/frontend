import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import CustomButton from '../../../components/micro/CustomButton';

function CreateSchedule() {
  const form = [
    {
      label: 'Masukkan Hari',
      placeholder: 'Masukkan Hari',
    },
    {
      label: 'Masukkan Mata Kuliah',
      placeholder: 'Masukkan Mata Kuliah',
    },
    {
      label: 'Masukkan Waktu',
      placeholder: 'Masukkan Waktu',
    },
    {
      label: 'Masukkan Ruang',
      placeholder: 'Masukkan Ruang',
    },
    {
      label: 'Masukkan Nama Dosen',
      placeholder: 'Masukkan Nama Dosen',
    },
  ];

  return (
    <SafeAreaView style={styles.conteiner}>
      <HeaderComponent
        title='Buat Jadwal Tetap'
        searchVisible={false}
      />
      <ImageBackground
        style={styles.innerContainer}
        source={require('../../../../assets/schedule-bg.png')}
      >
        <View style={styles.card}>
          {form.map((items, i) => {
            return (
              <View
                key={i}
                style={{ marginTop: 6 }}
              >
                <Text style={styles.label}>{items.label}</Text>
                <TextInput
                  placeholder={items.placeholder}
                  style={styles.input}
                />
              </View>
            );
          })}
          <CustomButton
            title='Masukkan Ke Jadwal'
            style={styles.btn}
            titleStyle={styles.txtBtn}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default CreateSchedule;

const styles = StyleSheet.create({
  conteiner: {
    height: ScreenDimension.ScreenHeight + 60,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  innerContainer: {
    height: '100%',
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  label: {
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    color: Colors.primaryText,
  },
  input: {
    backgroundColor: Colors.grayDaDa,
    color: Colors.gray300,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontFamily: 'PoppinsMedium',
    paddingVertical: 5,
  },
  btn: {
    backgroundColor: Colors.btnSchedule,
    width: 180,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 18,
    borderRadius: 8,
  },
  txtBtn: {
    color: Colors.white,
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
});
