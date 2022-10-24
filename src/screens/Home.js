import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Config from '../config';
import { http } from '../config';

function Home() {
  //   const { HTTP } = Config();
  const [email, setEmail] = useState('');
  const [res, setRes] = useState([]);

  const getData = async () => {
    const data = await AsyncStorage.getItem('data');
    const res = JSON.parse(data).email;
    setEmail(res);
    http
      .get(`/class-mhs/${res}`)
      .then((res) => {
        setRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [res]);

  return (
    <View style={styles.container}>
      <Text>Daftar Kelas yang diikuti {email}</Text>
      {res.map((items, i) => {
        return <Text key={i}>{items.name}</Text>;
      })}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
