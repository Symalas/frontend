import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../../../../static/color';
import { useNavigation, useRoute } from '@react-navigation/native';

function ScheduleMenu({ path }) {
  const route = useRoute();
  const navigation = useNavigation();
  // const path = route.name;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('mainSchedule')}
        style={[
          styles.containerTetap,
          path === 'mainSchedule'
            ? { backgroundColor: Colors.primarBlue }
            : { backgroundColor: Colors.white },
        ]}
      >
        <Text
          style={[
            styles.title,
            path === 'mainSchedule'
              ? { color: Colors.white }
              : { color: Colors.black },
          ]}
        >
          {path}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('replacementSchedule')}
        style={[
          styles.containerPengganti,
          path !== 'mainSchedule'
            ? { backgroundColor: Colors.primarBlue }
            : { backgroundColor: Colors.white },
        ]}
      >
        <Text
          style={[
            styles.title,
            path !== 'mainSchedule'
              ? { color: Colors.white }
              : { color: Colors.black },
          ]}
        >
          {path}
        </Text>
      </Pressable>
    </View>
  );
}

export default ScheduleMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
    height: 37,
    marginTop: 17,
  },
  containerTetap: {
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.black,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPengganti: {
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.black,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
  },
});

// import { Animated, View, TouchableOpacity } from 'react-native';

// function ScheduleMenu({ state, descriptors, navigation, position }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const path = route.name;
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true });
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = position.interpolate({
//           inputRange,
//           outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole='button'
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={[
//               styles.containerTetap,
//               path === 'mainSchedule'
//                 ? { backgroundColor: Colors.primarBlue }
//                 : { backgroundColor: Colors.white },
//             ]}
//           >
//             <Animated.Text style={{ opacity }}>{label}</Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// export default ScheduleMenu;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//     paddingHorizontal: 30,
//     height: 37,
//     marginTop: 17,
//   },
//   containerTetap: {
//     width: '50%',
//     borderWidth: 1,
//     borderColor: Colors.black,
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   containerPengganti: {
//     width: '50%',
//     borderWidth: 1,
//     borderColor: Colors.black,
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontFamily: 'PoppinsBold',
//     fontSize: 14,
//   },
// });
