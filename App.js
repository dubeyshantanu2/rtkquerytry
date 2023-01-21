import React from 'react';
import HomeScreen from './src/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }
// console.log('store', store.getState());
const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
