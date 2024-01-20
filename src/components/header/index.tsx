'use client'

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FiUser, FiLoader, FiLock, FiLogOut } from 'react-icons/fi'
import { useRouter } from "next/navigation";

export function Header() {

    const { status, data } = useSession()
    //const router = useRouter();

    async function handleLogout() {
     /* await signOut({redirect: false});
        router.replace('/')*/
        await signOut();
    }

    return (
        <header className="w-full flex items-center px-2 py-4 bg-blue-950 h-20 shadow-lg">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/">
                    <h1 className="font-bold text-2xl pl-1 text-white">
                        <span className="text-red-500">ONE</span> PIECE
                    </h1>
                </Link>

                <nav className="flex gap-8 text-white font-bold tracking-widest">
                    <Link href="/personagem">
                        Personagem
                    </Link>

                    <Link href="/tripulacao">
                        Tripulação
                    </Link>

                    <Link href="/akumanomi">
                        Akuma no mi
                    </Link>

                </nav>

                {status === "loading" && (
                    <button className="animate-spin">
                        <FiLoader size={26} color="#FFFF" />
                    </button>
                )}

                {status === "unauthenticated" && (
                    <Link href="/login">
                        <FiLock size={26} color="#FFFF" />
                    </Link>
                )}

                {status === "authenticated" && (
                    <div className="flex items-baseline gap-4">
                        <Link href="/admin">
                            <FiUser size={26} color="#FFFF" />
                        </Link>

                        <button onClick={handleLogout}>
                            <FiLogOut size={26} color="#ff2313" />
                        </button>
                    </div>
                )}


            </div>
        </header>
    )
}