const cursorPaths = {
    normal: '/cursors/cursor_circle.svg',
    fallback: '/cursors/cursor_circle.cur',
};

const theme = {
    fonts: {
        greycliffExtraBold: {
            fontFamily:
                'Greycliff, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '800',
        },
        greycliffBold: {
            fontFamily:
                'Greycliff, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '700',
        },
        greycliffMedium: {
            fontFamily:
                'Greycliff, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '500',
        },
        greycliffNormal: {
            fontFamily:
                'Greycliff, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
            fontWeight: '400',
        },
    },
    cursors: {
        circle: {
            cursor: `url(${cursorPaths.normal}) 16 16, url(${cursorPaths.normal}), url(${cursorPaths.fallback}), pointer`,
        },
    },
    colors: {
        black: '#000',
        white: '#FFF',
        blue: '#0000FF',
        cyan: '#00FFFF',
        fuchsia: '#FF00FF',
        grey: '#f2f2f2',
        dividerGrey: '#939393',
        darkerGrey: '#c5c5c5',
        darkGrey: '#A0A0A0',
        darkBlue: '#000714',
        greyBorder: 'rgba(255,255,255,0.35)',
        darkBackground: '#000314',
        starsNavigationBg: '#000015',
        transparent: 'transparent',
        sectionTitleGrey: '#939393',
        red: '#fa3232',
        green: '#29d657',
        formBgGrey: '#fdfdfd',
        formBorderGrey: '#e3e3e3',
        lightGrey: '#f9f9f9',
        modalOverlay: 'rgba(0,0,0,0.16)',
    },
    dimensions: {
        containerMaxWidth: '90em',
        headerHeight: 60,
    },
    transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s',
};

export default theme;
