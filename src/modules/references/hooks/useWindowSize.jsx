import * as React from 'react';
import { debounce } from 'lodash';

const useWindowSize = (debounceDelay = 100) => {
    const [windowSize, setWindowSize] = React.useState(
        typeof window !== 'undefined'
            ? { width: window.innerWidth, height: window.innerHeight }
            : { width: 0, height: 0 },
    );
    React.useLayoutEffect(() => {
        const handler = function () {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        const debouncedHandler = debounce(handler, debounceDelay);

        debouncedHandler();
        window.addEventListener('resize', debouncedHandler);
        return () => window.removeEventListener('resize', handler);
    }, [debounceDelay]);
    return windowSize;
};

export default useWindowSize;
