import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://react.ferdirns.com';

export const http_auth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const token = AsyncStorage.getItem('token');
export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
// function Config() {
//   //   const token = AsyncStorage.getItem('token');
//   //   const http = axios.create({
//   //     baseURL: BASE_URL,
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Authorization: `Bearer ${JSON.parse(token)}`,
//   //     },
//   //   });

//   return {
//     // http_auth,
//     // http,
//   };
// }

// export default Config;
