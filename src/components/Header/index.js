import React from 'react';

import {Container, Logo, AreaCart, ItenQtd} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {
  return (
    <Container>
      <Logo />
      <AreaCart
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <ItenQtd>1</ItenQtd>
        <Icon name="shopping-basket" color="#FFF" size={24} />
      </AreaCart>
    </Container>
  );
}
