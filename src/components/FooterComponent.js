import { View, Text, StyleSheet } from 'react-native';
import Colors from '../static/color';
function Footer({ extraStyle, extraTitle }) {
  return (
    <View style={[styles.bottomContainer, extraStyle]}>
      <Text style={[styles.titleFooter, extraTitle]}>
        Created by SyMalas Team
      </Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleFooter: {
    color: Colors.primaryText,
    fontFamily: 'PoppinsMedium',
  },
});
