import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileModal from '../components/ProfileModal';
import Colors from '../static/color';
import ScreenDimension from '../static/dimensions';
import { useNavigation } from '@react-navigation/native';

function UserProfile() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState(false);
  const [title, setTitle] = useState('');
  const navigation = useNavigation();
  const handleChangeName = () => {
    setVisible(true);
    setTitle('Ubah Nama');
    setPassword(false);
  };

  const handleChangePassword = () => {
    setVisible(true);
    setTitle('Ubah Kata Sandi');
    setPassword(true);
  };

  return (
    <>
      <ProfileModal
        visible={visible}
        closeModal={() => setVisible(false)}
        title={title}
        password={password}
      />
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/pp.jpg')}
          />
          <Pressable>
            <Text style={styles.change}>ubah foto profile</Text>
          </Pressable>
        </View>
        {/* Profile */}
        <View style={styles.profileContainer}>
          {/* Name */}
          <View style={styles.profileGroupContainer}>
            <Text style={styles.profileTitle}>Nama</Text>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>Ferdiyansyah</Text>
            </View>
          </View>
          {/* NPM */}
          <View style={styles.profileGroupContainer}>
            <Text style={styles.profileTitle}>NPM</Text>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>10121480</Text>
            </View>
          </View>
          {/* Email */}
          <View style={styles.profileGroupContainer}>
            <Text style={styles.profileTitle}>Email</Text>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>Ferdiyansyah@gmail.com</Text>
            </View>
          </View>
          {/* PW */}
          <View style={styles.profileGroupContainer}>
            <Text style={styles.profileTitle}>Kata sandi</Text>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>********</Text>
              <Pressable onPress={handleChangePassword}>
                <Text style={styles.profileButton}>ubah kata sandi</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable
          style={{ marginLeft: 30, marginTop: 15 }}
          onPress={() => navigation.navigate('index')}
        >
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    width: ScreenDimension.ScreenWidth,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  change: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  profileContainer: {
    paddingHorizontal: 30,
  },
  profileDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
  },
  profileTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
  },
  profileName: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
    marginLeft: 4,
  },
  profileButton: {
    fontFamily: 'PoppinsBold',
    fontSize: 10,
    color: Colors.gray300,
  },
  profileGroupContainer: {
    marginTop: 10,
  },
  logout: {
    color: Colors.red100,
    textDecorationLine: 'underline',
  },
});
