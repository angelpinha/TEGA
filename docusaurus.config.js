/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TEGA',
  tagline: 'La luz como materia en la Arquitectura',
  url: 'https://angelpinha.github.io',
  baseUrl: '/TEGA/', // Landing Page.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/minimal-icon32.png',
  organizationName: 'angelpinha', // Usually your GitHub org/user name.
  projectName: 'TEGA', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      // title: 'Trabajo especial de grado en Arquitectura',
      logo: {
        alt: 'AngelPinha',
        src: 'img/black-logo.svg',
        srcDark: 'img/white-logo.svg'
      },
    },
    footer: {
        style: 'dark',
        copyright: `Hecho con ❤️ por Angel Piña`, // ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/angelpinha/TEGA',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
