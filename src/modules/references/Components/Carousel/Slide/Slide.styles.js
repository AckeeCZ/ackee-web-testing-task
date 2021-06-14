import { DeviceType } from '../consts';

export const container = ({ deviceType }) => ({
    marginRight: '1.25rem',

    height: deviceType === DeviceType.MOBILE ? '73.747vh' : 'auto',

    tabletLarge: {
        marginRight: '2.5rem',
        height: 'auto',
    },

    desktop1200: {
        marginRight: '2.5rem',
        height: deviceType === DeviceType.MOBILE ? '73.747vh' : '69.109vh',
        maxHeight: '49.687rem',
    },
});

export const description = ({ textColor }) => ({
    color: textColor,
    opacity: 0.5,

    fontFamily: `'Roboto Mono', monospace`,
    fontWeight: 400,
    textAlign: 'center',

    paddingTop: '1.5rem',

    display: 'block',
});
