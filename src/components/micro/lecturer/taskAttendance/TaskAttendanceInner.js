import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native';

function TaskAttendanceInner({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Image
          style={styles.img}
          source={require('../../../../../assets/file.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default TaskAttendanceInner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  img: {
    width: 53,
    height: 50,
  },
  txt: {
    borderBottomColor: '#0000004B',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 5,
  },
});
