import { theme } from 'gatsby-theme-fela';
import React from 'react';

import { default as useWindowSize } from './useWindowSize';

export const useObserveTheme = sectionRefs => {
    const windowSize = useWindowSize();

    const [section, setSection] = React.useState({
        order: 0,
        element: null,
        theme: 'dark',
    });

    React.useEffect(() => {
        let observer;

        if (sectionRefs && windowSize) {
            const observeCallback = entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const entryIndex = sectionRefs.indexOf(entry.target);

                        setSection({
                            order: entryIndex,
                            element: entry.target,
                            theme: entry.target.getAttribute('data-header-theme'),
                        });
                    }
                });
            };

            const options = {
                rootMargin: `0px 0px -${windowSize.height - theme.dimensions.headerHeight / 2}px 0px`,
                threshold: 0,
            };

            // eslint-disable-next-line
            const observer = new IntersectionObserver(observeCallback, options);

            sectionRefs.forEach(sectionElement => observer.observe(sectionElement));
        }

        return () => {
            observer && observer.disconnect();
        }; // cleanup

        // eslint-disable-next-line
    }, [sectionRefs, windowSize.height]);

    return section;
};
