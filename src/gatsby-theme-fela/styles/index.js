import layout from '!css-loader!./layout.css';
import reset from '!css-loader!./reset.css';

import slick from '!css-loader!slick-carousel/slick/slick.css';
import slickTheme from '!css-loader!slick-carousel/slick/slick-theme.css';

export { default as theme } from './theme';

const styles = [reset, layout, slick, slickTheme];

export default styles;
