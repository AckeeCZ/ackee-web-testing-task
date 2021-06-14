import { connect as connectFela } from 'react-fela';
import GalleryItem from './GalleryItem';
import * as styles from './GalleryItem.styles';

export default connectFela(styles)(GalleryItem);
