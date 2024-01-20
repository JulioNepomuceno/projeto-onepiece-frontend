'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      senha,
      redirect: false
    })

    if (result?.error) {
      toast.error("E-mail / Senha  incorreto");
      return
    }
    toast.success("Login feito com sucesso");
    router.replace('/admin')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-48">
      <h1 className="text-3xl mb-6 font-bold text-red-500"><span className="text-blue-950">Entrar no</span> OnePiece</h1>


      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-blue-950"
          type="text" 
          name="email" 
          placeholder="Digite seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-blue-950"
          type="password" 
          name="senha" 
          placeholder="Digite sua senha" 
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          type="submit"
          className="h-12 rounded-md bg-blue-950 text-white hover:bg-blue-900"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}