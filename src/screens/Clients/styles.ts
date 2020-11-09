import styled from 'styled-components/native';
import {BaseContainer} from '../../styles/baseStyles';

export const Container = styled(BaseContainer)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ItemCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 6px 12px;
`;

export const ItemInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-size: 16px;
`;

export const Phone = styled.Text`
  color: rgba(0, 0, 0, 0.6);
`;
