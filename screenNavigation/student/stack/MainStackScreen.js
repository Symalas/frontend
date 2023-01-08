import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../../../src/screens';
import PasswordForgotEmail from '../../../src/screens/auth/forgotPassword/EmailVerification';
import PasswordForgotOtp from '../../../src/screens/auth/forgotPassword/Otp';
import PasswordForgot from '../../../src/screens/auth/forgotPassword/Password';
import PasswordForgotSuccess from '../../../src/screens/auth/forgotPassword/success';
import Login from '../../../src/screens/auth/Login';
import Register from '../../../src/screens/auth/register';
import Home from '../../../src/screens/Home';
import UserProfile from '../../../src/screens/Profile';
import Colors from '../../../src/static/color';
import NavAnimation from '../../animation';
import StudentTabScreen from '../tab/StudentTabScreen';
import AttendanceInnerScreen from './AttendanceInnerScreen';
import AttendanceInput from '../../../src/screens/student/attendance/AttendanceInput';
import TaskCollection from '../../../src/screens/student/task/TaskCollection';
import TaskCollectionInner from '../../../src/screens/student/task/TaskCollectionInner';
import FileInnerScreen from '../../../src/screens/student/file/FileInnerScreen';
import CreateSchedule from '../../../src/screens/student/schedule/CreateSchedule';
import ClassMember from '../../../src/screens/student/classMenu/ClassMember';
import Camera from '../../../src/components/Camera';
import CameraMenu from '../../../src/components/Camera';
import AttendanceInner from '../../../src/screens/student/attendance/AttendanceInner';
import LecturerClass from '../../../src/screens/lecturer/classMenu/Index';
import LecturerMenu from '../../../src/screens/lecturer/LecturerMenu';
import LecturerTask from '../../../src/screens/lecturer/Task/LecturerTask';
import MemberList from '../../../src/screens/lecturer/MemberListScreen';
import MemberListScreen from '../../../src/screens/lecturer/MemberListScreen';
import LecturerTaskInner from '../../../src/components/lecturer/task/LecturerTaskInner';
import LecturerAttendance from '../../../src/screens/lecturer/attendance/LecturerAttendance';
import AttendanceInnerL from '../../../src/screens/lecturer/attendance/AttendanceInnerL';
import AttendanceData from '../../../src/screens/lecturer/attendance/AttendanceData';
const Stack = createNativeStackNavigator();
const MainStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='index'
        component={Index}
        options={{
          headerShown: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />

      <Stack.Screen
        name='login'
        component={Login}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.primarBlue,
          },
          headerTintColor: Colors.white,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='register'
        component={Register}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='home'
        component={Home}
        options={{
          headerShown: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      {/* Student */}
      <Stack.Screen
        name='fileScreen'
        component={StudentTabScreen}
        options={({ route }) => ({
          headerShown: route.params.header,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        })}
      />

      {/* Forgots */}
      <Stack.Screen
        name='forgotEmail'
        component={PasswordForgotEmail}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='forgotOtp'
        component={PasswordForgotOtp}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='forgotPassword'
        component={PasswordForgot}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='forgotSuccess'
        component={PasswordForgotSuccess}
        options={{
          headerShown: false,
          transitionSpec: {
            open: NavAnimation,
            close: NavAnimation,
          },
        }}
      />
      <Stack.Screen
        name='userProfile'
        component={UserProfile}
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
      />

      {/* File */}
      <Stack.Screen
        name='fileInner'
        component={FileInnerScreen}
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
      />

      {/* Task */}
      <Stack.Screen
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
      />
      <Stack.Screen
        name='taskCollectionInner'
        component={TaskCollectionInner}
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
      />
      {/* Attendance Inner */}
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />

      {/* Schedule */}
      <Stack.Screen
        name='CreateSchedule'
        component={CreateSchedule}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />

      {/* Class */}
      <Stack.Screen
        name='ClassSetting'
        component={ClassMember}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTintColor: Colors.white,
          headerTransparent: true,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='Camera'
        component={CameraMenu}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />

      {/* DOSEN */}
      <Stack.Screen
        name='LecturerClass'
        component={LecturerClass}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerMenu'
        component={LecturerMenu}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerTask'
        component={LecturerTask}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerMemberList'
        component={MemberListScreen}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerTaskInner'
        component={LecturerTaskInner}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      {/* Absen */}
      <Stack.Screen
        name='LecturerAttendance'
        component={LecturerAttendance}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerAttendanceInner'
        component={AttendanceInnerL}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          // headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name='LecturerAttendanceData'
        component={AttendanceData}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: Colors.white,
          animation: 'fade',
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
