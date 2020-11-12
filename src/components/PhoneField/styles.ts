import styled from 'styled-components/native';
import {BaseTouchableOpacityButton} from '../../styles/baseStyles';
import {TextInput} from 'react-native-paper';

export const DynamicInputView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const DynamicInput = styled(TextInput)`
  flex: 1;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

export const TouchableOpacityButton = styled(BaseTouchableOpacityButton)`
  margin-left: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;
