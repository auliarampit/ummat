import {useNavigation} from '@react-navigation/native';
import React, {FC, Fragment} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import surah from '../assets/dummy/surah';
import Colors from '../assets/resources/colors';
import fonts from '../assets/resources/fonts';
import AppBar from '../components/ui/AppBar';
import Search from '../components/ui/Search';
import StatusBar from '../components/ui/StatusBar';

const Quran: FC = () => {
  const navigation = useNavigation();

  const onChange = (e: any) => {
    console.warn(e);
  };

  const toDetail = (item: {nomor: any}) => {
    navigation.navigate('DetailQuran', {
      params: item.nomor,
    });
  };

  const renderItems = (item: {
    nomor: number | string;
    nama: any;
    nama_latin: any;
    jumlah_ayat: any;
    tempat_turun: any;
  }) => {
    return (
      <TouchableOpacity onPress={() => toDetail(item)} style={styles.content}>
        <ImageBackground
          style={styles.iconBingkai}
          borderRadius={50}
          source={require('../assets/icons/bingkai.png')}>
          <Text style={styles.subTitle}>{item.nomor}</Text>
        </ImageBackground>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{item.nama_latin}</Text>
          <Text style={styles.subTitle}>
            {item.jumlah_ayat} Ayat - {item.tempat_turun}
          </Text>
        </View>
        <Text style={styles.titleArab}>{item.nama}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <AppBar title="Al-Quran" onPress={() => navigation.goBack()} />
        <Search action={e => onChange(e)} />
        <FlatList
          keyExtractor={e => e.deskripsi.toString()}
          showsVerticalScrollIndicator={false}
          data={surah}
          renderItem={({item}) => renderItems(item)}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 14,
    paddingHorizontal: 0,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.text2,
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBingkai: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  containerCenter: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.fontBold,
    fontSize: fonts.sizeMedium,
    color: Colors.text,
    marginBottom: 2,
  },
  subTitle: {
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeSmall,
    color: Colors.text1,
  },
  titleArab: {
    fontFamily: fonts.fontBold,
    fontSize: fonts.sizeTitle,
    color: Colors.success1,
    marginTop: 5,
  },
});
export default Quran;
