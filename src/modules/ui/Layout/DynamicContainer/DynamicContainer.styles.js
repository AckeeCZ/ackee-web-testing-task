import { ContainerTypes } from '../constants';

export const container = ({ columns, justify, type, isFluid, startAt, xsColumns }) => {
    return {
        gridColumnStart: 'auto',
        gridColumnEnd: `span ${xsColumns}`,

        overflow: 'hidden',

        display: type || ContainerTypes.BLOCK,
        ...(type === ContainerTypes.GRID
            ? {
                  gridColumnGap: '1rem',
              }
            : {}),

        justifySelf: justify,
        padding: isFluid && '7.5rem 1.5rem',
        width: isFluid && 'calc(100% - 3rem)',

        tabletLarge: {
            gridColumnStart: startAt || 'auto',
            gridColumnEnd: `span ${columns}` || 'unset',

            gridTemplateColumns: type === ContainerTypes.GRID ? 'repeat(auto-fill, minmax(6.3%, 1fr))' : 'none',
            gridColumnGap: type === ContainerTypes.GRID ? '1.5rem' : undefined,

            padding: isFluid && '10.4375rem 3.75rem',

            width: isFluid && 'calc(100% - 7.5rem)',
        },

        desktopFullHD: {
            maxWidth: isFluid && '95rem',
            margin: isFluid && 'auto',
        },
    };
};
