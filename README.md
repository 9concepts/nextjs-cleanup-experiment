# Cleanup demo of `useEffect` on page reload

This `useEffect` sets the value to local storage when mounted and empties local storage when unmounted.

```tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.localStorage.setItem(Date.now().toString(), "Home page loaded");

    return () => {
      window.localStorage.clear();
    };
  }, []);
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/foo" className="underline">
        /foo
      </Link>
    </main>
  );
}
```
