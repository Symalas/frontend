import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AttendanceCard from '../../micro/student/attendance/AttendanceCard';
import ScheduleCard from '../../micro/student/schedule/ScheduleCard';
import { useState } from 'react';
import ModalReplacement from '../../micro/student/schedule/ModalReplacement';
import ScheduleModalCreate from '../../micro/student/schedule/ScheduleModalCreate';

function ScheduleList({ mhsRole }) {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [schData, setSchData] = useState();
  const data = [
    {
      id: 1,
      tugas: 'Matematika Lanjut 1',
      ajar: '16 Nov 2022',
    },
    {
      id: 2,
      tugas: 'Teknik Pemrograman Terstruktur',
      ajar: '30 Oktober 2022',
    },
    {
      id: 3,
      tugas: 'Sistem Basis Data',
      ajar: '31 Oktober 2022',
    },
  ];

  const openScheduleReplacement = (item) => {
    setOpenModal(true);
    setSchData(item);
  };

  const handleEdit = () => {
    setOpenModal(false);
    setOpenCreate(true);
  };

  return (
    <>
      <ModalReplacement
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        datas={schData}
        edit={handleEdit}
        mhsRole={mhsRole}
      />
      <ScheduleModalCreate
        visible={openCreate}
        closeModal={() => setOpenCreate(false)}
        datas={schData}
        status='edit'
      />
      <FlatList
        data={data}
        key={(items) => items.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => openScheduleReplacement(item.tugas)}
            activeOpacity={0.9}
          >
            <ScheduleCard
              task={item.tugas}
              time={item.ajar}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

export default ScheduleList;
