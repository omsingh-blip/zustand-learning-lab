# Zustand Counter Notes

## 1. Store Creation

* Import `create` from Zustand.
* Define `useCounterStore` as a custom hook.
* Use `set` (provided by Zustand) to update state.

```js
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  doubleCount: (state) => state.count * 2,
}));
```

---

## 2. State

**Definition:** Data your app cares about.

* Example: `count: 0` → initial state

**Purpose:**

* Single source of truth
* Ensures consistency across components

---

## 3. Actions

**Definition:** Functions that change state.

**Examples:**

* `increment` → increases count
* `decrement` → decreases count
* `reset` → restores count to 0

**Purpose:**

* Encapsulate mutation logic
* Reusable and predictable updates

---

## 4. Derived Value

**Definition:** Computed from existing state.

* Example:

  ```js
  doubleCount: (state) => state.count * 2
  ```

**Purpose:**

* Avoid duplication
* Always stays in sync with `count`

---

## 5. State Flow

1. Component reads state (`count`, `doubleCount`)
2. User triggers action (e.g., Increment)
3. Action runs → `set` updates `count`
4. Store updates → Zustand notifies subscribed components
5. Component re-renders → shows updated values

---

## 6. Why This Pattern Is Proper

* Single source of truth
* Encapsulation of logic
* Derived state is computed, not duplicated
* Predictable flow:

```
UI → Action → Store → Re-render
```

---

## 7. Installation

Install Zustand before using:

```bash
npm install zustand
```

or

```bash
yarn add zustand
```

or

```bash
pnpm add zustand
```

---
