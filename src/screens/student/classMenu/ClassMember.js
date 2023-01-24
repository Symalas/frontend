import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenDimension from '../../../static/dimensions';
import Colors from '../../../static/color';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../../components/micro/CustomButton';
import { useState } from 'react';
import EditClassMember from '../../../components/student/classMenu/EditClassMember';
import EditClassName from '../../../components/student/classMenu/EditClassName';
import ModalConfirm from '../../../components/micro/ModalConfirm';
import { useRoute } from '@react-navigation/native';

function ClassMember() {
  const [visible, setVisible] = useState(false);
  const [deleteValidation, setDeleteValidation] = useState(false);
  const [classEdit, setClassEdit] = useState(false);
  const [name, setName] = useState();
  const [npm, setNpm] = useState();
  const route = useRoute();
  const mhsRole = route.params.mhsRole;
  const admin = [
    {
      name: 'Nicholaus Risang',
      npm: '10121996',
      status: 'Super Admin',
    },
    {
      name: 'Ferdiyansyah',
      npm: '10121480',
    },
  ];
  const member = [
    {
      name: 'Bhakti Satria',
      npm: '10121260',
    },
    {
      name: 'Dylan Trino',
      npm: '10121362',
    },
    {
      name: 'Genta Swarawisesa EP',
      npm: '10121503',
    },
    {
      name: 'Rehan Kurnia',
      npm: '11121089',
    },
    {
      name: 'Wianda Rafa Afifah',
      npm: '11121292',
    },
    {
      name: 'Zelits Adi Putri',
      npm: '11121331',
    },
  ];
  return (
    <>
      <EditClassMember
        visible={visible}
        closeModal={() => setVisible(false)}
        name={name}
        npm={npm}
        deleteMember={() => setDeleteValidation(true)}
      />
      <ModalConfirm
        visible={deleteValidation}
        cancel={() => setDeleteValidation(false)}
        deleteClick={() => {
          setDeleteValidation(false);
          setVisible(false);
        }}
      />
      <EditClassName
        visible={classEdit}
        closeModal={() => setClassEdit(false)}
      />
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <View style={styles.blueSideContainer}>
          <Image source={require('../../../../assets/people.png')} />
          <Text style={styles.classTitle}>2KA01-2022/2023</Text>
          <Pressable
            style={
              mhsRole === 'mhs' ? { display: 'none' } : { display: 'flex' }
            }
            onPress={() => setClassEdit(true)}
          >
            <Text style={styles.classEdit}>edit nama kelas</Text>
          </Pressable>
          <Text style={styles.classCode}>Kode Kelas: KA2301</Text>
        </View>
        {/* White Side */}
        <View style={styles.whiteSideContainer}>
          <Text style={styles.memberTitle}>Admin Kelas [2]</Text>
          {admin.map((items, i) => {
            return (
              <View
                style={styles.memberDataContainer}
                key={i}
              >
                <View style={styles.memberDataLeft}>
                  <FontAwesome
                    name='user-circle-o'
                    size={35}
                    color='black'
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.memberData, { fontSize: 16 }]}>
                      {items.name}
                    </Text>
                    <Text
                      style={[
                        styles.memberData,
                        { fontSize: 10, marginTop: -5 },
                      ]}
                    >
                      {items.npm}
                    </Text>
                  </View>
                </View>
                {i === 0 ? (
                  <Text style={styles.status}>{items.status}</Text>
                ) : (
                  <CustomButton
                    title='edit'
                    style={[
                      styles.button,
                      mhsRole === 'super-admin'
                        ? { display: 'flex' }
                        : { display: 'none' },
                    ]}
                    titleStyle={styles.titleBtn}
                    onPress={() => {
                      setVisible(true);
                      setName(items.name);
                      setNpm(items.npm);
                    }}
                  />
                )}
              </View>
            );
          })}
          {/* MEMBER */}
          <Text style={[styles.memberTitle, { marginTop: 20 }]}>
            Anggota Kelas [38]
          </Text>
          {member.map((items, i) => {
            return (
              <View
                style={styles.memberDataContainer}
                key={i}
              >
                <View style={styles.memberDataLeft}>
                  <FontAwesome
                    name='user-circle-o'
                    size={35}
                    color='black'
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.memberData, { fontSize: 16 }]}>
                      {items.name}
                    </Text>
                    <Text
                      style={[
                        styles.memberData,
                        {
                          fontSize: ScreenDimension.ScreenWidth * 0.025,
                          marginTop: -5,
                        },
                      ]}
                    >
                      {items.npm}
                    </Text>
                  </View>
                </View>
                <CustomButton
                  title='edit'
                  style={[
                    styles.button,
                    mhsRole === 'mhs'
                      ? { display: 'none' }
                      : { display: 'flex' },
                  ]}
                  titleStyle={styles.titleBtn}
                  onPress={() => {
                    setVisible(true);
                    setName(items.name);
                    setNpm(items.npm);
                  }}
                />
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
}

export default ClassMember;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimension.ScreenHeight + 60,
    backgroundColor: Colors.primarBlue,
  },
  blueSideContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  classTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: ScreenDimension.ScreenWidth * 0.054,
    marginTop: 3,
    color: Colors.white,
  },
  classEdit: {
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  classCode: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: ScreenDimension.ScreenWidth * 0.039,
    color: Colors.white,
    marginTop: 13,
  },
  whiteSideContainer: {
    height: '100%',
    backgroundColor: Colors.white,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  memberDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  memberTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: ScreenDimension.ScreenWidth * 0.039,
  },
  memberDataLeft: {
    flexDirection: 'row',
    marginTop: 8,
  },
  memberData: {
    fontFamily: 'PoppinsMedium',
  },
  status: {
    fontFamily: 'PoppinsMedium',
    color: Colors.primarBlue,
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
  button: {
    backgroundColor: Colors.primarBlue,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  titleBtn: {
    fontFamily: 'PoppinsMedium',
    fontSize: ScreenDimension.ScreenWidth * 0.03,
    color: Colors.white,
  },
});
