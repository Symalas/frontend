import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Matkul({ matkul, setting, onPress }) {
  return (
    <>
      <View style={styles.outCointainer}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Image
            style={styles.img}
            source={require('../../../../../assets/dosen-matkul.png')}
          />
          <Text style={styles.txt}>{matkul}</Text>
        </TouchableOpacity>
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={setting}
        >
          <MaterialIcons
            name='arrow-forward-ios'
            size={24}
            color='black'
          />
        </Pressable>
      </View>
    </>
  );
}

export default Matkul;

const styles = StyleSheet.create({
  outCointainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D5DDFF',
    padding: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    width: '90%',
    elevation: 7,
  },
  img: {
    height: 38,
    width: 38,
  },
  txt: {
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    marginLeft: 10,
  },
});
