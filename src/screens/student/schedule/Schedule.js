import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import ScheduleMenu from '../../../components/micro/student/schedule/ScheduleMenu';
import { Table, Row, Rows } from 'react-native-table-component';
import { useState } from 'react';
import Ballon from '../../../components/micro/Ballon';
import { useNavigation } from '@react-navigation/native';

function Schedule({ mhsRole }) {
  const navigation = useNavigation();
  const [tableHead, setTableHead] = useState([
    'Hari',
    'Nama Mata Kuliah',
    'Waktu',
    'Ruang',
    'Dosen',
  ]);
  const [tableData, setTableData] = useState([
    ['Selasa', 'Sistem Basis Data 1 **', '1/2/3', 'E214', 'SUHARNI'],
    ['Selasa', 'Matematika Lanjut 1*/**', '4/5', 'E214', 'MARIA T A DEWI'],
    ['Selasa', 'Manajemen & sim 1*', '7/8', 'E226', 'TRINI SAPTARIANI'],
  ]);

  const createScheduleHandler = () => {
    navigation.navigate('CreateSchedule');
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Table style={styles.table}>
          <Row
            style={styles.head}
            data={tableHead}
            textStyle={styles.headTxt}
          />
          <Rows
            style={styles.body}
            data={tableData}
            textStyle={styles.bodyTxt}
          />
        </Table>
      </ScrollView>
      {mhsRole === 'mhs' ? (
        ''
      ) : (
        <Ballon
          onPress={createScheduleHandler}
          icon='plus'
        />
      )}
    </View>
  );
}

export default Schedule;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight - 200,
    backgroundColor: Colors.white,
    width: ScreenDimension.ScreenWidth,
  },
  table: {
    width: 565,
    marginTop: 30,
  },
  head: {
    backgroundColor: Colors.tableHead,
  },
  body: {
    backgroundColor: Colors.primarBlue,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  headTxt: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
  bodyTxt: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
});
