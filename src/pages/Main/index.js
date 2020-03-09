import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import api from '../../services/api';
import {formatPrice} from '../../until/format';

import {
  Container,
  ProductList,
  CardProduct,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  PoductAddToCart,
  TextAddToCart,
  ProductAmount,
  ProductAmountText,
  Svg,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});
  }

  render() {
    const {products} = this.state;
    const amount = '';
    return (
      <Container>
        <ProductList
          data={products}
          horizontal
          keyExtractor={product => product.id}
          renderItem={({item}) => (
            <CardProduct key={item.id}>
              <ProductImage source={{uri: item.image}} />
              <ProductInfo>
                <ProductTitle numberOfLines={2}>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductInfo>
              <PoductAddToCart onPress={() => {}}>
                <ProductAmount>
                  <Svg>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />{' '}
                  </Svg>
                  <ProductAmountText>{amount || 0}</ProductAmountText>
                </ProductAmount>
                <TextAddToCart>Adicionar</TextAddToCart>
              </PoductAddToCart>
            </CardProduct>
          )}
        />
      </Container>
    );
  }
}
