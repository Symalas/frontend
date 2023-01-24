import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../static/color';
import ScreenDimension from '../../static/dimensions';

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
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: ScreenDimension.ScreenWidth * 0.044,
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
});
