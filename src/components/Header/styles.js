import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: #000;

  padding: 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AreaHome = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  rizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const AreaCart = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ItenQtd = styled.Text`
  position: absolute;
  text-align: center;
  background: #7159c1;
  top: -12px;
  right: -8px;
  padding: 2px;
  color: #fff;
  font-size: 12px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 10px;
  overflow: hidden;
`;
