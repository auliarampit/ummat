import {useNavigation} from '@react-navigation/native';
import React, {FC, Fragment} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Colors from '../assets/resources/colors';
import fonts from '../assets/resources/fonts';
import AppBar from '../components/ui/AppBar';
import StatusBar from '../components/ui/StatusBar';

const width = Dimensions.get('screen').width;

const Home: FC = () => {
  const navigation = useNavigation();
  const button = [
    {
      id: 1,
      button: 'Al Quran',
      onPress: () => navigation.navigate('Quran'),
      image: require('../assets/images/quran.png'),
    },
    {
      id: 2,
      button: 'Sholat',
      onPress: () => navigation.navigate('JadwalSholat'),
      image: require('../assets/images/sholat.jpg'),
    },
    {
      id: 3,
      button: 'Tajwid',
      image: require('../assets/images/tajwid.png'),
    },
    {
      id: 4,
      button: 'Doa-doa',
      image: require('../assets/images/doa.jpg'),
    },
    {
      id: 5,
      button: 'Kalender',
      image: require('../assets/images/hijriah.webp'),
    },
    {
      id: 6,
      button: 'Hadits',
      image: require('../assets/images/hadists.png'),
    },
  ];
  return (
    <Fragment>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <AppBar title={'Al Quran'} />
        <View style={styles.content}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
          <ImageBackground
            source={require('../assets/images/background.jpeg')}
            borderRadius={30}
            style={styles.banner}>
            <View style={styles.left}>
              <Text style={styles.textLight}>Bacaan terakhir</Text>
              <Text style={styles.textTitle}>Arrahman</Text>
              <Text style={styles.textLight}>Ayat: 2</Text>
              <Text style={styles.textGoTo}>Pergi ke</Text>
            </View>
          </ImageBackground>

          <View style={styles.containerButton}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              data={button}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={item.onPress}
                    style={styles.button}>
                    <Image
                      source={item?.image}
                      style={styles.img}
                      resizeMode="stretch"
                    />
                    <Text>{item.button}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    padding: 12,
  },
  logo: {
    height: 75,
    width: 115,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 115,
    backgroundColor: Colors.white,
    borderRadius: 30,
    marginTop: 25,
    padding: 20,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  textLight: {
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeSmall,
    marginBottom: 8,
    color: Colors.white,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: fonts.sizeLarge,
    color: Colors.white,
  },
  textGoTo: {
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeDefault,
    color: Colors.white,
  },
  containerButton: {
    flex: 1,
    marginTop: 25,
  },
  button: {
    width: width / 3.9,
    height: 120,
    backgroundColor: Colors.white,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1.5,
    elevation: 10,
    borderColor: Colors.info,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});

export default Home;
