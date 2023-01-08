import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Matkul from '../../micro/lecturer/matkul/Matkul';
import { useNavigation } from '@react-navigation/native';

function MatkulList() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      matkul: 'Matematika 2022-2023',
    },
    {
      id: 2,
      matkul: 'Pancasila 2022-2023',
    },
    {
      id: 3,
      matkul: 'Ilmu Sosial 2022-2023',
    },
    {
      id: 4,
      matkul: 'B. Indonesia 2022-2023',
    },
    {
      id: 5,
      matkul: 'B. Indonesia 2022-2023',
    },
    {
      id: 6,
      matkul: 'B. Indonesia 2022-2023',
    },
    {
      id: 7,
      matkul: 'B. Indonesia 2022-2023',
    },
    {
      id: 8,
      matkul: 'B. Indonesia 2022-2023',
    },
    {
      id: 9,
      matkul: 'B. Indonesia 2022-2023',
    },
  ];

  const openClasHandler = () => {
    navigation.navigate('LecturerClass');
  };

  const openSettingHandler = () => {
    navigation.navigate('LecturerMemberList');
  };

  const Item = ({ item }) => {
    return (
      <Matkul
        matkul={item.matkul}
        onPress={openClasHandler}
        setting={openSettingHandler}
      />
    );
  };
  return (
    <>
      <FlatList
        data={data}
        key={(item) => item.id}
        renderItem={Item}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

export default MatkulList;
