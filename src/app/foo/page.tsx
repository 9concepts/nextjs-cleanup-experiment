import Link from "next/link";

export default function Foo() {
  return (
    <main>
      <h1>Foo</h1>
      <Link href="/" className="underline">
        back to home
      </Link>
    </main>
  );
}
