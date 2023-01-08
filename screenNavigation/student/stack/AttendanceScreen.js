import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Attendance from '../../../src/screens/student/attendance/Attendance';
import AttendanceInner from '../../../src/screens/student/attendance/AttendanceInner';
import NavAnimation from '../../animation';
import AttendanceInnerScreen from './AttendanceInnerScreen';

const AttendanceStack = createNativeStackNavigator();
function AttendanceScreen() {
  return (
    <AttendanceStack.Navigator>
      <AttendanceStack.Screen
        name='AttendanceMenu'
        component={Attendance}
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
      {/* <AttendanceStack.Screen
        name='AttendanceInner'
        component={AttendanceInner}
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
    </AttendanceStack.Navigator>
  );
}

export default AttendanceScreen;
