---
sidebar_position: 10
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

# Installation

To use Ari, you must have a local development environment: `local` or `cloud`. Currently, I have both. `1` local for daily activities *(in my desktop computer)* and `1` in the cloud for ad-hoc updates or when I'm away from my computer *(borrow any computer, access a website, login and there you go... no setup)*.

Anyway, at the very first time, let you just focus on the local environment with Visual Studio Code only. When you get used to Ari and Ari becomes your online platform, then setting up Cloud environment just takes 5-10 minutes.

## Preparations

1. **Create all essential accounts**

    - [GitHub](https://github.com/signup): to store your data
    - [Cloudflare](https://dash.cloudflare.com/sign-up): to host your website for free
    - [Mailjet](https://app.mailjet.com/signup?lang=en_US): to let your contact page working

2. **Set up your local development environment with Visual Studio Code**

    - Install [Visual Studio Code](https://code.visualstudio.com/)
    - Install [NodeJS](https://nodejs.org/en/)

:::note  
Restart your computer for NodeJS CLI takes effect!
:::

3. **Get default Ari up and running locally**

  To ensure that your local development environment is correctly configured.

    + Extract your Ari *(the Zip file which you downloaded after purchased)* to desired folder.
    + Use Visual Studio Code to open this folder *(File -> Open folder...)*
    + Open the terminal *(Ctrl + `)* and run following command exact order:
      * `npm install` - this would take you 5-10 minutes to finish the installation
      * `npm run build` - less than 30 seconds
      * `npm run start` - a couple of seconds to start the local server

    Ari should be up and running for now 🎉.

:::note  
To stop the local server, (make sure the terminal is active) press `Ctrl + C`
:::

<details>

<summary>Extensions for Visual Studio Code</summary>

**Basic**

- Auto Close Tag (Jun Han)
- Auto Import (steoates)
- Auto Rename Tag (Jun Han)
- MDX (unified) => This helps highlight syntax in MDX files
- Text Power Tools (Dániel Tar) => Slugify your text

**Advanced**

- Better Comments (Aaron Bond)
- Duplicate selection or line (Greg Bacchus)
- ESLint (Microsoft)
- File Utils (Steffen Leistner)
- Headwind (Ryan Hebourn)
- IntelliCode (Microsoft)
- Output Colorizer (IBM)
- Prettier - Code formatter (Prettier)
- Tailwind CSS IntelliSense (Tailwind Labs)

</details>

4. **Update Ari's configuration**

  Open and update all available information which you have at **`app\data\settings\config.tsx`**.

5. **Design and Prepare data for your personal website**

  You need to prepare something:
    - A logo of yours *(it should be your avatar, for this is your personal website)*
    - Your personal information
    - Icons (https://icons8.com/icons, https://www.flaticon.com,...)
    - Pictures for your website (https://unsplash.com)

6. **Testing the Ari locally**

  Let you run `npm run dev` to start the local server to preview your website. When you save any changes, local server will automatically be updated accordingly.

7. **Deploy your website to Cloudflare Pages**

  Up your website to GitHub, connect GitHub to Cloudflare Pages. That's all.

  That's it. Enjoy your website! Promote our website through any channels you have available!

## Local with Visual Studio Code

<div className="video-container">
  <LiteYouTubeEmbed
    id="X8T4qx_VO50"
    playlist={false}
    title="Setup local development environment with Visual Studio Code"
    poster="hqdefault"
    noCookie={true}
  />
</div>

## Cloud with Gitpod.io

<div className="video-container">
  <LiteYouTubeEmbed
    id="X8T4qx_VO50"
    playlist={false}
    title="Setup local development environment with Visual Studio Code"
    poster="hqdefault"
    noCookie={true}
  />
</div>