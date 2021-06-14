// TODO expose this in package

import * as Consts from 'gatsby-theme-fela/src/constants';

import styles, { theme } from '../styles';
import defaultFonts from '../fonts';

import plugins from 'gatsby-theme-fela/src/config/plugins';
import enhancers from 'gatsby-theme-fela/src/config/enhancers';

import sortMediaQueryMobileFirst from 'fela-sort-media-query-mobile-first';

export const rendererConfig = {
    devMode: Consts.isEnvDevelopment,
    enhancers: [...enhancers, sortMediaQueryMobileFirst()],
    plugins,
    theme,
};

export const staticCSS = styles;

export const fonts = defaultFonts;
