import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FileStackScreen from '../stack/FileStackScreen';
import TaskStackScreen from '../stack/TaskStackScreen';
import Schedule from '../../../src/screens/student/schedule/Schedule';
import Attendance from '../../../src/screens/student/attendance/Attendance';
import Colors from '../../../src/static/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AttendanceScreen from '../stack/AttendanceScreen';
import ScheduleStackScreen from '../stack/ScheduleStackScreen';
const Tab = createBottomTabNavigator();
const StudentTabScreen = ({ route }) => {
  console.log('add', route.name);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0B1B69',
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.primarBlue,
          padding: 10,
          height: 70,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'PoppinsMedium',
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name='File'
        component={FileStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='file-document-multiple-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Tugas'
        component={TaskStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name='tasks'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Jadwal'
        component={ScheduleStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='timetable'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Absen'
        component={AttendanceScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name='add-task'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StudentTabScreen;
