import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { NewPersonagemForm } from "./components/forms"
import { Container } from "@/components/container"


export default async function PersonagemAdmin(){
    
    const session = await getServerSession(nextAuthOptions)
    
    if (!session) {
        redirect('/')
    }
    
    
    return(
        <Container>
            <NewPersonagemForm token={session.token}/>
        </Container>
    )
}