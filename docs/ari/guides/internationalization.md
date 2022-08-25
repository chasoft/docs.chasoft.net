---
sidebar_position: 60
---

# Internationalization (i18n)

Ari supports multiple languages, and it has its mechanism for internationalization.

## Config languages

The following example is to support 2 languages, English (en) and Vietnamese (vi). Please don't hesitate to update `config.tsx` to match your desired languages.

```ts title="/app/data/settings/config.tsx"
/******************************************************************************
 * LANGUAGES SETTINGS
 * Reference 2 letters language code at https://www.iban.com/country-codes
 * Modify all variables below to add/remove supported languages for your site
 */

export type Language = "en" | "vi"
export const SUPPORTED_LANGUAGES: Language[] = ["en", "vi"]
export const DEFAULT_LANGUAGE: Language = "en"
export const CURRENCY: Record<Language, string> = {
	"en": "USD",
	"vi": "VND"
}
```

## Languages sample structure

Take a look at folder `app/languages` for more details. The simplest way to create a language file is to duplicate existing language files.

```ts title="/app/languages/languageSwitcherLangTable.ts"
import type { Language } from "~/data/settings/config"

/**
 * Keys or langKeys
 * Recommend to use langKeys in the component,
 * the actual text would be supplied by translation system
 */

const langKey = [
	"english",
	"vietnamese",
] as const

/**
 * Types to data consistency checking
 */

type LangKey = typeof langKey[number]
type LangTable = { [key in Language]: { [P in LangKey]: string } }

/**
 * Values for each languages
 */

const languageSwitcherLangTable: LangTable = {
	en: {
		"english": "English",
		"vietnamese": "Vietnamese",
	},
	vi: {
		"english": "Tiếng Anh",
		"vietnamese": "Tiếng Việt",
	},
}

export default languageSwitcherLangTable
```

## Translate mechanism

### Structure of language file

First we declare an array of language key. Here, there are 2 sample language key

```ts
const langKey = [
	"english",
	"vietnamese",
] as const
```

and down below the file, we just compose the translation for each language key in each language with following structure:

```ts
const languageSwitcherLangTable: LangTable = {
	en: {
		"english": "English",
		"vietnamese": "Vietnamese",
	},
	vi: {
		"english": "Tiếng Anh",
		"vietnamese": "Tiếng Việt",
	},
}
```

And if you do anything wrong, the typescript would alert with incorrect content.

## Use the translation files

There are two cases:

1. You are using a content block. For example,

  ```tsx
  <FaqsBlock
    langTable={faqsServicesLangTable}
    faqs={faqsServices}   // <== just provided the language table>
  />
  ```

2. Or you are updating a React component.

  ```tsx
  import useTranslate from "~/utils/useTranslate"
  ...
  // you use a translation hook
  const { t } = useTranlsate([.../* put your language table here*/...])
  ...
  //and in the body of the component, just use t function to do the translation
  {t("language-key")}
  ...
  ```

  For more details about using `useTranslate`, take a look at [useTranslate](../advanced-guides/useTranslate).

  
## Video tutorial

```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

<div className="video-container">
  <LiteYouTubeEmbed
    id="YEFoHFK5ydU"
    playlist={false}
    title="Introduction about multi-languages feature"
    poster="hqdefault"
    noCookie={true}
  />
</div>
```