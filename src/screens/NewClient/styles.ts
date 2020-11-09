import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import {
  BaseContainer,
  BaseTouchableOpacityButton,
} from '../../styles/baseStyles';

export const SafeContainer = styled(BaseContainer)`
  flex: 1;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const RgFields = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RgInput = styled(TextInput)`
  flex: 1;
`;

export const RgUFPicker = styled(Picker)`
  margin-left: auto;
`;

export const DateView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const DateTextInput = styled(TextInput)`
  flex: 1;
  margin-right: 24px;
`;

export const TouchableOpacityButton = styled(BaseTouchableOpacityButton)`
  margin-left: auto;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
  padding: 4px;
`;

export const DynamicInputView = styled.View`
  flex-direction: row;
`;
