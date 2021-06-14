import { connect as connectFela } from 'react-fela';
import Burger from './Burger';
import * as styles from './Burger.styles';

export default connectFela(styles)(Burger);
