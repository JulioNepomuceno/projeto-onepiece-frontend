import Link from "next/link";
import { Container } from "@/components/container";


export function HeaderAdmin() {

    return (
        <Container>
        <header className="w-full bg-gray-900 my-4 p-3 rounded flex gap-4 items-center tracking-widest">
          <Link href="/admin/personagem" className="text-white hover:font-bold duration-300">
            Personagem
          </Link>
          <Link href="/admin/tripulacao" className="text-white hover:font-bold duration-300">
            Tripulação
          </Link>
          <Link href="/admin/akumanomi" className="text-white hover:font-bold duration-300">
            Akuma no mi
          </Link>
        </header>
      </Container>
    )
}