import React from 'react';
import Styled from 'styled-components';

const Elem = Styled.div`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: ${({ isActivated }) => isActivated ? '#417df4' : '#f44242'};
  visibility: ${({ isCleared }) => isCleared ? 'hidden' : 'visible'};
  display: inline-block;
  float: left;
  color: #ffffff;
  border: 1px solid #ffffff;
`;

const Text = Styled.div`
  display: block;
  text-align: center;
  width: 100%;
  height: 3rem;
  font-size: 3rem;
  line-height: 3rem;
  margin-top: 50%;
  transform: translateY(-50%);
`;

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.blockClickHandler = this.blockClickHandler.bind(this);
  }
  blockClickHandler() {
    this.props.onActivate(this.props.id);
  }
  render() {
    return (
      <Elem
        size={this.props.size}
        isActivated={this.props.isActivated}
        onClick={this.blockClickHandler}
        isCleared={this.props.isCleared}
      >
        <Text>
          {this.props.display}
        </Text>
      </Elem>);
  }
}

Block.defaultProps = {
  isCleared: false,
  isActivated: false,
  display: null,
  value: 0,
  onActivate: () => {},
};

export default Block;