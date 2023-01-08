import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FileScreen from '../../../src/screens/student/file/FileScreen';
import NavAnimation from '../../animation';

const FileStack = createNativeStackNavigator();
const FileStackScreen = () => {
  return (
    <FileStack.Navigator>
      <FileStack.Screen
        name='FileMenu'
        component={FileScreen}
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
    </FileStack.Navigator>
  );
};

export default FileStackScreen;
