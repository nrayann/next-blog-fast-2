import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1>Pagina inicial</h1>
      <Link href="/contact" className="text-pink-400">Página de contato</Link>
    </div>
  );
}
