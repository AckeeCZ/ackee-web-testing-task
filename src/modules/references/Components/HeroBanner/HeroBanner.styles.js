export const container = ({ theme: { fonts }, textColor, content }) => ({
    ...fonts.greycliffNormal,
    color: textColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: content.image === undefined ? 'center' : 'flex-end',
    alignItems: 'center',
    height: '100%',
});

export const projectName = ({ theme: { fonts } }) => ({
    ...fonts.greycliffBold,
});

export const titleContainer = ({ content: { image } }) => ({
    fontSize: '2rem',
    lineHeight: '2.5rem',
    maxWidth: '90%',
    textAlign: 'center',
    fontWeight: 'lighter',
    paddingTop: 48,
    marginTop: image === undefined ? '0' : '10%',
    marginBottom: 0,
    tablet: {
        lineHeight: '3.5rem',
        fontSize: '2.65rem',
    },
    desktop: {
        fontSize: '3rem',
    },
});

export const subTitleContainer = () => ({
    fontSize: '1.125rem',
    marginTop: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '0.5rem',
    columnGap: '0.25rem',

    tablet: {
        flexDirection: 'row',
    },
});

export const subtitle = () => ({
    opacity: 0.6,
});

export const subtitleRight = () => ({
    ...subtitle(),
    marginLeft: '2rem',
});

export const image = () => ({});

export const mainContainer = ({ fullHeight }) => ({
    ...(fullHeight && {
        height: '100vh',
        tablet: {
            minHeight: '45rem',
        },
        tabletLarge: {
            height: '100vh',
        },
        desktopLarge: {
            height: '100vh',
        },
    }),
});
