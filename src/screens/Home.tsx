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
} from 'react-native';
import Colors from '../assets/resources/colors';
import fonts from '../assets/resources/fonts';
import AppBar from '../components/ui/AppBar';
import StatusBar from '../components/ui/StatusBar';

const Home: FC = () => {
  const navigation = useNavigation();
  const button = [
    {
      id: 1,
      button: 'Al Quran',
      onPress: () => navigation.navigate('Quran'),
    },
    {
      id: 2,
      button: 'Memori',
    },
    {
      id: 3,
      button: 'Tajwid',
    },
    {
      id: 1,
      button: 'Al Quran',
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
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={item.onPress}
                    style={styles.button}>
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
    width: 110,
    height: 140,
    backgroundColor: Colors.info,
    margin: 4,
    justifyContent: 'center',
    padding: 12,
    borderRadius: 20,
  },
});

export default Home;
