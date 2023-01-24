import { useNavigation, useRoute } from '@react-navigation/native';

function Navigation() {
  const navigation = useNavigation();

  const navigationRoute = (path, role, mhsRole = '', email = '') => {
    navigation.navigate(path, {
      role: role,
      mhsRole: mhsRole,
      email: email,
    });
  };

  return {
    navigationRoute,
  };
}

export default Navigation;
