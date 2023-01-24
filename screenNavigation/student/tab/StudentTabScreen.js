import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Attendance from '../../../src/screens/student/attendance/Attendance';
import Colors from '../../../src/static/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ScheduleStackScreen from '../stack/ScheduleStackScreen';
import FileScreen from '../../../src/screens/student/file/FileScreen';
import StudentTask from '../../../src/screens/student/task/Task';
const Tab = createBottomTabNavigator();
const StudentTabScreen = ({ route }) => {
  const email = route.params.email;
  const role = route.params.role;
  const mhsRole = route.params.mhsRole;
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
        component={() => (
          <FileScreen
            email={email}
            role={role}
            mhsRole={mhsRole}
          />
        )}
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
        component={() => (
          <StudentTask
            role={role}
            mhsRole={mhsRole}
            email={email}
          />
        )}
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
        initialParams={{ email: email, role: role, mhsRole: mhsRole }}
        name='Jadwal'
        component={
          ScheduleStackScreen
          // email={email}
          // role={role}
          // mhsRole={mhsRole}
        }
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
        component={() => (
          <Attendance
            email={email}
            role={role}
            mhsRole={mhsRole}
          />
        )}
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
