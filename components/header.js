import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4 ">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">
          <Link href="/">Code:000</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
