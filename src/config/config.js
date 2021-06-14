const Config = {
    routes: {
        '/': '/',

        references: {
            moneyStep: '/money-step',
            criticalStates: '/critical-states',
            showcase: '/showcase',
        },
    },
    departments: {
        web: 'web',
        mobile: 'mobile',
        general: 'general',
        design: 'design',
    },
    linkTypes: {
        localized: 'localized',
        external: 'external',
    },
    links: {
        csHome: 'https://ackee.cz',
        enHome: 'https://ackee.cz/en',
        deHome: 'https://www.ackee.de/',
        dePhone: '+493054907495',
        deInfoMail: 'info@ackee.de',
    },
};

module.exports = Config;
