import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/FooterComponent';
import Colors from '../static/color';

function Index() {
  const navigation = useNavigation();
  const lecturerHandler = () => {
    navigation.navigate('login', {
      role: 'dosen',
    });
  };
  const studentHandler = () => {
    navigation.navigate('login', {
      role: 'mahasiswa',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgLogo}
            source={require('../../assets/logo-blue.png')}
          />
          <Text style={styles.title}>Pilihan Anda</Text>
        </View>
        {/* Card */}
        <View style={styles.cardContainer}>
          {/* Lecturer */}
          <Pressable onPress={lecturerHandler}>
            <View style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/dosen.png')}
              />
              <Text style={styles.cardTitle}>Dosen</Text>
            </View>
          </Pressable>
          {/* student */}
          <Pressable onPress={studentHandler}>
            <View style={[styles.card, { marginTop: 20 }]}>
              <Image
                style={styles.cardImg}
                source={require('../../assets/mahasiswa.png')}
              />
              <Text style={styles.cardTitle}>Mahasiswa</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Footer extraStyle={{ marginBottom: 30 }} />
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  imgLogo: {
    height: 151,
    width: 127,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: Colors.black,
    marginTop: 50,
  },
  cardContainer: {
    paddingHorizontal: 40,
  },
  card: {
    backgroundColor: Colors.primarBlue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  cardImg: {
    height: 95,
    width: 95,
  },
  cardTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 20,
    color: Colors.white,
  },
});
