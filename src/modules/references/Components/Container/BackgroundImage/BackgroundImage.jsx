//  this cannot be imported from dependencies
import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import { PropTypes } from 'prop-types';
import Img from '../../../../../components/Img';

const Image = ({ children, src, imgStyle, style }) => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { regex: "/references/case-studies/.*/" } }) {
                nodes {
                    base
                    relativePath
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 4096) {
                            ...GatsbyImageSharpFluid
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
        <>
            <Img
                style={{ position: 'absolute', height: '100%', width: '100%', ...style }}
                imgStyle={{ objectFit: 'contain', objectPosition: 'center center', ...imgStyle }}
                fluid={fluid}
            />
            {children}
        </>
    );
};

Image.propTypes = {
    styles: PropTypes.shape().isRequired,
    src: PropTypes.string.isRequired,
};

export default Image;
