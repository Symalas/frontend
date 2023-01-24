import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import TaskInnerCard from '../../../components/micro/student/task/TaskInnerCard';
import { useRoute } from '@react-navigation/native';

const mtkData = [
  {
    date: '17 Nov',
    title: 'Mencari Nilai Determinan',
    deadline: 'Sampai 20 Januari 2023',
    status: 0,
  },
  {
    date: '21 Nov',
    title: 'Mencari Invers Suatu Matriks',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '04 Des',
    title: 'Mencari Nilai Matriks',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '03 Sep',
    title: 'Mencari Nilai Vektor',
    deadline: 'Sampai 03 Januari 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'Menentukan Ruang Vektor',
    deadline: 'Sampai 17 November 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'Menentukan Persamaan Garis',
    deadline: 'Sampai 30 Juli 2023',
    status: 1,
  },
];
const sbdData = [
  {
    date: '17 Nov',
    title: 'DML',
    deadline: 'Sampai 20 Januari 2023',
    status: 0,
  },
  {
    date: '21 Nov',
    title: 'DDL',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '04 Des',
    title: 'DCL ',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '03 Sep',
    title: 'Pengantar Big Data',
    deadline: 'Sampai 03 Januari 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'Normalisasi',
    deadline: 'Sampai 17 November 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'ERD',
    deadline: 'Sampai 30 Juli 2023',
    status: 1,
  },
];
const tptData = [
  {
    date: '17 Nov',
    title: 'Variabel & Tipe Data',
    deadline: 'Sampai 20 Januari 2023',
    status: 0,
  },
  {
    date: '21 Nov',
    title: 'Function',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '04 Des',
    title: 'Percabangan',
    deadline: 'Sampai 24 Januari 2023',
    status: 0,
  },
  {
    date: '03 Sep',
    title: 'Pengulangan',
    deadline: 'Sampai 03 Januari 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'Pointer',
    deadline: 'Sampai 17 November 2023',
    status: 1,
  },
  {
    date: '04 Des',
    title: 'Pengantar OOP',
    deadline: 'Sampai 30 Juli 2023',
    status: 1,
  },
];

function TaskCollectionInner() {
  const route = useRoute().params;
  const email = route.email;
  const role = route.role;
  const tugas = route.tugas;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Pengumpulan Tugas'
          searchVisible={false}
          subTitle={tugas}
          extraTitleStyle={styles.headerTitle}
          email={email}
          role={role}
        />
        {/* Bleum Terkumpul */}
        <View style={styles.innerContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.taskTitle}>Belum Terkumpul</Text>
            <ScrollView
              style={styles.cardContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {tugas === 'Matematika Lanjut 1'
                ? mtkData.map((items, i) => {
                    return items.status === 0 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })
                : tugas === 'Teknik Pemrograman Terstruktur'
                ? tptData.map((items, i) => {
                    return items.status === 0 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })
                : sbdData.map((items, i) => {
                    return items.status === 0 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })}
            </ScrollView>
          </View>
        </View>
        {/* Sudah Terkumpul */}
        <View style={[styles.innerContainer, { marginTop: 30 }]}>
          <View style={styles.topContainer}>
            <Text style={styles.taskTitle}>Sudah Terkumpul</Text>
            <ScrollView
              style={styles.cardContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {tugas === 'Matematika Lanjut 1'
                ? mtkData.map((items, i) => {
                    return items.status === 1 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })
                : tugas === 'Teknik Pemrograman Terstruktur'
                ? tptData.map((items, i) => {
                    return items.status === 1 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })
                : sbdData.map((items, i) => {
                    return items.status === 1 ? (
                      <TaskInnerCard
                        key={i}
                        title={items.title}
                        deadline={items.deadline}
                        status={items.status}
                        date={items.date}
                      />
                    ) : (
                      ''
                    );
                  })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default TaskCollectionInner;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 50,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: ScreenDimension.ScreenWidth * 0.0535,
  },
  innerContainer: {
    paddingHorizontal: 30,
  },
  topContainer: {
    marginTop: 30,
  },
  cardContainer: {},
  taskTitle: {
    fontFamily: 'PoppinsRegular',
    fontSize: ScreenDimension.ScreenWidth * 0.034,
    borderBottomColor: Colors.taskLine,
    borderBottomWidth: 2,
    alignSelf: 'flex-start',
    paddingRight: 15,
  },
});
