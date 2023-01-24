import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../../static/color';
import ScreenDimension from '../../../../static/dimensions';

function TaskCard({ task, time }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    height: 62,
    backgroundColor: Colors.primarBlue,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    color: Colors.white,
  },
});
