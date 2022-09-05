---
sidebar_position: 40
---

# TypeScript

*Baris-A* is written in TypeScript language. Some basics for you to understand the `types declaration`.

Let's look at the types declaration below. It is for `Alert` component.

```ts
type AlertProps = {
  alertType?: AlertTagColor
  alignment?: "left" | "right"
  className?: string
  hasShadow?: boolean
  art?: "right" | "left"
  children: React.ReactNode
}

type AlertTagColor = number | "gray" | "blue" | "red" | "yellow" | "green" | "random" | "info" | "success" | "warning" | "error"
```

The properties, which has `?` *(question mark)* at the end, are optional properties. In the declaration above, only `children` are required.

But you **don't need to write any code** with Baris-A. Just compose text file, it is very easy! Let's go ahead!