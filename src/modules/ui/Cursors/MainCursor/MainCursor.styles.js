// import { CursorThemes } from '../../../custom-cursor/consts';

export const CursorThemes = {
    DARK: 'dark',
    LIGHT: 'light',
};

export const mainCursor = ({ theme: { colors }, cursorTheme }) => {
    return {
        width: '2.0625rem',
        height: '2.125rem',
        willChange: 'fill',
        transition: 'cubic-bezier(0.4, 0.0, 0.2, 1) fill 0.2s',
        fill: cursorTheme === CursorThemes.DARK ? colors.black : colors.white,
        stroke: colors.blue,
    };
};
