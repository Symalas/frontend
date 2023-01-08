import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavAnimation from '../../animation';
import Schedule from '../../../src/screens/student/schedule/Schedule';
import ReplacementSchedule from '../../../src/screens/student/schedule/ReplacementSchedule';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../../src/components/HeaderComponent';
import ScheduleMenu from '../../../src/components/micro/student/schedule/ScheduleMenu';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../../src/static/color';
import { StyleSheet } from 'react-native';
import ScreenDimension from '../../../src/static/dimensions';

const ScheduleStack = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
function ScheduleStackScreen() {
  const route = useRoute();
  const path = route.name;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          searchVisible={false}
          title='Jadwal'
        />
        {/* <ScheduleMenu path={path} /> */}
      </SafeAreaView>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Colors.primarBlue,
          tabBarInactiveTintColor: Colors.gray300,
          tabBarActiveBackgroundColor: Colors.red100,
          tabBarStyle: {
            backgroundColor: Colors.white,
            borderRadius: 8,
            marginTop: 10,
          },
          tabBarLabelStyle: {
            fontFamily: 'PoppinsBold',
            fontSize: 14,
            textTransform: 'capitalize',
          },
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {},
          swipeEnabled: false,
        })}
        style={{ backgroundColor: Colors.white }}
        // tabBar={(props) => (
        //   <ScheduleMenu
        //     {...props}
        //     path={path}
        //   />
        // )}
      >
        <Tab.Screen
          name='mainSchedule'
          component={Schedule}
          options={{ tabBarLabel: 'Jadwal Tetap' }}
        />
        <Tab.Screen
          name='replacementSchedule'
          component={ReplacementSchedule}
          options={{ tabBarLabel: 'Jadwal Pengganti' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default ScheduleStackScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
});
