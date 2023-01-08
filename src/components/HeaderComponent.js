import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import Colors from '../static/color';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function HeaderComponent({ title, extraTitleStyle, searchVisible, subTitle }) {
  const navigation = useNavigation();
  const profileHandler = () => {
    navigation.navigate('userProfile');
  };
  return (
    <View style={styles.container}>
      {/* Sini */}
      <View style={styles.titleContainer}>
        <View>
          <Text style={[styles.title, extraTitleStyle]}>{title}</Text>
          <Text
            style={[
              styles.subTitle,
              subTitle === undefined
                ? { display: 'none' }
                : { display: 'flex' },
            ]}
          >
            {subTitle}
          </Text>
        </View>
        <Pressable onPress={profileHandler}>
          <Image
            style={styles.img}
            source={require('../../assets/pp.jpg')}
          />
        </Pressable>
      </View>
      {/* Sampe */}
      {/* Search */}
      <View
        style={[
          styles.searchContainer,
          searchVisible === false ? { display: 'none' } : '',
        ]}
      >
        <Ionicons
          name='search'
          size={20}
          color='#5C5B85'
        />
        <TextInput
          style={styles.input}
          placeholder='Cari'
          placeholderTextColor='#0000005C'
        />
      </View>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.headerTitle,
    fontFamily: 'PoppinsBold',
    fontSize: 25,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#DDE1EB',
  },
  input: {
    marginLeft: 8,
    height: 40,
    width: '90%',
  },
  subTitle: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: Colors.headerTitle,
  },
});
