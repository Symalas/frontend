import { Text } from 'react-native';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

function TaskAttendanceCard({ name, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}
    >
      <View>
        <Image
          style={styles.fileImg}
          source={require('../../../../../assets/dosen-file.png')}
        />
        <Text style={{ textAlign: 'center', fontFamily: 'PoppinsMedium' }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default TaskAttendanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
  },
  fileImg: {
    height: 120,
    width: 120,
  },
});
