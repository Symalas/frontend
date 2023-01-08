import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import TaskCard from '../../micro/student/task/TaskCard';

function TaskCollectionList() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      tugas: 'Matematika Lanjut 1',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 2,
      tugas: 'Teknik Pemrograman Terstruktur',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 3,
      tugas: 'Sistem basis Data',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 4,
      tugas: 'Matematika Sistem Informasi',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 5,
      tugas: 'Bahasa Indonesia',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 6,
      tugas: 'Bahasa Inggris',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 7,
      tugas: 'Bahasa Inggris',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 8,
      tugas: 'Bahasa Inggris',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 9,
      tugas: 'Bahasa Inggris',
      tahun: 'PTA 2022/2023',
    },
    {
      id: 10,
      tugas: 'Bahasa Inggris',
      tahun: 'PTA 2022/2023',
    },
  ];

  const openTask = () => {
    navigation.navigate('taskCollectionInner');
  };

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
            time={item.tahun}
          />
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default TaskCollectionList;
