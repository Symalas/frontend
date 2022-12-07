import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import StudentClass from '../micro/StudentClass';
import { useNavigation } from '@react-navigation/native';

function HomeComponent() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: '2KA01 - 2022/2023',
    },
    {
      id: 2,
      title: '2KA02 - 2022/2023',
    },
    {
      id: 3,
      title: '2KA03 - 2022/2023',
    },
    {
      id: 4,
      title: '2KA04 - 2022/2023',
    },
    {
      id: 5,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 6,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 7,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 8,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 9,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 10,
      title: '2KA05 - 2022/2023',
    },
    {
      id: 11,
      title: '2KA011 - 2022/2023',
    },
    {
      id: 12,
      title: '2KA012 - 2022/2023',
    },
    {
      id: 13,
      title: '2KA013 - 2022/2023',
    },
  ];

  const Item = ({ item }) => {
    return <StudentClass title={item.title} />;
  };

  const openClass = () => {
    navigation.navigate('fileScreen');
  };

  return (
    <FlatList
      data={data}
      key={(item) => item.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={openClass}
          activeOpacity={0.7}
        >
          <StudentClass title={item.title} />
        </TouchableOpacity>
      )}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default HomeComponent;
