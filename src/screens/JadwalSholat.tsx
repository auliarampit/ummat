import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../assets/resources/colors';
import fonts from '../assets/resources/fonts';
import AppBar from '../components/ui/AppBar';

const JadwalSholat = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const fullYear = d.getFullYear();

    return fetch(
      `https://api.myquran.com/v1/sholat/jadwal/0103/${fullYear}/${month}/${date}`,
    )
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        console.error(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <AppBar title="Jadwal Sholat" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Area {data?.lokasi} dan Sekitar-nya</Text>
        <View style={styles.jadwal}>
          <Text style={styles.text}>Imsak</Text>
          <Text style={styles.text}>{data?.jadwal?.imsak}</Text>
        </View>

        <View style={styles.jadwal}>
          <Text style={styles.text}>Subuh</Text>
          <Text style={styles.text}>{data?.jadwal?.subuh}</Text>
        </View>

        <View style={styles.jadwal}>
          <Text style={styles.text}>Dhuhur</Text>
          <Text style={styles.text}>{data?.jadwal?.dzuhur}</Text>
        </View>

        <View style={styles.jadwal}>
          <Text style={styles.text}>'Asar</Text>
          <Text style={styles.text}>{data?.jadwal?.ashar}</Text>
        </View>

        <View style={styles.jadwal}>
          <Text style={styles.text}>Maghrib</Text>
          <Text style={styles.text}>{data?.jadwal?.maghrib}</Text>
        </View>

        <View style={styles.jadwal}>
          <Text style={styles.text}>'Isya</Text>
          <Text style={styles.text}>{data?.jadwal?.isya}</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default JadwalSholat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jadwal: {
    padding: 15,
    backgroundColor: Colors.info,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: fonts.sizeMedium,
    fontFamily: fonts.fontMedium,
  },
  title: {
    fontSize: fonts.sizeDefault,
    fontFamily: fonts.fontMedium,
    marginLeft: 17,
  },
});
