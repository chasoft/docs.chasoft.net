---
sidebar_position: 88
---

# Deployment

![aris 1.x deployment model](./img/baris-a-1.x-deployment-model.webp)

Deploy a serverless to Cloudflare Pages can not be easier. First you need to create a [private](../getting-started/faqs.mdx) GitHub repository and publish your Baris-A there. The next step is to go to Cloudflare Pages and publish your website with just a few clicks.

:::info
To check whether you declare email *(which is used to register GitHub)* with Git or not, try following command:
```
git config --global user.email
```
If it returns your email address, then everything should be fine to continue.
:::

Assumes that you have had your local development environment already. Follows the instructions below to get started:

## Publish Baris-A to GitHub repository

The most easiest way to publish is through Visual Studio Code.

- Open Visual Studio Code
- Open Baris-A folder *(File -> Open Folder...)*
- Go to Source Control page *(or press Ctrl+Shift+X)*
- Click **`Publish to GitHub`** button

<details>
<summary>Screenshots</summary>

<div style={{textAlign: 'center'}}>

![Publish to GitHub](./img/publish-aris-to-git-hub-the-first-time.webp)

![Publish to GitHub Successfully](./img/publish-aris-to-git-hub-the-first-time-successful.webp)

</div>

:::warning
You must publish your Baris-A to **`GitHub private repository`**.
:::

</details>

## Deploy to Cloudflare pages

- Sign in to Cloudflare
- Go to Pages > Create a project > Connect to Git
- You would need to follow some steps to Authorize Cloudflare to access your GitHub account
- Select a repository *(your newly created repository)* > Click **"Begin setup"** button
- Set up builds and deployments: choose `Remix` as your `Framework preset` > Click `Save and Deploy` button

  <details>
  <summary>Screenshots</summary>
  <div style={{textAlign: 'center'}}>

  ![Deploy to Cloudflare Pages](./img/deploy-to-cloudflare.webp)

  </div>
  </details>

One minute later ⚡ you have a website deployed globally at the address `https://{yourname}.pages.dev`, if you own a domain, add it later in minutes. 🎉 Enjoy your website! Promote our website through any channels you have available!

## Video tutorial

Updating...