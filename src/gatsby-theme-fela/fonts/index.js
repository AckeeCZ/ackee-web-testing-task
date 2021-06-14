import GreycliffExtraBold from './greycliffcf-extrabold-webfont.ttf';
import GreycliffBold from './greycliffcf-bold-webfont.ttf';
import GreycliffMedium from './greycliffcf-medium-webfont.ttf';
import GreycliffRegular from './greycliffcf-regular-webfont.ttf';

const fonts = [
    {
        name: 'Greycliff',
        files: [GreycliffExtraBold],
        options: {
            fontStyle: 'normal',
            fontWeight: '800',
            fontDisplay: 'swap',
        },
    },
    {
        name: 'Greycliff',
        files: [GreycliffBold],
        options: {
            fontStyle: 'normal',
            fontWeight: '700',
            fontDisplay: 'swap',
        },
    },
    {
        name: 'Greycliff',
        files: [GreycliffMedium],
        options: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontDisplay: 'swap',
        },
    },
    {
        name: 'Greycliff',
        files: [GreycliffRegular],
        options: {
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
        },
    },
];

export default fonts;
