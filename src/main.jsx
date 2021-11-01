import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/App';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import store from '@/store/';
const firebaseConfig = {
  apiKey: 'AIzaSyAWJVzlr6thEkabIIiI1Toa-Jo0-_W019Y',
  authDomain: 'song-ranker-16cf5.firebaseapp.com',
  projectId: 'song-ranker-16cf5',
  storageBucket: 'song-ranker-16cf5.appspot.com',
  messagingSenderId: '2227461369',
  appId: '1:2227461369:web:7742ad951e3082f4fb9628',
  measurementId: 'G-7Z1N0YRN13',
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
