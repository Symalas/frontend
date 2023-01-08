import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function File({ title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}
    >
      <View>
        <Image
          style={styles.fileImg}
          source={require('../../../../../assets/file.png')}
        />
        <Text style={{ textAlign: 'center', fontFamily: 'PoppinsMedium' }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default File;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
  },
  fileImg: {
    height: 120,
    width: 120,
  },
});
