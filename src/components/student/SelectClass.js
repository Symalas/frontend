import { Image, ScrollView, View } from 'react-native';

function SelectClass() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={require('../../../assets/kelas.svg')} />
        </View>
      </ScrollView>
    </View>
  );
}

export default SelectClass;
