import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../components/HeaderComponent';
import TaskList from '../../../components/student/task/TaskList';
import Colors from '../../../static/color';
import ScreenDimension from '../../../static/dimensions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalTaskInput from '../../../components/student/task/ModalTaskInput';
import { useState } from 'react';

function StudentTask({ role, mhsRole, email }) {
  const [visible, setVisible] = useState(false);
  const Balloon = () => {
    const navigation = useNavigation();

    const handleTaskCollectionMenu = () => {
      navigation.navigate('taskCollection', {
        role: role,
        email: email,
        mhsRole: mhsRole,
      });
      navigation.setOptions({ title: 'anjay' });
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

  const TaskListButton = ({ visibleStyle }) => {
    const handleTaskInput = () => {
      setVisible(true);
    };
    return (
      <Pressable
        onPress={handleTaskInput}
        style={[styles.balloonContainer, { marginRight: 5 }, visibleStyle]}
      >
        <Text style={[styles.balloonTitle, { marginLeft: 0 }]}>
          Tambah Tugas
        </Text>
      </Pressable>
    );
  };

  return (
    <>
      <ModalTaskInput
        visible={visible}
        closeModal={() => setVisible(false)}
      />
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          title='Tugas'
          email={email}
          role={role}
        />
        <View style={styles.innerContainer}>
          <TaskList />
        </View>
        <View style={styles.buttonContainer}>
          <TaskListButton
            visibleStyle={
              mhsRole === 'mhs' ? { display: 'none' } : { display: 'flex' }
            }
          />
          <Balloon />
        </View>
      </SafeAreaView>
    </>
  );
}

export default StudentTask;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight,
    paddingTop: 40,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    height: ScreenDimension.ScreenHeight - 320,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  balloonContainer: {
    backgroundColor: Colors.primarBlue,
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  balloonTitle: {
    fontFamily: 'PoppinsMedium',
    marginLeft: 8,
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    color: Colors.white,
  },
});
