import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello There <br />
      <Link href="/Create">
        <a>Create</a>
      </Link> <br />
      <Link href="/Notes">
        <a>Notes</a>
      </Link>
    </div>
  );
}
