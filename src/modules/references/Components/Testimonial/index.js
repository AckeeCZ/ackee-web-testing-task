import { connect as connectFela } from 'react-fela';
import Testimonial from './Testimonial';
import * as styles from './Testimonial.styles';

export { TestimonialType } from './consts';
export default connectFela(styles)(Testimonial);
