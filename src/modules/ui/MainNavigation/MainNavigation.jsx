import loadable from '@loadable/component';
import React from 'react';
import { PropTypes } from 'prop-types';
import { hooks } from '../../../../utils';

import NavigationLinks from './NavigationLinks';

import ColorLine, { colorLineKeyframes } from '../ColorLine';
import DynamicContainer from '../Layout/DynamicContainer';
import { ContainerTypes } from '../Layout/constants';
import LanguageSwitcher from '../LanguageSwitcher';
import SocialNetworks from '../LanguageSwitcher';
import * as Icons from '../Icons';

// const ModelLogo = loadable(() => import('./../../3d/Models/Logo'));

const { useStars } = hooks;

const MainNavigation = ({ styles, rules, isMenuVisible, closeMenu }) => {
    const containerRef = React.useRef();
    const [logoMounted, setLogoMounted] = React.useState(false);

    const { colorLines } = useStars();

    React.useEffect(() => {
        if (isMenuVisible && !logoMounted) {
            setLogoMounted(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMenuVisible]);

    return (
        <DynamicContainer
            isMenuVisible={isMenuVisible}
            columns={12}
            type={ContainerTypes.FLEX}
            extend={{ container: rules.container }}
            reference={containerRef}
            dark
        >
            <button type="button" onClick={closeMenu} className={styles.closeButton}>
                <Icons.Cross className={styles.closeButtonIcon} />
            </button>

            <DynamicContainer
                isFluid
                columns={12}
                type={ContainerTypes.GRID}
                extend={{ container: rules.fluidContainer }}
            >
                <DynamicContainer columns={6} extend={{ container: rules.logoContainer }}>
                    {logoMounted && <span>Placeholder just ignore this</span>}
                </DynamicContainer>

                <DynamicContainer columns={6} as="nav" extend={{ container: rules.navigationContainer }}>
                    <LanguageSwitcher inNavigation extend={{ container: rules.langsContainer }} />
                    <NavigationLinks isMenuVisible={isMenuVisible} />
                    <DynamicContainer type={ContainerTypes.FLEX}>
                        <SocialNetworks inNavigation />
                    </DynamicContainer>
                </DynamicContainer>
                {isMenuVisible && (
                    <>
                        {/* Uncomment when stars performance test results arive */}

                        <ColorLine keyframe={colorLineKeyframes.leftTranslate} {...colorLines[1]} />
                        <ColorLine keyframe={colorLineKeyframes.rightTranslate} {...colorLines[2]} />
                        <ColorLine keyframe={colorLineKeyframes.rightTranslate} {...colorLines[3]} />
                    </>
                )}
            </DynamicContainer>
        </DynamicContainer>
    );
};

MainNavigation.propTypes = {
    styles: PropTypes.shape({
        closeButton: PropTypes.string.isRequired,
        // line: PropTypes.string.isRequired,
        // firstLine: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        sectionTitle: PropTypes.string.isRequired,
        marginedBlock: PropTypes.string.isRequired,
    }).isRequired,
    rules: PropTypes.shape({
        container: PropTypes.func.isRequired,
        fluidContainer: PropTypes.func.isRequired,
        logoContainer: PropTypes.func.isRequired,
        langsContainer: PropTypes.func.isRequired,
        navigationContainer: PropTypes.func.isRequired,
    }).isRequired,
    isMenuVisible: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
};

export default MainNavigation;
