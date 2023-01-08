import { FlatList } from 'react-native';
import LecturerClassCard from '../../micro/lecturer/classMenu/LecturerClassCard';
import { useNavigation } from '@react-navigation/native';

function LecturerClassList() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      kelas: '2KA01',
    },
    {
      id: 2,
      kelas: '2KA02',
    },
    {
      id: 3,
      kelas: '2KA03',
    },
    {
      id: 4,
      kelas: '2KA04',
    },
    {
      id: 5,
      kelas: '2KA05',
    },
    {
      id: 6,
      kelas: '2KA06',
    },
  ];

  const openClassHandler = () => {
    navigation.navigate('LecturerMenu');
  };
  const Item = ({ item }) => {
    return (
      <LecturerClassCard
        kelas={item.kelas}
        onPress={openClassHandler}
      />
    );
  };
  return (
    <FlatList
      data={data}
      key={(items) => items.id}
      renderItem={Item}
    />
  );
}

export default LecturerClassList;
