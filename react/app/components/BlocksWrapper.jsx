import React from 'react';
import Styled from 'styled-components';

import Block from './Block';

const Wrapper = Styled.div`
width: 600px;
&:after {
  content: ' ';
  clear: both;
  display: block;
}
`;

const BlocksWrapper = props => {
  const arr = [];

  arr.length = props.blockCount;

  return (
    <Wrapper>
      {/* {React.Children.toArray(props.children)} */}
      {arr.map((item, idx) => <Block key={idx} size={600 / props.blockCount}/>)}
    </Wrapper>
  );
};

BlocksWrapper.defaultProps = {
  blockCount: 12,
};

export default BlocksWrapper;
