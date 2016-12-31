import { StyleSheet } from 'aphrodite/no-important';

import { blackSquare } from './squareStyles';

export default StyleSheet.create({
  container: {
    background: '#bfbea7',
    display: 'flex'
  },
  square: {
    ...blackSquare,
    width: '50px',
    height: '50px'
  }
});
