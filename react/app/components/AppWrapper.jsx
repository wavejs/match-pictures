import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import ReadyCountdown from './ReadyCountdown';
import Indicator from './Indicator';

const App = Styled.div`
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

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <App>
        {React.Children.toArray(this.props.children)}

        {!this.props.isStart && <ReadyCountdown />}

        <Indicator/>
      </App>
    );
  }
}

const mapStateToDispatch = state => ({
  answerStatus: state.answerStatus,
  isStart: state.isStart
});

export default connect(mapStateToDispatch)(AppWrapper);
