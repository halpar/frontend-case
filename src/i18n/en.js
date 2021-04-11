/* eslint-disable sonarjs/no-duplicate-string */
export default {
    successfulLoginMsg: 'Successfully logged in',
    failedLoginMsg: 'Something went wrong :(',
    welcomeMessage: 'Hello',
    logout: 'Logout',
    login: 'Login',
    landingPage: {
        bannerSection: {
            motto: 'A modern publishing platform',
            text: 'Grow your audience and build your online brand',
            buttonLeft: 'Start for Free',
            buttonRight: 'Learn More',
        },
        featuresSection: {
            title1: 'Free, open, simple',
            title2: 'Powerful tooling',
        },
        infrastructureSection: {
            title: 'State of Art Infrastructure',
        },
        overviewSection: {
            motto: ' Designed for the future',
            title: 'Introducing an extensible editor',
            description:
                'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor supports management of multiple blogs and allow easy manipulation of embeds such as images, videos and Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
            title2: 'Robust content management',
        },
    },
    userHeaderContent: [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'Contact US',
            path: '/contact-us',
        },
        {
            id: 3,
            name: 'Hello Scorp',
            path: '/',
        },
    ],
    guestHeaderContent: [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'Contact US',
            path: '/contact-us',
        },
    ],

    footerData: [
        {
            id: 1,
            title: 'Product',
            datas: [
                {
                    id: 1,
                    name: 'Overview',
                    path: '/',
                },
                {
                    id: 2,
                    name: 'Pricing',
                    path: '/',
                },
                {
                    id: 3,
                    name: 'Marketplace',
                    path: '/',
                },
                {
                    id: 4,
                    name: 'Features',
                    path: '/',
                },
                {
                    id: 5,
                    name: 'Integrations',
                    path: '/',
                },
            ],
        },
        {
            id: 2,
            title: 'Company',
            datas: [
                {
                    id: 6,
                    name: 'About',
                    path: '/',
                },
                {
                    id: 7,
                    name: 'Team',
                    path: '/',
                },
                {
                    id: 8,
                    name: 'Blog',
                    path: '/',
                },
                {
                    id: 9,
                    name: 'Careers',
                    path: '/',
                },
            ],
        },
        {
            id: 3,
            title: 'Connect',
            datas: [
                {
                    id: 10,
                    name: 'Contact US',
                    path: '/contact-us',
                },
                {
                    id: 11,
                    name: 'Newsletter',
                    path: '/',
                },
            ],
        },
    ],
    formPlaceholders: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        phone: 'Phone number',
        country: 'Country',
        message: 'Description',
    },

    formMessages: {
        successfulFormSubmit: 'Successfully submitted , you can check console.log :)',
        failedFormSubmit: 'Theres an error, Please try again :(',
    },

    countryList: [
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
    ],
};
