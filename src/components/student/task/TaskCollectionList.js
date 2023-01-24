import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import TaskCard from '../../micro/student/task/TaskCard';

function TaskCollectionList({ role, email }) {
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
  ];

  const openTask = (tugas) => {
    navigation.navigate('taskCollectionInner', {
      tugas: tugas,
      role: role,
      email: email,
    });
  };

  return (
    <FlatList
      data={data}
      key={(items) => items.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => openTask(item.tugas)}
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
