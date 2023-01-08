import { FlatList } from 'react-native';
import TaskAttendanceInner from '../../micro/lecturer/taskAttendance/TaskAttendanceInner';
import ModalFile from '../../micro/lecturer/taskAttendance/ModalFile';
import { useState } from 'react';
import DataMember from '../../micro/lecturer/DataMember';
import { useNavigation } from '@react-navigation/native';

function TaskInnerList({ page }) {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      tgl: 'Selasa, 12 Mei 2022 / M8',
    },
    {
      id: 2,
      tgl: 'Kamis, 16 Mei 2022 / M9',
    },
    {
      id: 3,
      tgl: 'Rabu, 25 Mei 2022 / M10',
    },
  ];

  const Item = ({ item }) => {
    return (
      <TaskAttendanceInner
        title={page === 'absen' ? item.nama : item.tgl}
        onPress={() =>
          page === 'absen'
            ? navigation.navigate('LecturerAttendanceData', {
                nama: item.nama,
                npm: item.npm,
              })
            : setVisible(true)
        }
      />
    );
  };
  return (
    <>
      <ModalFile
        visible={visible}
        closeModal={() => setVisible(false)}
      />
      <FlatList
        data={page === 'absen' ? DataMember : data}
        key={(item) => item.id}
        renderItem={Item}
      />
    </>
  );
}

export default TaskInnerList;
