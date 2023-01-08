import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function MemberData({ name, npm }) {
  return (
    <View style={styles.container}>
      <FontAwesome
        name='user-circle-o'
        size={35}
        color='black'
      />
      <View style={styles.dataContainer}>
        <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 16 }}>
          {name}
        </Text>
        <Text
          style={{ fontFamily: 'PoppinsMedium', fontSize: 10, marginTop: -8 }}
        >
          {npm}
        </Text>
      </View>
    </View>
  );
}

export default MemberData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomColor: '#0000004B',
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 9,
  },
  dataContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});
