import { DeviceType } from './consts';

export const container = ({ background, backgroundImage }) => ({
    background,
    backgroundImage,

    paddingLeft: '2rem',
    paddingTop: '2.5rem',
    paddingBottom: '3rem',

    tabletLarge: {
        paddingLeft: '11rem',
        paddingTop: '10.5rem',
        paddingBottom: '10.5rem',
    },
});

export const carousel = () => ({
    overflow: 'visible',

    position: 'relative',

    cursor: 'grab',

    ':active': {
        cursor: 'grabbing',
    },

    '& .slick-list': {
        overflow: 'visible',
    },
});

export const description = ({ textColor, deviceType }) => ({
    color: textColor,

    textAlign: 'center',
    fontFamily: `'Roboto Mono', monospace`,
    fontWeight: 400,
    lineHeight: '1.8rem',

    marginTop: deviceType === DeviceType.MOBILE ? '6.25rem' : '3.125rem',

    tabletLarge: {
        marginTop: '6.25rem',
    },

    maxWidth: '32.5rem',

    marginLeft: 'auto',
    marginRight: 'auto',
});
