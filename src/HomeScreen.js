import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useGetMovieTypeQuery} from './movieApi';
// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

const HomeScreen = () => {
  // const [loading, setLoading] = React.useState(true);
  // const [data, setData] = React.useState([]);
  // const [error, setError] = React.useState(null);
  console.log(useGetMovieTypeQuery('popular'));
  // if (loading) {
  //   return (
  //     <View style={styles.ActivityIndicatorStyle}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>{/* <Text>{data.title}</Text> */}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
