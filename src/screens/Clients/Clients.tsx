import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import api from '../../services/api';

import {Container, ItemCard, ItemInfo, Name, Phone} from './styles';

const Clients: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('?limit=10&page=1');

      if (res.status === 200) {
        setUsers(res.data.data.users);
      }
    } catch (error) {
      setUsers([]);
      setLoading(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const Item = ({item}) => (
    <ItemCard>
      <Avatar.Image size={72} source={{uri: item.image.url}} />
      <ItemInfo>
        <Name>{item.name}</Name>
        <Phone>Tel.: {item.phoneNumber}</Phone>
      </ItemInfo>
    </ItemCard>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <>
      {loading ? (
        <Container>
          <ActivityIndicator animating={true} size="large" />
        </Container>
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </>
  );
};

export default Clients;
