import React from 'react';
import { PropTypes } from 'prop-types';

import HeaderInner from '../HeaderInner';

const HeaderContainer = ({ theme, ...headerProps }) => {
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const {
            dimensions: { headerHeight },
        } = theme;

        function handleScroll() {
            if (window.scrollY > headerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return <HeaderInner {...{ isSticky, ...headerProps }} />;
};

HeaderContainer.propTypes = {
    theme: PropTypes.shape().isRequired,
    headerProps: PropTypes.shape(),
};

HeaderContainer.defaultProps = {
    headerProps: {},
};

export default HeaderContainer;
