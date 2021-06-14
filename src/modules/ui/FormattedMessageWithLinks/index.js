import { connect as connectFela } from 'react-fela';
import FormattedMessageWithLinks from './FormattedMessageWithLinks';
import * as styles from './FormattedMessageWithLinks.styles';

export default connectFela(styles)(FormattedMessageWithLinks);
