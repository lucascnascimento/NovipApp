import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {data} from '../../assets/images';
import {BasePaperButton} from '../../styles/baseStyles';

import {Container} from './styles';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 230,
    height: 230,
  },
});

import {Props} from './types';

const Home: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image
        source={data[0].imageLink}
        style={styles.tinyLogo}
        resizeMode="contain"
      />
      <BasePaperButton
        mode="contained"
        onPress={() => navigation.navigate('SelectState')}>
        Novo Cadastro
      </BasePaperButton>
      <BasePaperButton
        mode="contained"
        onPress={() => navigation.navigate('Clients')}>
        Clientes cadastrados
      </BasePaperButton>
    </Container>
  );
};

export default Home;
