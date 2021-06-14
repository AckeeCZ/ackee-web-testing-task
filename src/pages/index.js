import * as React from 'react';
import { Link } from 'gatsby-plugin-intl';

import config from '../config';

const referencesRoutes = config.routes.references;

export default function Component() {
    return (
        <>
            <h1>Our case studies</h1>
            {Object.values(referencesRoutes).map(route => (
                <Link to={route}>
                    <p>{route}</p>
                </Link>
            ))}
        </>
    );
}
