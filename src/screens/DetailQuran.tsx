import {useNavigation, useRoute} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import detailSurah from '../assets/dummy/detailSurah';
import Colors from '../assets/resources/colors';
import fonts from '../assets/resources/fonts';
import AppBar from '../components/ui/AppBar';
import Statusbar from '../components/ui/StatusBar';

const DetailQuran = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  console.warn(params);

  //   function _searchFilterFunction(searchText) {
  //     let newData = [];
  //     if (searchText) {
  //       newData = data.filter(function (item) {
  //         const itemData = item.name.toUpperCase();
  //         const textData = searchText.toUpperCase();

  //         return itemData.includes(textData);
  //       });
  //       setData([...newData]);
  //     } else {
  //       getData();
  //       setData([...data]);
  //     }
  //   }

  const renderItems = (item: {
    id?: number;
    surah?: number;
    nomor: any;
    ar?: string;
    tr?: string;
    idn?: string;
    nama_latin?: any;
    jumlah_ayat?: any;
    tempat_turun?: any;
    nama?: any;
  }) => {
    return (
      <View style={styles.content}>
        <ImageBackground
          style={styles.iconBingkai}
          borderRadius={50}
          source={require('../assets/icons/bingkai.png')}>
          <Text style={styles.subTitle}>{item.nomor}</Text>
        </ImageBackground>
        <View style={styles.containerRight}>
          <Text style={styles.titleArab}>{item.ar}</Text>
          <Text style={styles.subTitle}>{item.idn}</Text>
        </View>
      </View>
    );
  };
  return (
    <Fragment>
      <Statusbar />
      <SafeAreaView style={styles.container}>
        <AppBar onPress={() => navigation.goBack()} title="Al-Fatihah" />
        <FlatList
          keyExtractor={e => e.id.toString()}
          showsVerticalScrollIndicator={false}
          data={detailSurah[0].ayat}
          renderItem={({item}) => renderItems(item)}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default DetailQuran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 14,
    paddingTop: 20,
    paddingHorizontal: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.text2,
    marginHorizontal: 14,
    flexDirection: 'row',
  },
  iconBingkai: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  subTitle: {
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeDefault,
    color: Colors.text,
  },
  containerRight: {
    flex: 1,
    marginTop: 10,
    marginLeft: -10,
  },
  titleArab: {
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeExtra,
    color: Colors.primary,
    writingDirection: 'rtl',
    marginBottom: 15,
  },
});
