import { FlatList } from 'react-native';
import DataMember from '../../micro/lecturer/DataMember';
import TaskAttendanceCard from '../../micro/lecturer/taskAttendance/TaskAttendanceCard';
import ScreenDimension from '../../../static/dimensions';
import { useNavigation } from '@react-navigation/native';

function TaskList({ page }) {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      week: 'Minggu 1',
    },
    {
      id: 2,
      week: 'Minggu 2',
    },
    {
      id: 3,
      week: 'Minggu 3',
    },
    {
      id: 4,
      week: 'Minggu 4',
    },
  ];
  const Item = ({ item }) => {
    return (
      <TaskAttendanceCard
        name={page !== 'absen' ? item.nama : item.week}
        onPress={() =>
          navigation.navigate(
            page === 'absen' ? 'LecturerAttendanceInner' : 'LecturerTaskInner',
            {
              name: item.nama,
            },
          )
        }
      />
    );
  };
  return (
    <FlatList
      data={page !== 'absen' ? DataMember : data}
      key={(item) => item.id}
      renderItem={Item}
      numColumns={2}
    />
  );
}

export default TaskList;
