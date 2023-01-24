import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AttendanceCard from '../../micro/student/attendance/AttendanceCard';

function AttendanceList({ email, role }) {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      tugas: 'Matematika Lanjut 1',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 2,
      tugas: 'Teknik Pemrograman Terstruktur',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 3,
      tugas: 'Sistem Basis Data',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 4,
      tugas: 'Matematika Sistem Informasi',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 5,
      tugas: 'Bahasa Indonesia',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 6,
      tugas: 'Bahasa Inggris',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 7,
      tugas: 'Bahasa Inggris',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 8,
      tugas: 'Bahasa Inggris',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 9,
      tugas: 'Bahasa Inggris',
      ajar: 'PTA 2022/2023',
    },
    {
      id: 10,
      tugas: 'Bahasa Inggris',
      ajar: 'PTA 2022/2023',
    },
  ];

  const openAttendance = (item) => {
    navigation.navigate('AttendanceInner', {
      matkul: item,
      email: email,
      role: role,
    });
  };

  return (
    <FlatList
      data={data}
      key={(items) => items.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => openAttendance(item.tugas)}
          activeOpacity={0.9}
        >
          <AttendanceCard
            task={item.tugas}
            time={item.ajar}
          />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default AttendanceList;
