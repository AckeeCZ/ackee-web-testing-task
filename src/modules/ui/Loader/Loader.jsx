import React from 'react';
import PropTypes from 'prop-types';

import { connect as connectFela, FelaComponent } from 'react-fela';

import * as Styles from './Loader.styles';

import { FelaKeyframe } from 'gatsby-theme-fela';

const loaderAnim = () => ({
    '100%': {
        backgroundPosition: -2300,
    },
});

const Loader = ({ children, show, styles }) => {
    if (!show) {
        return <>{children}</>;
    }

    return (
        <div className={styles.loader}>
            <FelaKeyframe keyframe={loaderAnim}>
                {animationName => (
                    <FelaComponent style={Styles.loaderElement} animationName={animationName}>
                        {({ className }) => <div className={className} />}
                    </FelaComponent>
                )}
            </FelaKeyframe>
        </div>
    );
};

Loader.propTypes = {
    show: PropTypes.bool,
    styles: PropTypes.shape().isRequired,
};

Loader.defaultProps = {
    children: null,
    show: true,
};

export default connectFela(Styles)(Loader);
