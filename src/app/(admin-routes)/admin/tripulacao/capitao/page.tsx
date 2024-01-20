import { Container } from "@/components/container";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { AdicionarCapitaoForm } from "./components/forms";


export default async function Capitao() {

  const session = await getServerSession(nextAuthOptions)

  if (!session) {
      redirect('/')
  }

  return (
    <Container>
        <AdicionarCapitaoForm token={session.token}/>
    </Container>
  )
}