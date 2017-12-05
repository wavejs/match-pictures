import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import Block from './Block';

const Wrapper = Styled.div`
width: ${({ width }) => width || '600'}px;
&:after {
  content: ' ';
  clear: both;
  display: block;
}
`;

class BlocksWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      activatedBlocks: [],
      isDisplayText: true
    };
    this.blockActivateHandler = this.blockActivateHandler.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isDisplayText: false });
    }, 2000);
  }
  blockActivateHandler(id) {
    this.props.activateBlock(id);
  }

  render() {
    const { width, isDisplayText } = this.state;

    return (
      this.props.isStart &&
      <Wrapper width={width}>
        {this.props.blocks.map(({ id, value, isActivated, display, isCleared }, idx) => (
          <Block
            key={idx}
            size={Math.floor(width / this.props.col)}
            id={id}
            display={isDisplayText || isActivated ? display : ''}
            value={value}
            onActivate={this.blockActivateHandler}
            isActivated={isActivated}
            isCleared={isCleared}
          />
        ))}
      </Wrapper>
    );
  }
}

BlocksWrapper.defaultProps = {
  blockCount: 12,
  col: 4,
  row: 3
};
BlocksWrapper.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  blocks: state.blocks,
  isStart: state.isStart,
});
const mapDispatchToProps = dispatch => ({
  resetAnswers() {
    dispatch({ type: 'RESET_ANSWERS' });
  },
  activateBlock(id) {
    dispatch({ type: 'ACTIVATE_BLOCK', id });
  },
  checkAnswer() {
    dispatch({ type: 'CHECK_ANSWER' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlocksWrapper);
