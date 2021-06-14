import { connect as connectFela } from 'react-fela';
import HeaderContainer from './HeaderContainer';
import * as styles from './HeaderContainer.styles';

export default connectFela(styles)(HeaderContainer);
export { HeaderType } from '../consts';
