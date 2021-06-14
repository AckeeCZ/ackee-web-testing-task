import React from 'react';
import { PropTypes } from 'prop-types';
import Config from '../../../../config';
import { usePushEvents } from '../../../../hooks';

import Header from '../../Header';
import Main from '../Main';
import Footer from '../../Footer';

import { CustomCursor } from '../../../custom-cursor';
import { HoverProvider } from '../../../custom-cursor';

const Layout = ({ children, footerRef }) => {
    usePushEvents([Config.experiments.awards.event]);

    return (
        <>
            <HoverProvider>
                <CustomCursor />
                {/* <GlobalLoader show />*/}
                <Header />
                <Main footerRef={footerRef}>{children}</Main>
                <Footer reference={footerRef} lazyLoaded />
            </HoverProvider>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
    footerRef: PropTypes.shape(),
};

Layout.defaultProps = {
    footerRef: null,
};

export default Layout;
