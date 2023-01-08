import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import { StyleSheet, View } from 'react-native';
import Colors from '../../static/color';
import ScreenDimension from '../../static/dimensions';
import MemberList from '../../components/lecturer/MemberList';

function MemberListScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent title='Daftar Mahasiswa' />
        <View style={{ marginTop: 20 }}>
          <MemberList />
        </View>
      </SafeAreaView>
    </>
  );
}

export default MemberListScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    height: ScreenDimension.ScreenHeight + 200,
  },
});
