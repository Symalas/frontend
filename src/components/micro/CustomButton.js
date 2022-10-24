import { Pressable, View, Text } from 'react-native';

function CustomButton({ title, style, onPress, titleStyle, android_ripple }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        android_ripple={android_ripple}
      >
        <Text style={titleStyle}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;
