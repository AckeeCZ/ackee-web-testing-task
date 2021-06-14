export const container = ({ isFluid, background, fullHeight }) => ({
    maxWidth: '100%',
    background,
    position: 'relative',
    tabletLarge: {
        height: fullHeight ? '75vh' : 'auto',
    },
    desktopLarge: {
        height: fullHeight ? '100vh' : 'auto',
    },
});

export const fluidContainer = ({ fullHeight }) => ({
    position: 'relative',
    maxWidth: '90rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',

    paddingTop: fullHeight ? 0 : '2.5rem',
    paddingBottom: fullHeight ? 0 : '3rem',
    paddingLeft: '5%',
    paddingRight: '5%',

    tabletLarge: {
        paddingTop: fullHeight ? 0 : '12.5rem',
        paddingBottom: fullHeight ? 0 : '10.75rem',
    },
});
