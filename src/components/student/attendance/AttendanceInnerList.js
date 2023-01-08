import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AttendanceCard from '../../micro/student/attendance/AttendanceCard';

function AttendanceInnerList({ matkul }) {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      tugas: 'Matematika Lanjut 1',
      minggu: 'Minggu 1',
    },
    {
      id: 2,
      tugas: 'Teknik Pemrograman Terstruktur',
      minggu: 'Minggu 2',
    },
    {
      id: 3,
      tugas: 'Sistem basis Data',
      minggu: 'Minggu 3',
    },
  ];

  const openAttendance = (minggu) => {
    navigation.navigate('AttendanceInput', {
      image: '',
      tugas: matkul,
      minggu: minggu,
    });
  };

  return (
    <FlatList
      data={data}
      key={(items) => items.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => openAttendance(item.minggu)}
          activeOpacity={0.9}
        >
          <AttendanceCard
            task={matkul}
            time={item.minggu}
          />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default AttendanceInnerList;
