import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentTask from '../../../src/screens/student/task/Task';
import TaskCollection from '../../../src/screens/student/task/TaskCollection';
import NavAnimation from '../../animation';

const TaskStack = createNativeStackNavigator();
const TaskStackScreen = ({ route }) => {
  console.log('dsfsdfd', route.name);
  if (route === 'Tugas') {
    // setRoutes(false);
  } else {
    // setRoutes(true);
  }
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name='TaskMenu'
        component={StudentTask}
        options={{
          headerShown: false,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      {/* <TaskStack.Screen
        name='taskCollection'
        component={TaskCollection}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      /> */}
    </TaskStack.Navigator>
  );
};

export default TaskStackScreen;
