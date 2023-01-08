import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import TaskCard from '../../micro/student/task/TaskCard';

function TaskList() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      tugas: 'Matematika Lanjut 1',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 2,
      tugas: 'Teknik Pemrograman Terstruktur',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 3,
      tugas: 'Sistem basis Data',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 4,
      tugas: 'Matematika Sistem Informasi',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 5,
      tugas: 'Bahasa Indonesia',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 6,
      tugas: 'Bahasa Inggris',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 7,
      tugas: 'Bahasa Inggris',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 8,
      tugas: 'Bahasa Inggris',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 9,
      tugas: 'Bahasa Inggris',
      tanggal: 'Senin, 30 Mei 2022',
    },
    {
      id: 10,
      tugas: 'Bahasa Inggris',
      tanggal: 'Senin, 30 Mei 2022',
    },
  ];

  const Item = ({ item }) => {
    return (
      <TaskCard
        task={item.tugas}
        time={item.tanggal}
      />
    );
  };

  const openTask = () => {};

  return (
    <FlatList
      data={data}
      key={(items) => items.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={openTask}
          activeOpacity={0.9}
        >
          <TaskCard
            task={item.tugas}
            time={item.tanggal}
          />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default TaskList;
