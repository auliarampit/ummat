import React, {FC} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../assets/resources/colors';
import fonts from '../../assets/resources/fonts';

interface Props {
  action: (e: any) => void;
}

const Search: FC<Props> = ({action}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pencarian . . ."
        onChangeText={action}
        style={styles.textInput}
      />
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.iconSearch}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    paddingVertical: 13,
    fontFamily: fonts.fontRegular,
    fontSize: fonts.sizeDefault,
    color: Colors.text,
    paddingRight: 60,
  },
  iconSearch: {
    height: 18,
    width: 18,
    position: 'absolute',
    right: 45,
  },
});
