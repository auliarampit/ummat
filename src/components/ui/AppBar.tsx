import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/resources/colors';
import fonts from '../../assets/resources/fonts';

interface Props {
  onPress?: () => void;
  title: string;
}

const AppBar: FC<Props> = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      {onPress && (
        <TouchableOpacity style={styles.actionBack} onPress={onPress}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
      <View style={styles.containerTitle}>
        <Text style={[styles.title, {marginLeft: onPress && -80}]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBack: {
    width: 40,
    height: 18,
    paddingLeft: 12,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 17,
    color: Colors.text,
    fontFamily: fonts.fontBold,
  },
});
