import { connect as connectFela } from 'react-fela';
import ArrowButton from './ArrowButton';
import * as styles from './ArrowButton.styles';

export { ArrowButtonType } from './consts';
export default connectFela(styles)(ArrowButton);
