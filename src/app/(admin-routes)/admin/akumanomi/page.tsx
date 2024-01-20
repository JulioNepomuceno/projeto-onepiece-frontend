
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NewAkumanomiForm } from "./components/forms";
import Link from "next/link";

export default async function AkumanomiAdmin() {

    const session = await getServerSession(nextAuthOptions)
 
    if (!session) {
        redirect('/')
    }

    return (
        <Container>
             <div className="flex items-center justify-end mb-4">
                <div>
                    <Link href="/admin/akumanomi/usuario_akumanomi" className="bg-blue-500 text-white px-4 py-1 rounded">
                        Adicionar Usuario
                    </Link>
                </div>
            </div>
            <NewAkumanomiForm token={session.token}/>
        </Container>
    )
}