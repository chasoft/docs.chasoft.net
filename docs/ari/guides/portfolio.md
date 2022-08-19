---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Portfolio

Portfolio section is a special section which assits you to write, talk about your projects, products... aka portfolio. Each portfolio would have `metadata` and `portfolio body` which is a `.mdx` file. Each portfolio can be connected by `categories`, `tags`.

All portfolios are stored at **`app\routes\__layout\portfolio\__mdx\`** and metaData are declared in **`app\data\portfolio.server.ts`**

```ts title="portfolio location"
my-website
├── app
│   └── routes
│       └── __layout
│           └── portfolio
│               └── __mdx
│                   ├── product-1.mdx
│                   ├── project-a.mdx
│                   ├── ...
│                   └── project-x.mdx
│
```

```ts title="app\data\portfolio.server.ts"
...
//import your portfolio files
import * as P0001 from "~/routes/__layout/portfolio/__mdx/project-a.mdx"
...
//extract meta data
const data = [
  getMdxPortfolioMeta(P0001),
  ...
]
```

## Process to create a new portfolio

To add a new portfolio, you need to process 2 steps

1. Create a portfolio file `.mdx` at `app\routes\__layout\portfolio\__mdx\`
2. Declare your new portfolio at `app\data\portfolio.server.ts`

Simple, heh?

## Format of a portfolio `.mdx`

You would need to use `Markdown` format to compose your portfolio. Markdown format is simple and easy. Trust me. You would love Markdown. It helps you to concentrate to your writing, not to be distracting from anything.

:::note

**Metadata structure**: There are a lot of properties and explain seems complicated but they are really simple. Please take a look at some portfolio files and you would understand easier.

:::

<Tabs>
<TabItem value="Metadata structure">

```ts
/**
 * Header structure kind of PORTFOLIO in `.mdx` format
 */
type PortfolioMeta = {
  attributes: {
    meta: {
      title: string
      description: string
    },
    properties: {
      id: string
      /**
       * the day that your portfolio started
       */
      startedDate: string
      /**
       * the day that your portfolio is finished
       */
      accomplishedDate: string
      /**
       * helps to organize your blog posts in great flexible way
       */
      tags: string[]
      images: ImgSrcSet[]
      categories: string[]
      /**
       * language of the blog post
       * it would be consider as default language is not provided
       * UPDATE: i use array here for some users are too lazy to do the translation,
       * then, at very first time, they will let the article available
       * to more than 1 language! They will update this later!
       */
      language?: Language[]
      /**
       * decorate the header of the portfolio
       */
      pageHeaderMeta?: PageHeaderMeta
    }
  }
  filename: string
}

type ImgSrcSet = {
  mobile: string
  desktop?: string
  description?: string
}

type PageHeaderMeta = {
  /**
   * array of images
   * if it has 2 images, 1st is for mobile, 2nd is for pc
   */
  featuredImage?: ImgSrcSet
  backgroundColor?: string
  height?: string
  /**
   * allow user to define image position
   * https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   * the default position is `center-center` aka `50% 50%`
   */
  objectPosition?: string
  /**
   * allow user to define image hovering position
   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
   * the default position is `center-center` aka `50% 50%`
   */
  objectOrigin?: string
}
```

</TabItem>

<TabItem value="Sample blog file">

```tsx
---
meta:
  title: Excepteur irure velit velit
  description: Sint aliquip minim adipisicing fugiat fugiat aute excepteur laborum deserunt aliquip. Aute irure do ea cupidatat irure velit et deserunt amet. Commodo laboris ex exercitation adipisicing minim. Do labore velit in voluptate
properties:
  id: P0003
  startedDate: 2022-05-12
  accomplishedDate: 2022-05-17
  tags:
    - Travel
  images:
    - { mobile: /placeholder.svg, desktop: /placeholder.svg }
  categories:
    - website
  language:
    - vi
  pageHeaderMeta: {
    featuredImage: {mobile: /placeholder.svg},
    objectPosition: 40
  }
---
import Video from "~/components/Video"
import Align from "~/components/Align"
import Map from "~/components/Map"
import Alert from "~/components/Alert"

# Excepteur irure velit velit

<Video.Youtube
  id="PLCzpHpwST0xx8IxDzF82Va_rhIEcpbgW5"
  playlistCoverId="F90ozD7peX0"
  title="Phương Ý"
  alignment="right"
/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt

## ut labore et dolore

* magnam aliquam
* quaerat voluptatem.
* quaerat voluptatem.
* quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

<Map
	defaultCenter={[10.8161863, 106.7782831]}
	defaultZoom={16}
	hasPadding={true}
	markers={[
		{
			anchor: [10.8119658,106.7759439],
			slug: "/blog/labore-nisi-cillum-voluptate-consequat-reprehenderit-laborum-deserunt-exercitation",
			title: "Location 1",
			description: "Esse consequat sunt aliqua exercitation consectetur aute amet et consequat velit voluptate."
		},
		{
			anchor: [10.8161863, 106.7782831],
			color: "red",
			slug: "/blog/minim-sunt-velit-do-veniam-velit",
			title: "Location 2",
			description: "Ea duis pariatur officia enim officia nostrud elit ullamco."
		},
		{
			anchor: [10.8172676,106.7824432],
			color: "green",
			slug: "/portfolio/incididunt-eu-lorem-ut-in-proident-labore-voluptate",
			title: "Location 3",
			description: "Voluptate ipsum magna sit nostrud incididunt laborum."
		},
	]}
/>

Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

A small river named Duden flows by their place and supplies it with the necessary regelialia.

It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

<Alert alertType="success">
The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
</Alert>

She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
```

</TabItem>
</Tabs>
