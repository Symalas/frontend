import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
} from 'react-native';
import Colors from '../../../../static/color';
import TaskUploadModal from './TaskUploadModal';
import { useState } from 'react';
import ScreenDimension from '../../../../static/dimensions';

function TaskInnerCard({ title, deadline, status, date }) {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {};
  return (
    <>
      <TaskUploadModal
        visible={visible}
        closeModal={() => setVisible(false)}
        status={status}
        subTitle={title}
      />
      <Pressable
        style={[
          styles.card,
          status === 0
            ? { backgroundColor: Colors.primarBlue }
            : { backgroundColor: Colors.taskCard },
        ]}
        onPress={() => setVisible(true)}
      >
        <ImageBackground
          source={
            status === 0
              ? require('../../../../../assets/belum.png')
              : require('../../../../../assets/sudah.png')
          }
          resizeMode='cover'
          style={{
            width: '100%',
            height: 120,
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          imageStyle={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Text style={styles.cardDate}>{date}</Text>
          <View style={styles.innerCard}>
            <View style={styles.cardTitleContainer}>
              <Text
                numberOfLines={3}
                style={styles.cardTitle}
              >
                {title}
              </Text>
            </View>

            {/* Date */}
          </View>
        </ImageBackground>
        <Text style={styles.carddeadline}>{deadline}</Text>
      </Pressable>
    </>
  );
}

export default TaskInnerCard;

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: 120,
    borderRadius: 8,
    marginRight: 15,
    marginTop: 10,
  },
  innerCard: {
    paddingHorizontal: 5,
  },
  cardTitleContainer: {
    width: 100,
  },
  cardTitle: {
    fontFamily: 'PoppinsSemiBold',
    color: Colors.white,
    fontSize: ScreenDimension.ScreenWidth * 0.0365,
  },
  carddeadline: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: ScreenDimension.ScreenWidth * 0.02,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: Colors.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 2,
  },
  cardDate: {
    fontFamily: 'PoppinsSemiBold',
    color: Colors.white,
    alignSelf: 'flex-end',
    padding: 5,
    fontSize: ScreenDimension.ScreenWidth * 0.03,
  },
});
