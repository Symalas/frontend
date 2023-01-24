import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import File from '../../micro/student/file/File';
import { useNavigation } from '@react-navigation/native';

function FileList({ email, role, mhsRole }) {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'File Pertama',
    },
    {
      id: 2,
      title: 'File Kedua',
    },
    {
      id: 3,
      title: 'File Ketiga',
    },
    {
      id: 4,
      title: 'File Keempat',
    },
    {
      id: 5,
      title: 'File Kelima',
    },
    {
      id: 6,
      title: 'File Keenam',
    },
    {
      id: 7,
      title: 'File Pertama',
    },
    {
      id: 8,
      title: 'File Kedua',
    },
    {
      id: 9,
      title: 'File Ketiga',
    },
    {
      id: 10,
      title: 'File Keempat',
    },
    {
      id: 11,
      title: 'File Kelima',
    },
    {
      id: 12,
      title: 'File Keenam',
    },
  ];

  const fileOpenHandler = (item) => {
    navigation.navigate('fileInner', {
      title: item,
      role: role,
      mhsRole: mhsRole,
      email: email,
    });
  };

  const Item = ({ item }) => {
    return (
      <File
        title={item.title}
        onPress={() => fileOpenHandler(item.title)}
      />
    );
  };

  return (
    <FlatList
      data={data}
      key={(item) => item.id}
      renderItem={Item}
      numColumns={2}
    />
  );
}

export default FileList;
