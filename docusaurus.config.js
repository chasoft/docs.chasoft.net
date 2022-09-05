// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chasoft Labs',
  tagline: 'Here you will find a comprehensive guide to all products from Chasoft Labs',
  url: 'https://docs.chasoft.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chasoft', // Usually your GitHub org/user name.
  projectName: 'docs.chasoft.net', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch:"gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chasoft/docs.chasoft.net/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chasoft/docs.chasoft.net/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chasoft Labs',
        logo: {
          alt: 'Chasoft Labs Documentation',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/chasoft/docs.chasoft.net',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Chasoft Store',
                to: 'https://store.chasoft.net',
              },
              {
                label: 'Aris - Serverless Website',
                to: 'https://store.chasoft.net/l/ari-elegant-and-powerful-serverless-website',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Email',
                href: 'mailto:support@chasoft.net',
              },
              {
                label: 'Facebook (DM)',
                href: 'https://facebook.com/hongying.gao',
              },
              {
                label: 'Twitter (DM)',
                href: 'https://twitter.com/vBizChain',
              },
              {
                label: 'Telegram',
                to: 'https://store.chasoft.net/l/telegram-support-channel-for-ari',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chasoft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chasoft Labs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
