import React from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Text>Selecione o estado</Text>
      <Button mode="contained" onPress={() => console.log('Novo cadastro')}>
        Novo Cadastro
      </Button>
      <Button mode="contained" onPress={() => console.log('Cadastros')}>
        Clientes cadastrados
      </Button>
    </>
  );
};

export default Home;
