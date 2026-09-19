import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shangar Arivazhagan',
  tagline: 'Technical Lead (AI & Software Development)',
  favicon: 'img/favicon.ico',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],

  // Production URL
  url: 'https://shangar-t-a.github.io',
  // Base path, /<base-path>/
  // For GitHub pages deployment, '/<projectName>/'
  baseUrl: '/keys-personal-wiki/',

  // GitHub pages deployment config.
  organizationName: 'shangar-t-a', // Usually your GitHub org/user name.
  projectName: 'keys-personal-wiki', // Usually your repo name.

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `(function() {
        try {
          var saved = localStorage.getItem('keys-accent-theme');
          var theme = saved || 'blue';
          document.documentElement.setAttribute('data-accent-theme', theme);
        } catch (e) {}
      })();`,
    },
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

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
      title: 'Shangar (Keys)',
      logo: {
        alt: "Keys' Site Logo",
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'About',
          to: '/about',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'kbSidebar',
          position: 'left',
          label: 'Engineering Notes',
        },
        {
          href: 'https://www.linkedin.com/in/shangar-arivazhagan/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/shangar-t-a',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'About Me',
              to: '/about',
            },
            {
              label: 'Projects Gallery',
              to: '/docs/projects/home',
            },
            {
              label: 'Engineering Notes',
              to: '/docs/knowledge-base/home',
            },
          ],
        },
        {
          title: 'Featured Work',
          items: [
            {
              label: 'Bella Assist (AI Assistant & Wealth Manager)',
              to: '/docs/projects/bella-assist',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/shangar-arivazhagan/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shangar-t-a',
            },
          ],
        },
      ],
      copyright: `© 2025–${new Date().getFullYear()} Shangar Arivazhagan (Keys)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
