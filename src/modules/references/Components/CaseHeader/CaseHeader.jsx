import Helmet from 'react-helmet';

import React from 'react';
import { PropTypes } from 'prop-types';
import * as UI from '../../../ui';

import { useObserveTheme } from '../../hooks';

import { HeaderThemeColors } from './consts';

const { Header, HeaderType } = UI;

const CaseHeader = () => {
    const [mounted, setMounted] = React.useState(false);

    const sections = React.useRef(null);
    const { theme } = useObserveTheme(mounted ? sections.current : undefined);

    const { backButtonColors, logoColors, burgerColors } = HeaderThemeColors[theme];

    React.useEffect(() => {
        // this is not nice, but the usecase jutifies it, easiest solution to generate case studies
        // without the need of javascript knowledge of the editor
        // the editor doesnt have to send refs to all sections this way
        sections.current = Array.from(document.querySelectorAll(`section[data-header-theme]`));

        setMounted(true);
    }, []);

    return (
        <>
            <Helmet
                link={[
                    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap',
                    },
                ]}
            />
            <Header
                {...{
                    backButtonColors,
                    logoColors,
                    burgerColors,
                    type: HeaderType.CASE_STUDY,
                }}
            />
        </>
    );
};

CaseHeader.propTypes = {
    backButtonColors: PropTypes.shape(),
    logoColors: PropTypes.shape(),
};

CaseHeader.defaultProps = {
    backButtonColors: {
        background: 'transparent',
        icon: '#0000FF',
        border: '#0000FF',
    },
    logoColors: {
        background: '#0000FF',
        text: '#fff',
        border: '#0000FF',
    },
    burgerColors: {
        background: '#0000FF',
        text: '#FF00FF',
        icon: '#fff',
        border: '#0000FF',
    },
};

export default CaseHeader;
