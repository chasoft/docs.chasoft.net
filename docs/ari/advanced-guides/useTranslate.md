---
sidebar_position: 20
---

# useTranslate

Ari has a powerful hook to do the translation called `useTranslate`. It accepts an array of language table, that means, you can combine the translation from more than one language table _(less translation duplication)_

```ts
export default function useTranslate(langTables: LangTable[]): {
  lang: Language
  t: (key: string, values?: string[] => string
}
```

## Declare

```ts
import useTranslate from "~/utils/useTranslate"
...
/**
 * `lang` is the current seleted language of Ari
 * `t` is a function to get the translation text from provided language key
 */
const { lang, t } = useTranslate([...])
...

```

## Usage of ` t ` function

Simple and common usage of ` t ` is:

```ts
t(langKey)
```

That means if you 

```ts
//if current language is English then
//the following command will return `English`
t("english")
```

More advanced usage is when you want to put one or more values to placeholders in the translation... This would help to separated the translation with values.

For example, you have a sample language table:

```ts
const sampleLangTable: LangTable = {
  en: {
    "our-life-time-pricing-is-dollar": "Our lifetime pricing is %s dollars.",
  },
  vi: {
    "our-life-time-pricing-is-dollar": "Gói trọn đời là %s đô la.",
  },
}
```

You would not want to hard-code the pricing to the translation. Then, we provide a placeholder to fill in which is ` %s `.

```ts
t("our-life-time-pricing-is-dollar", ["199"])

//would return:
//if current language is en: `Our lifetime pricing is 199 dollars.`
//if current language is vi: `Gói trọn đời là 199 đô la.`
```

It is worth mentioning that you can have multi-placeholders and multi values to fill in. But they will fill in by its order.

```ts
t("Hello %s, how are you %s?", ["Brian", "yesterday"])
// return: Hello Brian, how are you yesterday?
```





