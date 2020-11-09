import React from 'react';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import SelectState from '../screens/SelectState';
import NewClient from '../screens/NewClient';
import Clients from '../screens/Clients';
import {RootStackParamList} from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectState"
        component={SelectState}
        options={{title: 'Estados'}}
      />
      <Stack.Screen
        name="NewClient"
        component={NewClient}
        options={{title: 'Novo Cliente'}}
      />
      <Stack.Screen
        name="Clients"
        component={Clients}
        options={{title: 'Clientes'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
