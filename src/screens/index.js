import CustomButton from '../components/micro/CustomButton';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Index() {
  const navigation = useNavigation();
  const studentPressHandler = () => {
    navigation.navigate('login', {
      role: 'mahasiswa',
    });
  };

  const lecturerPressHHandler = () => {
    navigation.navigate('login', {
      role: 'dosen',
    });
  };

  return (
    <View style={styles.container}>
      <Text>SYMALAS</Text>
      <CustomButton
        style={styles.button}
        title={'Mahasiswa'}
        titleStyle={styles.title}
        onPress={studentPressHandler}
      />
      <CustomButton
        style={styles.button}
        title={'Dosen'}
        titleStyle={styles.title}
        onPress={lecturerPressHHandler}
      />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2AC3BE',
    padding: 10,
    borderRadius: 6,
    width: 120,
    marginTop: 5,
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
