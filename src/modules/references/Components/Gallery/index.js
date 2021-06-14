import { connect as connectFela } from 'react-fela';
import Gallery from './Gallery';
import * as styles from './Gallery.styles';

export { GalleryLayout } from './consts';
export default connectFela(styles)(Gallery);
