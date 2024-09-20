import Link from "next/link";
import ContactNumber from "./components/ContactNumber";

export default function Contact() {
  return <div className="p-10">
    <h1>Página de contato que acabamos de criar</h1>
    <ContactNumber />
    <Link href="/" className="text-pink-400">Voltar para home</Link>
  </div>
}