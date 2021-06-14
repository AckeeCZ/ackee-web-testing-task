import { combineRules } from 'fela';

export const containerWrapper = ({ fullHeight }) => ({
    height: '100%',
    tablet: {
        maxHeight: fullHeight ? '100vh' : '80vh',
    },
});

export const container = combineRules(containerWrapper, ({ background }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    background,
    justifyItems: 'center',
    tablet: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
}));
