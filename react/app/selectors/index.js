import { createSelector } from 'reselect';

export const activatedBlocksSelector = state =>
  state.blocks.filter(block => block.isActivated);

export const answerSelector = createSelector(
  activatedBlocksSelector,
  activatedBlocks =>
    activatedBlocks.length > 0 ? activatedBlocks.reduce(
      (prev, curr) => (prev && prev.value === curr.value ? curr : false)
    ) : []
);

export const restBlocksSelector = state => state.blocks.filter(block => !block.isCleared);
