---
sidebar_position: 40
---

# Styling and Layout

Ari is built to help you create powerful personal websites fast _(performance)_ and easy _(update and deploy)_ starting free _(thanks to free-tier of Cloudflare Pages)_.

With initial version of Ari, you can design your portfolio article, blog post using [content blocks](./content-blocks), and can customize the color of Ari.

## Content blocks

Ari comes with many [content blocks](./content-blocks.mdx) available for you to use.

<details>

<summary>List of Content blocks</summary>

- [Alert](./content-blocks.mdx#alert)
- [Align](./content-blocks.mdx#align)
- [Facts](./content-blocks.mdx#facts)
- [FaqsBlock](./content-blocks.mdx#faqsblock)
- [Features](./content-blocks.mdx#features)
  + [Features.Simplicity](./content-blocks.mdx#featuressimplicity)
  + [Features.Blocks](./content-blocks.mdx#featuresblocks)
  + [Features.Picture](./content-blocks.mdx#featurespicture)
  + [Features.Art](./content-blocks.mdx#featuresart)
- [Highlight](./content-blocks.mdx#highlight)
- [Image](./content-blocks.mdx#image)
- [LatestBlogPosts](./content-blocks.mdx#latestblogposts)
- [LatestContent](./content-blocks.mdx#latestcontent)
- [LatestPortfolio](./content-blocks.mdx#latestportfolio)
- [Link](./content-blocks.mdx#link)
- [LinksGrid](./content-blocks.mdx#linksgrid)
- [LinksList](./content-blocks.mdx#linkslist)
- [Map](./content-blocks.mdx#map)
- [Markdown](./content-blocks.mdx#markdown)
- [Picture](./content-blocks.mdx#picture)
- [PricingTable](./content-blocks.mdx#pricingtable)
  + [PricingTable.List](./content-blocks.mdx#pricingtablelist)
  + [PricingTable.TwoColumn](./content-blocks.mdx#pricingtabletwocolumn)
  + [PricingTable.ThreeColumn](./content-blocks.mdx#pricingtablethreecolumn)
- [Resume](./content-blocks.mdx#resume)
  + [Resume.Experience](./content-blocks.mdx#experience)
  + [Resume.Education](./content-blocks.mdx#education)
- [Slider](./content-blocks.mdx#slider)
- [Testimonials](./content-blocks.mdx#testimonials)
- [Translate](./content-blocks.mdx#translate)
- [Video](./content-blocks.mdx#video)
  + [Video.Youtube](./content-blocks.mdx#videoyoutube)

</details>

## Change color of Ari

At line `70`, you can choose the color of your website from presets: yellow, yellowCalm, pink, pinkLight, blue, darkPurple. Or you can create your own color palette and assign to `selectedColorsPreset` variable.

```ts title="/tailwind.config.js"
//selected color is `blue`
const selectedColorsPreset = blue
```

To make Ari simple, we just have a short set of colors, as demonstrated below.

```ts
const darkPurple = {
	primary: "#3f3a5a",
	primaryLight: "#077EB2",
	primaryDark: "#26282d",
	secondary: "#604FCD",
	secondaryLight: "#2E57E8",
	secondaryDark: "#604FCD",
}
```

## Video tutorial

```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

<div className="video-container">
  <LiteYouTubeEmbed
    id="X8T4qx_VO50"
    playlist={false}
    title="Styling"
    poster="hqdefault"
    noCookie={true}
  />
</div>
```