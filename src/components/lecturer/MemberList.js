import { FlatList } from 'react-native';
import MemberData from '../micro/lecturer/MemberData';
import DataMember from '../micro/lecturer/DataMember';

function MemberList() {
  const Item = ({ item }) => {
    return (
      <MemberData
        name={item.nama}
        npm={item.npm}
      />
    );
  };
  return (
    <FlatList
      data={DataMember}
      key={(item) => item.id}
      renderItem={Item}
    />
  );
}

export default MemberList;
