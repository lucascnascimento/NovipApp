import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {BasePaperButton} from '../../styles/baseStyles';

import {Container, Title} from './styles';

const SelectState: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Selecione um estado</Title>
      <BasePaperButton
        mode="contained"
        onPress={() => navigation.navigate('NewClient', {uf: 'PR'})}>
        Paraná
      </BasePaperButton>
      <BasePaperButton
        mode="contained"
        onPress={() => navigation.navigate('NewClient', {uf: 'SC'})}>
        Santa Catarina
      </BasePaperButton>
    </Container>
  );
};

export default SelectState;
