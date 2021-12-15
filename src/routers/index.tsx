import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {QuranScreen, HomeScreen, DetailQuranScreen} from '../screens';

export type MainStack = {
  Home: undefined;
  Quran: undefined;
  DetailQuran: {quran: number};
};

export interface RootStackParamList extends MainStack {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<MainStack>();

const Route: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quran"
          component={QuranScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailQuran"
          component={DetailQuranScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
