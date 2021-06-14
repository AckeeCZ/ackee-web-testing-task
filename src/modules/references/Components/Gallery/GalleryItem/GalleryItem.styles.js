import { GALLERY_DIVIDER_WIDTH } from '../consts';
import { combineRules } from 'fela';

const baseContainer = ({ content: { background }, size, dividers = 1 }) => ({
    background,
    tablet: {
        width: `calc(${size}% - ${(GALLERY_DIVIDER_WIDTH * dividers) / (dividers + 1)}px)`,
    },
});

export const container = combineRules(baseContainer, ({ textColor }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: textColor,
    margin: 'auto',
    width: '100%',
}));

export const videoContainer = combineRules(baseContainer, () => ({
    objectFit: 'cover',
    height: '100%',
    maxWidth: '100%',
}));

export const imageContainer = combineRules(baseContainer, ({ fullHeight }) => ({
    display: 'flex',
    justifyContent: 'center',

    '& .gatsby-image-wrapper': {
        maxHeight: '25rem',
        minHeight: '20rem',
    },

    height: '100%',
    tablet: {
        height: 'auto',

        '& .gatsby-image-wrapper': {
            maxHeight: fullHeight ? '100vh' : '35rem',
        },
    },
}));

export const image = () => ({
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',

    width: '80%',
    height: '80%',
});

export const text = ({ theme, content: { textColor } }) => ({
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    marginLeft: `auto`,
    marginRight: `auto`,

    color: textColor || theme.colors.black,
});
