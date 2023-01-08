import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavAnimation from '../../animation';
import StudentTabScreen from '../tab/StudentTabScreen';

const StudentStack = createNativeStackNavigator();
const StudentStackScreen = ({ route }) => {
  return (
    <StudentStack.Navigator>
      <StudentStack.Screen
        name='fileScreenStack'
        component={StudentTabScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.title,
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        })}
      />
    </StudentStack.Navigator>
  );
};

export default StudentStackScreen;
