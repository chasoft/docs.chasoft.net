---
sidebar_position: 87
---

# Styling and Layout

Baris-A is built to help you beautiful personal websites fast _(performance)_ and easy _(update and deploy)_ starting free _(thanks to free-tier of Cloudflare Pages)_.

With initial version of Baris-A, you can design your website will the definition of `pages` using using [content blocks](./content-blocks), and can customize the color of Baris-A.

## Content blocks

Baris-A comes with many [content blocks](./content-blocks.mdx) available for you to use.

<details>

<summary>List of Content blocks</summary>

- [Address](./content-blocks.mdx#address)
- [Breadcrumbs](./content-blocks.mdx#breadcrumbs)
- [Category Grid](./content-blocks.mdx#category-grid)
- [Contact Form](./content-blocks.mdx#contact-form)
- [Facts](./content-blocks.mdx#facts)
- [Faqs](./content-blocks.mdx#faqs)
- [Header Block](./content-blocks.mdx#header-block)
- [Image](./content-blocks.mdx#image)
- [Image Grid](./content-blocks.mdx#image-grid)
- [links](./content-blocks.mdx#links)
- [List](./content-blocks.mdx#list)
- [Map](./content-blocks.mdx#map)
- [Quote Block](./content-blocks.mdx#quote-block)
- [Resume](./content-blocks.mdx#resume)
  + [Resume.Experience](./content-blocks.mdx#resume-experience)
  + [Resume.Education](./content-blocks.mdx#resume-education)
- [Telephone & Email](./content-blocks.mdx#telephone-email-block)
  + [Telephone](./content-blocks.mdx#telephone)
  + [Email](./content-blocks.mdx#email)
  + [telephone-email](./content-blocks.mdx#telephone-email)
- [Text](./content-blocks.mdx#text)
- [Text Block](./content-blocks.mdx#text-block)
- [Video](./content-blocks.mdx#video)
- [Youtube](./content-blocks.mdx#youtube)

</details>

## Change color of Baris-A

At line `37`, you can choose the color of your website from presets: yellow, yellowCalm, pink, pinkLight, blue, darkPurple. Or you can create your own color palette and assign to `selectedColorsPreset` variable.

```ts title="/tailwind.config.js"
//highlight-next-line
const selectedColorsPreset = yellow
```

To make Baris-A simple, we just have a short set of colors, as demonstrated below.

```ts
const yellow = {
   secondary: "#d97706",
   secondaryDark: "#b45309"
}
```

## Video tutorial

Updating...