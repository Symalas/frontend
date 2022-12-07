import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/screens';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/register';
import Home from './src/screens/Home';
import FileScreen from './src/screens/student/FileScreen';
import PasswordForgotEmail from './src/screens/auth/forgotPassword/EmailVerification';
import PasswordForgotOtp from './src/screens/auth/forgotPassword/Otp';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Colors from './src/static/color';
import PasswordForgot from './src/screens/auth/forgotPassword/Password';
import PasswordForgotSuccess from './src/screens/auth/forgotPassword/success';
import {
  useNavigation,
  useRoute,
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import StudentTask from './src/screens/student/Task';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Schedule from './src/screens/student/Schedule';
import Attendance from './src/screens/student/Attendance';
import TaskCollection from './src/screens/student/TaskCollection';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const FileStack = createNativeStackNavigator();
const FileStackScreen = () => {
  return (
    <FileStack.Navigator>
      <TaskStack.Screen
        name='FileMenu'
        component={FileScreen}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </FileStack.Navigator>
  );
};

const TaskStack = createNativeStackNavigator();
const TaskStackScreen = () => {
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
            open: config,
            close: config,
          },
        }}
      />
      <TaskStack.Screen
        name='taskCollection'
        component={TaskCollection}
        options={{
          headerShown: true,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </TaskStack.Navigator>
  );
};

const StudentView = () => {
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
        component={Schedule}
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
        component={Attendance}
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

// let BackOption = true;
const BackOption = () => {};

const StudentStack = createNativeStackNavigator();
const StudentStackScreen = () => {
  let header;
  const route = useRoute();
  const screenName = route.name;
  if (screenName === 'taskCollection') {
    header = false;
  } else {
    header = true;
  }
  console.log('its', screenName);
  return (
    <StudentStack.Navigator>
      <StudentStack.Screen
        name='fileScreenStack'
        component={StudentView}
        options={{
          headerShown: header,
          title: '',
          headerShadowVisible: false,
          headerTransparent: true,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </StudentStack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/Poppins/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/Poppins/Poppins-Bold.ttf'),
  });

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded]);

  //   if (!fontsLoaded) {
  //     return null;
  //   }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='index'
            component={Index}
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
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
                open: config,
                close: config,
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
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name='home'
            component={Home}
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          {/* Student */}
          <Stack.Screen
            name='fileScreen'
            component={StudentStackScreen}
            options={{
              headerShown: false,
              title: '',
              headerShadowVisible: false,
              headerTransparent: true,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
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
                open: config,
                close: config,
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
                open: config,
                close: config,
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
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name='forgotSuccess'
            component={PasswordForgotSuccess}
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
