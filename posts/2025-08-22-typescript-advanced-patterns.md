---
layout: post
title: "Advanced TypeScript Patterns You Should Know"
date: 2025-08-22
categories: typescript javascript
image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"]
excerpt: "Deep dive into advanced TypeScript patterns including generics, conditional types, mapped types, and more. Level up your type-safety game."
---

TypeScript has evolved from a simple type checker to a powerful type system that rivals dedicated functional languages. Let's explore advanced patterns that will level up your type-safety game and make your code more maintainable.

## Conditional Types

Conditional types allow you to create types that depend on a condition. They're like the ternary operator but for types:

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

## Mapped Types

Mapped types let you transform existing types by mapping over their properties. This is incredibly powerful for creating utility types:

```typescript
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

## Template Literal Types

Template literal types enable string manipulation at the type level. You can create types based on string patterns:

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickHandler = EventName<"click">;  // "onClick"
type MouseMoveHandler = EventName<"mouseMove">;  // "onMouseMove"
```

## Discriminated Unions

Use discriminated unions to model complex state machines and ensure exhaustive checking:

```typescript
type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; error: Error };

function handleState(state: LoadingState) {
  switch (state.status) {
    case 'idle': return 'Not started';
    case 'loading': return 'Loading...';
    case 'success': return state.data;
    case 'error': return state.error.message;
  }
}
```

## Generic Constraints

Constrain your generics to ensure they have specific properties or extend certain types:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'John', age: 30 };
const name = getProperty(person, 'name');  // string
const age = getProperty(person, 'age');    // number
```

## Conclusion

These advanced TypeScript patterns might seem complex at first, but they unlock powerful capabilities for creating type-safe, maintainable code. Practice with small examples, gradually incorporating them into your projects. Your future self (and your teammates) will thank you.
