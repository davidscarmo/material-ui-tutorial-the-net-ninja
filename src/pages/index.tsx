import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello There
      <Link href="/Create">
        <a>Create</a>
      </Link>
      <Link href="/Notes">
        <a>Notes</a>
      </Link>
    </div>
  );
}
