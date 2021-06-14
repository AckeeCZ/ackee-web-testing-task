import Config from '../../../../config';

const links = {
    'cs-en': [
        {
            id: 'mainNavigation.navigation.home',
            href: '/',
        },
        {
            id: 'mainNavigation.navigation.apps',
            href: Config.routes['/app-development'],
        },
        {
            id: 'mainNavigation.moreLinks.career',
            href: Config.routes['/career'],
        },
        {
            id: 'mainNavigation.navigation.references',
            href: '/references',
        },
        {
            id: 'mainNavigation.navigation.about',
            href: Config.routes['/about-us'],
        },
        {
            id: 'mainNavigation.navigation.contact',
            href: Config.routes['/contact'],
        },
    ],
    de: [
        {
            id: 'mainNavigation.navigation.home',
            href: '/',
        },
        {
            id: 'mainNavigation.navigation.apps',
            href: Config.routes['/app-development'],
        },
        {
            id: 'mainNavigation.navigation.references',
            href: '/references',
        },
        {
            id: 'mainNavigation.navigation.about',
            href: Config.routes['/about-us'],
        },
        {
            id: 'mainNavigation.navigation.contact',
            href: Config.routes['/contact'],
        },
    ],
};

export const content = {
    navigation: {
        links: links['cs-en'],
    },
    moreLinks: {
        links1: [
            {
                id: 'mainNavigation.moreLinks.design',
                href: Config.routes['/design'],
            },
            {
                id: 'mainNavigation.moreLinks.blog',
                href: 'common.links.blog',
            },
            {
                id: 'mainNavigation.moreLinks.prague',
                href: Config.routes['/contact/prague'],
            },
            {
                id: 'mainNavigation.moreLinks.berlin',
                href: Config.routes['/contact/berlin'],
            },
        ],
    },
};
