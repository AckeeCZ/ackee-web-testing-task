import { connect as connectFela } from 'react-fela';
import Carousel from './Carousel';
import * as styles from './Carousel.styles';

export { DeviceType } from './consts';
export default connectFela(styles)(Carousel);
