---
sidebar_position: 40
---

# TypeScript

*Aris* is written in TypeScript language. Some basics for you to understand the `types declaration`.

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

The properties, which has `?` *(question mark)* at the end, are optional properties. In the declaration above, only `children` are required. That say, we would have some usage examples:

```tsx
<Alert>
  Your subscription is going to be expired after 3 days.
</Alert>

//or 

<Alert alertType="warning">
  Your subscription is going to be expired after 3 days.
</Alert>

/**
 * The example below is invalid
 * because aligment only accepts 2 values: "left" or "right"
 * but you provide "center"
 */

<Alert alertType="warning" alignment="center">
  Your subscription is going to be expired after 3 days.
</Alert>
```
