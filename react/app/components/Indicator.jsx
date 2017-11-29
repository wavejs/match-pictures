import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  position: fixed;
  display: ${({ isDisplay }) => isDisplay ? 'block' : 'none'};
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


const Indicator = props =>
  <Wrapper isDisplay={props.answerStatus !== 'neutral'}>
    <span>{props.answerStatus.toUpperCase()}</span>
  </Wrapper>;

const mapStateToProps = state => ({
  answerStatus: state.answerStatus,
});

export default connect(mapStateToProps)(Indicator);