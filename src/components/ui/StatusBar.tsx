import React from 'react';
import {StatusBar} from 'react-native';

export default function Statusbar() {
  return (
    <StatusBar
      translucent
      barStyle={'dark-content'}
      backgroundColor={'transparent'}
    />
  );
}
