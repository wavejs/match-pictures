import React from 'react';
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

const BlocksWrapper = props => {
  const width = 600;
  const activatedBlocksIdx = [];

  const blockActivateHandler = (...args) => {
    console.log(args);
  };

  return (
    <Wrapper width={width}>
      <Block
        size={Math.floor(width / props.col)}
        id="1"
        value="a"
        onActivate={blockActivateHandler}
      />
      <Block
        size={Math.floor(width / props.col)}
        id="2"
        value="b"
        onActivate={blockActivateHandler}
      />
    </Wrapper>
  );
};

BlocksWrapper.defaultProps = {
  blockCount: 12,
  col: 4,
  row: 3,
};

export default BlocksWrapper;
