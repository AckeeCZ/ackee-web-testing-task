import { theme } from 'gatsby-theme-fela';

import { PropTypes } from 'prop-types';

export const HeaderTheme = {
    DARK: 'dark',
    LIGHT: 'light',
};

export const headerThemePropType = { headerTheme: PropTypes.oneOf(Object.values(HeaderTheme)) };

export const HeaderThemeColors = {
    [HeaderTheme.LIGHT]: {
        backButtonColors: {
            background: 'transparent',
            icon: theme.colors.white,
            border: theme.colors.white,
        },
        logoColors: {
            background: 'transparent',
            text: theme.colors.white,
            border: theme.colors.white,
        },
        burgerColors: {
            background: 'transparent',
            border: theme.colors.white,
            text: theme.colors.white,
            icon: theme.colors.white,
        },
    },
    [HeaderTheme.DARK]: {
        backButtonColors: {
            background: 'transparent',
            icon: theme.colors.blue,
            border: theme.colors.blue,
        },
        logoColors: {
            background: theme.colors.blue,
            text: theme.colors.white,
            border: theme.colors.blue,
        },
        burgerColors: {
            background: 'transparent',
            border: theme.colors.blue,
            text: theme.colors.fuchsia,
            icon: theme.colors.blue,
        },
    },
};
