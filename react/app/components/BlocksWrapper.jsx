import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

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
  blockActivateHandler(val) {

    this.setState(prevState => {
      if (prevState.activatedBlocksIdx.length < 2) {
        if (prevState.activatedBlocksIdx.indexOf(val) > -1) {
          return { activatedBlocksIdx: prevState.activatedBlocksIdx.filter(prev => prev !== val) };
        } else {
          return { activatedBlocksIdx: [...prevState.activatedBlocksIdx, val] };
        }
      }
    }, () => {
      if (this.state.activatedBlocksIdx.length === 2) {
        this.state.activatedBlocksIdx.reduce((prev, curr) => {
          if (prev === curr) {
            this.props.confirmAnswers('correct');
          } else {
            this.props.confirmAnswers('wrong');
          }
        });
        setTimeout(() => {
          this.setState({ activatedBlocksIdx: [] }, () => this.props.resetAnswers());
        }, 1000);
      }
    });
  }

  render() {
    const { width, activatedBlocksIdx } = this.state;

    return (
      <Wrapper width={width}>
        <Block
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
        />
      </Wrapper>
    );
  }
};

BlocksWrapper.defaultProps = {
  blockCount: 12,
  col: 4,
  row: 3,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  confirmAnswers(status) {
    dispatch({ type: 'CONFIRM_ANSWERS', status });
  },
  resetAnswers() {
    dispatch({ type: 'RESET_ANSWERS' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlocksWrapper);
