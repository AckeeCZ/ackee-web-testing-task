import { TestimonialType } from './consts';

export const container = ({ textColor, type }) => ({
    color: textColor,
    display: 'flex',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'column',

    tablet: {
        flexDirection: type === TestimonialType.PROFILE_RIGHT ? 'row' : 'column',
    },
});

export const testimonial = ({ type }) => ({
    fontSize: '1.125rem',
    textAlign: type === TestimonialType.PROFILE_NONE ? 'center' : 'left',

    // TODO import from theme.js
    fontFamily: `'Roboto Mono', monospace`,
    fontWeight: 300,
    width: '100%',
    tablet: {
        fontSize: '2rem',
        lineHeight: '1.65',
        width: type !== TestimonialType.PROFILE_RIGHT ? '100%' : '75%',
    },
});
