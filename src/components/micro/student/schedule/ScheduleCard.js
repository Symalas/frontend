import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../../static/color';

function ScheduleCard({ task, time }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        numberOfLines={1}
      >
        {task}
      </Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    height: 62,
    // paddingVertical: 10,
    backgroundColor: Colors.primarBlue,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: Colors.white,
  },
});
