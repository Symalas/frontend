import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenDimension from '../static/dimensions';
import CustomButton from './micro/CustomButton';
import Colors from '../static/color';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

function CameraMenu() {
  const navigation = useNavigation();
  const route = useRoute();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [flashMode, setFlashMode] = useState(false);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [zoom, setZoom] = useState(0);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);
  const takePicture = async () => {
    if (flashMode) {
      setFlash(Camera.Constants.FlashMode.torch);
    } else {
      setFlash(Camera.Constants.FlashMode.off);
    }
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const changeZoom = (event) => {
    if (event.nativeEvent.scale > 1 && zoom < 1) {
      setZoom(zoom + 0.005);
    }
    if (event.nativeEvent.scale < 1 && zoom > 0) {
      setZoom(zoom - 0.005);
    }
  };
  return (
    <>
      <StatusBar style='light' />
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <PinchGestureHandler onGestureEvent={(event) => changeZoom(event)}>
          <View style={styles.cameraContainer}>
            {image === null ? (
              <Camera
                ref={(ref) => setCamera(ref)}
                style={styles.fixedRatio}
                type={type}
                zoom={zoom}
                ratio={'1:1'}
                flashMode={flash}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={{ flex: 1 }}
              />
            )}
          </View>
        </PinchGestureHandler>

        {/* {image && (
        
      )} */}
        <View
          style={[
            styles.btnContainer,
            image === null ? { bottom: 100 } : { bottom: 0 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              if (image === null) {
                takePicture();
              } else {
                setImage(null);
                setFlash(Camera.Constants.FlashMode.off);
              }
            }}
            style={[
              image === null
                ? [styles.btnBunder]
                : [
                    styles.btn,
                    {
                      width: '50%',
                      backgroundColor: 'rgba(82, 113, 255, 0.7)',
                    },
                  ],
            ]}
            activeOpacity={0.5}
          >
            {image !== null ? (
              <Text style={styles.title}>Ambil Ulang Foto</Text>
            ) : (
              ''
            )}
          </TouchableOpacity>

          {/* <CustomButton
            title={image === null ? 'Ambil Foto' : 'Ambil Ulang Foto'}
            onPress={() => {
              if (image === null) {
                takePicture();
              } else {
                setImage(null);
              }
            }}
            style={[
              styles.btn,
              image === null
                ? { width: '100%' }
                : { width: '50%', backgroundColor: 'rgba(82, 113, 255, 0.7)' },
            ]}
            titleStyle={styles.title}
          /> */}
          {image === null ? (
            ''
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AttendanceInput', {
                  image: image,
                  tugas: route.params.tugas,
                  minggu: route.params.minggu,
                })
              }
              style={styles.btn}
              activeOpacity={0.5}
            >
              <Text style={styles.title}>Ok</Text>
            </TouchableOpacity>
            // <CustomButton
            //   title='Ok'
            //   onPress={() =>
            //     navigation.navigate('AttendanceInput', {
            //       image: image,
            //     })
            //   }
            //   style={styles.btn}
            //   titleStyle={styles.title}
            // />
          )}
        </View>
        <TouchableOpacity
          style={[
            styles.btnFlash,
            image === null ? { display: 'flex' } : { display: 'none' },
          ]}
          onPress={() => setFlashMode(!flashMode)}
        >
          <MaterialIcons
            name={flashMode ? 'flash-on' : 'flash-off'}
            size={24}
            color='white'
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default CameraMenu;
const styles = StyleSheet.create({
  cameraContainer: {
    width: ScreenDimension.ScreenWidth,
    height: ScreenDimension.ScreenWidth,
    marginTop: ScreenDimension.ScreenHeight / 5,
    zIndex: 10,
  },
  fixedRatio: {
    aspectRatio: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    width: ScreenDimension.ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  btn: {
    width: '50%',
    paddingVertical: 20,
    backgroundColor: Colors.primarBlue,
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'PoppinsMedium',
  },
  btnBunder: {
    height: 80,
    width: 80,
    backgroundColor: '#EAEAEA',
    borderRadius: 100,
  },
  btnFlash: {
    backgroundColor: '#B2B2B2',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 105,
    right: 50,
  },
});
