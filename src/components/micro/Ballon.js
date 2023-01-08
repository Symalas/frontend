import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../static/color';
function Ballon({ onPress, icon, optionalStyle }) {
  const plus = () => {
    return (
      <Ionicons
        name='add'
        size={45}
        color={Colors.white}
      />
    );
  };

  const folder = () => {
    return (
      <AntDesign
        name='addfolder'
        size={30}
        color={Colors.white}
      />
    );
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.circle, optionalStyle]}
    >
      {icon === 'plus' ? plus : icon === 'folder' ? folder : ''}
    </Pressable>
  );
}

export default Ballon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    borderRadius: 100,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primarBlue,
  },
});
