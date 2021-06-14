//  this cannot be imported from dependencies
import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import { PropTypes } from 'prop-types';
import Img from '../../../../components/Img';

const Image = ({ style, imgStyle, src }) => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { regex: "/references/case-studies/.*/" } }) {
                nodes {
                    base
                    relativePath
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1280) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    `);

    const match = React.useMemo(
        () => images.allFile.nodes.find(({ relativePath }) => src === relativePath),
        [images, src],
    );

    const {
        childImageSharp: { fluid },
    } = match;

    return (
        <Img
            style={{ width: '100%', height: '100%', ...style }}
            imgStyle={{ objectFit: 'contain', objectPosition: 'center bottom', ...imgStyle }}
            fluid={fluid}
        />
    );
};

Image.propTypes = {
    styles: PropTypes.shape().isRequired,
    src: PropTypes.string.isRequired,
    style: PropTypes.shape(),
    imgStyle: PropTypes.shape(),
};

export default Image;
