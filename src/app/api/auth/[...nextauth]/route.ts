import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{label:"email",type:"text"},
                senha:{label:"senha", type:"password"}
            },
            async authorize(credentials, req) {
                const response = await fetch('http://localhost:3333/session',{
                    method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body:JSON.stringify({
						email: credentials?.email,
						senha: credentials?.senha
					})
                })

                const usuario = await response.json()
             
                if(usuario && response.ok){
                  
                    return usuario
                }

                return null;
            },
        })
    ],
    pages:{
        signIn:'/'
    },
    
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user)
			return token
		},
		async session({ session, token }){
			session = token.user as any
            
			return session
		}
	}
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }

