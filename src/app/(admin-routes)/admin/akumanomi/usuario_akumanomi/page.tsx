import { Container } from "@/components/container";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { AdicionarUsuarioForm } from "./components/forms";


export default async function UsuarioAdd() {

  const session = await getServerSession(nextAuthOptions)

  if (!session) {
      redirect('/')
  }
  return (
    <Container>
      <AdicionarUsuarioForm token={session.token}/>
    </Container>
  )
}