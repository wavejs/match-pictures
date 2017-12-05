import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { activatedBlocksSelector, answerSelector, restBlocksSelector } from '../selectors';

const Wrapper = Styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  &:before {
    content: ' ';
    background-color: #000000;
    opacity: .6;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  span {
    display: inline-block;
    position: relative;
    line-height: 10rem;
    font-size: 10rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ''
    };
  }
  componentWillReceiveProps({ activatedBlocks, isCorrect }) {
    activatedBlocks.length === 2 && setTimeout(() => this.props.resetAnswers(isCorrect), 3000);
  }

  render() {
    const { activatedBlocks, isCorrect } = this.props;

    return (
      (activatedBlocks.length === 2 || this.props.restBlocks.length === 0) &&
      <Wrapper>
        {this.props.restBlocks.length > 0 ?
          <span>{isCorrect ? 'CORRECT!' : 'WRONG!'}</span>
          :
          <span>Clear!!</span>
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  answerStatus: state.answerStatus,
  blocks: state.blocks,
  activatedBlocks: activatedBlocksSelector(state),
  isCorrect: answerSelector(state),
  restBlocks: restBlocksSelector(state),
});

const mapDispatchToProps = dispatch => ({
  confirmAnswers(status) {
    dispatch({ type: 'CONFIRM_ANSWERS', status });
  },
  resetAnswers(status) {
    dispatch({ type: 'RESET_ANSWERS', status });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Indicator);
