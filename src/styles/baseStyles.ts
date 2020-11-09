import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

export const BaseContainer = styled.View`
  margin: 24px;
`;

export const BasePaperButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
`;

export const BaseTouchableOpacityButton = styled(TouchableOpacity)<ButtonProps>`
  background: #f44802;
  width: 72px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
