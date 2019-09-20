import styled from 'styled-components';

export const Container = styled.View`
  background: #000;
  display: flex;
  flex: 1;
`;

export const ProductList = styled.FlatList`
  flex: 1;
  margin-top: 20px;
  background: #000;
`;

export const CardProduct = styled.View`
  flex-direction: column;

  background: #fff;
  align-items: center;
  width: 230px;
  height: 400px;
  margin-left: 30px;
  border-radius: 10px;
  padding: 20px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
`;

export const PoductAddToCart = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 12px;
`;

export const ProductAmountText = styled.Text``;

export const TextAddToCart = styled.Text`
  flex-direction: row;
  color: #fff;
  margin: 0 auto;
`;
