import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';

export type NewClientNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewClient'
>;

export type NewClientRouteProp = RouteProp<RootStackParamList, 'NewClient'>;

export type Props = {
  route: NewClientRouteProp;
  navigation: NewClientNavigationProp;
};
