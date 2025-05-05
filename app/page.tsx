// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CLS Demo</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/bad" className="text-blue-500 underline">
            🔴 Bad Page (CLS sorunlu)
          </Link>
        </li>
        <li>
          <Link href="/good" className="text-green-600 underline">
            🟢 Good Page (Optimize)
          </Link>
        </li>
      </ul>
    </div>
  );
}
