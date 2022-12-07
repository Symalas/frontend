import { Text, View, StyleSheet, Pressable } from 'react-native';
import Colors from '../static/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('fileScreen');
          }}
          style={styles.buttonConrainer}
        >
          <MaterialCommunityIcons
            name='file-document-multiple-outline'
            size={24}
            color={Colors.white}
          />
          <Text style={styles.title}>File</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('taskScreen');
          }}
          style={styles.buttonConrainer}
        >
          <FontAwesome5
            name='tasks'
            size={24}
            color={Colors.white}
          />
          <Text style={styles.title}>Tugas</Text>
        </Pressable>
        <Pressable style={styles.buttonConrainer}>
          <MaterialCommunityIcons
            name='timetable'
            size={24}
            color={Colors.white}
          />
          <Text style={styles.title}>Jadwal</Text>
        </Pressable>
        <Pressable style={styles.buttonConrainer}>
          <MaterialIcons
            name='add-task'
            size={24}
            color={Colors.white}
          />
          <Text style={styles.title}>Absen</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: Colors.primarBlue,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonConrainer: {
    alignItems: 'center',
  },
});
