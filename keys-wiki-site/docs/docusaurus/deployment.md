---
sidebar_label: 'Deploy Docusaurus Site'
sidebar_level: 3
---

# Deploy Docusaurus Site

## Deploy to GitHub Pages

:::info

Reference:

1. [https://docusaurus.io/docs/deployment](https://docusaurus.io/docs/deployment)
2. [https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)

:::

### Configuration

1. Update the docusaurus config file with required changes. For explanation, type script config is used which is used
   in this project. You can find the config file in the root directory of the project with the name
   `docusaurus.config.js`.

2. Update `url` with the GitHub Pages URL. For example, `https://username.github.io`.

3. Update `baseUrl` with the repository name. For example, `/repository-name/`.

   :::info

   The `baseUrl` should start with `/` and end with `/`.

   :::

4. Update the `organizationName` and `projectName` with the GitHub username and repository name respectively.

### Run Deployment

#### Using bash and gh-pages

1. Run the following command to build and deploy the site to GitHub Pages.

   ```bash
   GIT_USER=<GITHUB_USERNAME> yarn deploy
   ```

:::info

The above command triggers `docusaurus deploy` command internally.

:::

:::important

This procedure requires setting up pages in the GitHub repository settings.

1. Go to the repository settings -> Pages.
2. Under `Build and deployment` section, select Source as `Deploy from a branch`.
3. Select the branch as `gh-pages` and directory as `/root` and click on `Save`.

:::

#### Setting up GitHub Actions

1. GitHub actions pipeline can be copied from docusaurus deployment site.
2. Update required fields like root directory branch name etc., if required.

:::important

This procedure requires setting up pages in the GitHub repository settings.

1. Go to the repository setting -> Pages.
2. Under `Build and deployment` section, select Source as `GitHub Actions`.

:::
