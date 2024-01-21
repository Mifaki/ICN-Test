// Navigation
export const NAV_LINKS = [
    {
        href: '/',
        key: 'bitcoin',
        label: 'Bitcoin',
        children: [
            {
                href: '/',
                key: 'bitcoin-1',
                label: 'Bitcoin-1',  
            },
            {
                href: '/',
                key: 'bitcoin-2',
                label: 'Bitcoin-2',  
            },
            {
                href: '/',
                key: 'bitcoin-3',
                label: 'Bitcoin-3',  
            }
        ]
    },
    {
        href: '/',
        key: 'aplikasi',
        label: 'Aplikasi',
        children: [
            {
                href: '/',
                key: 'aplikasi-1',
                label: 'Aplikasi-1',  
            },
            {
                href: '/',
                key: 'aplikasi-2',
                label: 'Aplikasi-2',  
            },
            {
                href: '/',
                key: 'aplikasi-3',
                label: 'Aplikasi-3',  
            }
        ]
    },
    {
        href: '/',
        key: 'berita',
        label: 'Berita',
        children: [
            {
                href: '/',
                key: 'berita-1',
                label: 'Berita-1',  
            },
            {
                href: '/',
                key: 'berita-2',
                label: 'Berita-2',  
            },
            {
                href: '/',
                key: 'berita-3',
                label: 'Berita-3',  
            }
        ]
    },
    {
        href: '/',
        key: 'blockchain',
        label: 'Blockchain',
    },
    {
        href: '/',
        key: 'nft',
        label: 'NFT',
        children: [
            {
                href: '/',
                key: 'nft-1',
                label: 'NFT-1',  
            },
            {
                href: '/',
                key: 'nft-2',
                label: 'NFT-2',  
            },
            {
                href: '/',
                key: 'nft-3',
                label: 'NFT-3',  
            }
        ]
    },
    {
        href: '/',
        key: 'acara',
        label: 'Acara',
    }
]

// Bread Crumbs
export const CRUM_SECTIONS = [
    {
        key: 'home',
        section: 'Home'
    },
    {
        key: 'berita',
        section: 'Berita'
    },
    {
        key: 'bitcoin',
        section: 'Bitcoin'
    },
    {
        key: 'bitcoin-vs-saham-mana-yang-lebih-untung?',
        section: 'Bitcoin VS Saham Mana yang Lebih Untung?'
    }
]

// Article
export const NEWS_DATA = {
    category: 'BITCOIN',
    title: 'Bitcoin VS Saham, Mana Yang Lebih Untung?',
    thumbnailUrl: '/news-thumbnail.jpg',
    author: 'User',
    postedAt: 'Rabu, 19 January 2021',
    socials: [
        {
            key: 'facebook',
            icon: '/facebook-icon.jpg',
            label: 'Share',
            socialUrl: 'https://www.facebook.com'
        },
        {
            key: 'twitter',
            icon: '/twitter-icon.jpg',
            label: 'Share',
            socialUrl: 'https://www.twitter.com'
        },
        {
            key: 'copy',
            icon: '/copy-icon.png',
            label: 'Copy',
        }
    ],
    auhorAvatar: '/news-thumbnail.jpg',
    authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    authorSocials: {
        linkedinUrl: 'https://www.linkedin.com/',
        twitterUrl: 'https://twitter.com/',
        emailUrl: 'https://gmail.com/'
    }
}

// TOPICS
export const NEWS_TOPICS = [
    'Topics 1',
    'Topics 2',
    'Topics 3',
    'Topics 4',
    'Topics 5',
    'Topics 6',
    'Topics 7',
    'Topics 8',
    'Topics 9',
] 

// Table
export const TABLES_DATA = {
    head: [
        'Aset',
        'Harga Beli (2016)',
        'Harga Jual (2020)',
        'Profit (Rp)',
        'Profit (%)'
    ],
    body: [
        {
            image: '/bitcoin-logo.png',
            buy: '12.974.831',
            sell: '410.410.296',
            profitNum: '397.435.465',
            profitPercents: '3.063,13',
        },
        {
            image: '/bca-logo.png',
            buy: '16.200.000',
            sell: '34.000.000',
            profitNum: '17.800.000',
            profitPercents: '109,88',
        },
        {
            image: '/bitcoin-logo.png',
            buy: '12.974.831',
            sell: '410.410.296',
            profitNum: '397.435.465',
            profitPercents: '3.063,13',
        },
        {
            image: '/bca-logo.png',
            buy: '16.200.000',
            sell: '34.000.000',
            profitNum: '17.800.000',
            profitPercents: '109,88',
        },
        {
            image: '/bitcoin-logo.png',
            buy: '12.974.831',
            sell: '410.410.296',
            profitNum: '397.435.465',
            profitPercents: '3.063,13',
        },
    ],
    caption: 'Perbandingan Keuntungan Bitcoin dan Saham'
}

// Tag
export const NEWS_TAGS = [
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
    '#Bitcoin',
]