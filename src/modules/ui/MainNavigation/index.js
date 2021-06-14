import { connect as connectFela } from 'react-fela';
import MainNavigation from './MainNavigation';
import * as styles from './MainNavigation.styles';

export default connectFela(styles)(MainNavigation);

export { content } from './NavigationLinks/content';
