import { connect as connectFela } from 'react-fela';
import DynamicContainer from './DynamicContainer';
import * as styles from './DynamicContainer.styles';

export default connectFela(styles)(DynamicContainer);
