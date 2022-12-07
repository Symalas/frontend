import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../static/color';

function StudentClass({ title }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/kelas.png')}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default StudentClass;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginTop: 10,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
  },
  img: {
    width: 50,
    height: 50,
  },
});
