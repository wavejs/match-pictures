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
      activatedBlocksIdx: [],
    };
    this.blockActivateHandler = this.blockActivateHandler.bind(this);
  }
  blockActivateHandler(id) {
    this.props.activateBlock(id);
  }

  render() {
    const { width, activatedBlocksIdx } = this.state;

    return (
      <Wrapper width={width}>
        {this.props.blocks.map((data, idx) =>
          <Block
            key={idx}
            size={Math.floor(width / this.props.col)}
            id={idx}
            display={data.display}
            value={data.value}
            onActivate={this.blockActivateHandler}
            isActivated={data.isActivated}
          />
        )}
        {/* <Block
          size={Math.floor(width / this.props.col)}
          id="1"
          value="a"
          onActivate={this.blockActivateHandler}
          isActivated={activatedBlocksIdx.indexOf('a') > -1}
        />
        <Block
          size={Math.floor(width / this.props.col)}
          id="2"
          value="b"
          onActivate={this.blockActivateHandler}
          isActivated={activatedBlocksIdx.indexOf('b') > -1}
        /> */}
      </Wrapper>
    );
  }
};

BlocksWrapper.defaultProps = {
  blockCount: 12,
  col: 4,
  row: 3,
};
BlocksWrapper.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })),
};

const mapStateToProps = state => ({
  blocks: state.blocks,
});
const mapDispatchToProps = dispatch => ({
  confirmAnswers(status) {
    dispatch({ type: 'CONFIRM_ANSWERS', status });
  },
  resetAnswers() {
    dispatch({ type: 'RESET_ANSWERS' });
  },
  activateBlock(idx) {
    dispatch({ type: 'ACTIVATE_BLOCK', idx });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlocksWrapper);
