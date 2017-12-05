import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';

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
    line-height: 20rem;
    font-size: 20rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class ReadyCountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
    this.timer = 0;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({ count: --prevState.count }), () => {
        if (this.state.count === 0) {
          clearInterval(this.timer);
          this.props.start();
        }
      });
    }, 1000);
  }
  render() {
    return (
      <Wrapper>
        <span>{this.state.count}</span>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  start() {
    dispatch({ type: 'START_GAME' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadyCountDown);
