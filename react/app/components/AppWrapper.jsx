import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const AppWrapper = Styled.div`
  background-color: #${({ answerStatus }) => {
    switch (answerStatus) {
      case 'neutral':
      default:
        return '000000';
      case 'wrong':
        return 'f45342';
      case 'correct':
        return '41f47a';
    }
  }};
  width: 100%;
  height: 100%;
  color: #ffffff;
`;

const mapStateToDispatch = state => ({
  answerStatus: state.answerStatus,
});

export default connect(mapStateToDispatch)(AppWrapper);