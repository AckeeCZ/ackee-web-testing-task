import React from 'react';
import Image from 'gatsby-image';

/**
 * Intersection observer does not work correctly in older version of Edge
 * means the versions that that are not based on Chromium.
 * Without eager loading the images will be stacked on SVG or other placeholder.
 * Ideal way to detect them is via ol reversed, see: https://caniuse.com/ol-reversed
 */
const Img = props => {
    const loading = React.useMemo(() => {
        if (typeof document !== `undefined`) {
            const isOldEdgeOrIE = !('reversed' in document.createElement('ol'));
            return isOldEdgeOrIE ? 'eager' : 'lazy';
        }

        return 'lazy';
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Image {...{ loading, ...props }} />;
};

export default Img;
