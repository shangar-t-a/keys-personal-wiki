import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Shangar's Portfolio🤖",
  tagline: "Shangar (Keys') Portfolio, Learning hub and more...",
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://shangar-t-a.github.io',
  // Base path, /<base-path>/
  // For GitHub pages deployment, '/<projectName>/'
  baseUrl: '/keys-personal-wiki/',

  // GitHub pages deployment config.
  organizationName: 'shangar-t-a', // Usually your GitHub org/user name.
  projectName: 'keys-personal-wiki', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Keys' Portfolio",
      logo: {
        alt: "Keys' Site Logo",
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kbSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://github.com/shangar-t-a/keys-personal-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Knowledge Base',
              to: '/docs/knowledge-base/home',
            },
            {
              label: 'Projects',
              to: '/docs/projects/home',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/shangar-arivazhagan/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shangar-t-a/keys-personal-wiki',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Keys',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shangar Arivazhagan (Keys), Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
