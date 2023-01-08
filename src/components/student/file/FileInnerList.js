import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import File from '../../micro/student/file/File';
import { useNavigation } from '@react-navigation/native';

function FileInnerList() {
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
  ];

  const Item = ({ item }) => {
    return <File title={item.title} />;
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

export default FileInnerList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },
//   fileImg: {
//     height: 100,
//     width: 100,
//   },
// });

{
  /* <FlatList
  data={data}
  key={(item) => item.id}
  renderItem={Item}
  numColumns={2}
/>; */
}
