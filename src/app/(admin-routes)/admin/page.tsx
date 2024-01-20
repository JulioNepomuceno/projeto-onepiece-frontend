import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function Admin() {

    const session = await getServerSession(nextAuthOptions)
    
    if (!session) {
        redirect('/')
    }

    return (
        <div className="w-full h-screen flex flex-col items-center ">
            <h1 className="text-2xl mb-8">Olá, {session?.nome}. Bem vindo(a)!</h1>
        </div>
    )
}