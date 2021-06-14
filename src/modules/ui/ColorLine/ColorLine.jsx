import { FelaKeyframe } from 'gatsby-theme-fela';
import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import * as Styles from './ColorLine.styles';

const ColorLine = ({ styles, className, keyframe, animationTimeMS }) => {
    if (keyframe) {
        return (
            <FelaKeyframe keyframe={keyframe}>
                {animationName => (
                    <FelaComponent
                        style={Styles.floatingLine}
                        animationTimeMS={animationTimeMS}
                        animationName={animationName}
                    >
                        {({ className }) => <span className={`${styles.line} ${className}`}></span>}
                    </FelaComponent>
                )}
            </FelaKeyframe>
        );
    }
    return <span className={`${styles.line} ${className}`}></span>;
};

ColorLine.propTypes = {
    styles: PropTypes.shape().isRequired,
    keyframe: PropTypes.func.isRequired,
    animationTimeMS: PropTypes.number.isRequired,
};

export default ColorLine;
