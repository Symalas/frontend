import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../../static/color';

function LecturerClassCard({ kelas, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={styles.container}
    >
      <Text style={styles.txt}>{kelas}</Text>
    </TouchableOpacity>
  );
}

export default LecturerClassCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primarBlue,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginTop: 15,
    elevation: 8,
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'PoppinsMedium',
    fontSize: 24,
    color: Colors.white,
  },
});
