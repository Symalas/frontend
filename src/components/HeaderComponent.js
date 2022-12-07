import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Colors from '../static/color';
import { Ionicons } from '@expo/vector-icons';

function HeaderComponent({ title, extraTitleStyle }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, extraTitleStyle]}>{title}</Text>
        <Image
          style={styles.img}
          source={require('../../assets/pp.jpg')}
        />
      </View>
      {/* Search */}
      <View style={styles.searchContainer}>
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
    color: '#083056',
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
});
