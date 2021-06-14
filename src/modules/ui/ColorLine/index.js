import { connect as connectFela } from 'react-fela';
import ColorLine from './ColorLine';
import * as styles from './ColorLine.styles';
import * as colorLineKeyframes from './Keyframes.styles';

export { colorLineKeyframes };

export default connectFela(styles)(ColorLine);
