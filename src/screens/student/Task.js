import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import TaskList from '../../components/student/TaskList';
import Colors from '../../static/color';
import ScreenDimension from '../../static/dimensions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function StudentTask() {
  const Balloon = () => {
    const navigation = useNavigation();

    const handleTaskCollectionMenu = () => {
      navigation.navigate('taskCollection');
    };

    return (
      <Pressable
        onPress={handleTaskCollectionMenu}
        style={styles.balloonContainer}
      >
        <MaterialCommunityIcons
          name='checkbox-multiple-marked-circle-outline'
          size={20}
          color={Colors.white}
        />
        <Text style={styles.balloonTitle}>Kumpulkan Tugas</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title='Tugas' />
      <View style={styles.innerContainer}>
        <TaskList />
      </View>
      <Balloon />
    </SafeAreaView>
  );
}

export default StudentTask;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    paddingTop: 40,
  },
  innerContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 320,
  },
  balloonContainer: {
    backgroundColor: Colors.primarBlue,
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  balloonTitle: {
    fontFamily: 'PoppinsMedium',
    marginLeft: 8,
    fontSize: 12,
    color: Colors.white,
  },
});
