import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AttendanceInner from '../../../src/screens/student/attendance/AttendanceInner';
import NavAnimation from '../../animation';
import AttendanceInput from '../../../src/screens/student/attendance/AttendanceInput';

const AttendanceInnerStack = createNativeStackNavigator();
function AttendanceInnerScreen() {
  return (
    <AttendanceInnerStack.Navigator>
      <AttendanceInnerStack.Screen
        name='AttendanceInnerRoot'
        component={AttendanceInner}
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
      {/* <AttendanceInnerStack.Screen
        name='AttendanceInput'
        component={AttendanceInput}
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
    </AttendanceInnerStack.Navigator>
  );
}

export default AttendanceInnerScreen;
