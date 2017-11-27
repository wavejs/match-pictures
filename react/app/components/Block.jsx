import React from 'react';
import Styled from 'styled-components';

const Elem = Styled.div`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: #FF6600;
  display: inline-block;
  float: left;
`;

const Block = props => <Elem size={props.size}/>;

export default Block;