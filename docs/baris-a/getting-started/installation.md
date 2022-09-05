---
sidebar_position: 10
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

# Installation

Baris-A is a serverless template. To deploy your application to the cloud, there is no need to do anything. Connect your GitHub repository where you store your Baris-A to Cloudflare and next next next,... and you have your website deployed globally at the address `https://{yourname}.pages.dev`, if you own a domain, add it later in minutes.

What you are dealing with Baris-A is `local development environment`. You need to set up a local development environment to development, preview your Baris-A *(your website)* locally. When it is ready to be public, you push it to your GitHub repository and do the [deployment process](../guides/deployment.md).

## Install softwares {#install-softwares}

1. **Visual Studio Code** (VS Code) - a code editor redefined and optimized for building and debugging modern web and cloud applications

    Go to https://code.visualstudio.com/, download and install.

2. **NodeJs** - is a JavaScript runtime built on Chrome's V8 JavaScript engine.

  Go to https://nodejs.org, download and install the long-term support package which is recommended for most users - *current version is `16.17.0 LTS`*

  After installing, run a command-line terminal, run command `npm -v`. If it shows you `16.17.0`, then you can start using VS Code. If any error occurs, just restart your computer.

3. **Git** - a free and open-source software for distributed version control.

  Go to https://git-scm.com/download, download and install `Git`.

  We need to config settings to get `Git` and `GitHub` connected. Open a command-line terminal, run following commands *(don't forget to replace `your-email` and `your-name` by yours)*:

  ```
  git config --global user.email "your-email"
  git config --global user.name "your-name"
  ```

  :::note
  You can install `Git` later when you want to push your website to GitHub. Not required if you just run Baris-A locally.
  :::

<details>
<summary>Notes for installing Git in Windows</summary>

- Select Destination Location => keep default settings
- Select Components => keep default settings
- Select Start Menu Folder => keep default settings
- Choosing the default editor used by Git => Choose `Use Visual Studio Code as Git's default editor`
- Adjusting the name of the initial branch in new repositories => keep default settings
- Adjusting your PATH environment => keep default settings
- Choosing the SSH executable => keep default settings
- Choosing HTTPS transport backend => keep default settings
- Configuring the line ending conversions => Choose: `Checkout as-is, commit Unix-style line endings`
- Configuring the terminal emulator to use with Git Bash => keep default settings
- Choose the default behavior of "git pull" => keep default settings
- Choose a credential helper => keep default settings
- Configuring extra options => keep default settings
- Configuring experimental options => keep default settings

</details>

## Run Baris-A locally

To ensure that your local development environment is correctly configured.

- Extract your Baris-A *(the Zip file which you downloaded after purchased)* to desired folder.
- Use Visual Studio Code to open this folder *(File -> Open folder...)*
- Open the terminal inside VS Code *(Ctrl + `)*  and run following command exact order:

  * `npm install` - this would take you 5-10 minutes to finish the installation
  * `npm run build` - less than 30 seconds
  * `npm run start` - a couple of seconds to start the local server

Baris-A should be up and running for now 🎉.

:::note  
To stop the local server, (make sure the terminal is active) press `Ctrl + C`
:::

## Video

I will update the video soon...