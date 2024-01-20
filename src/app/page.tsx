import { Container } from '@/components/container';
import Image from 'next/image';

export default async function Home() {


    return (
        <main className="w-full">
            <Container>
                <div className="flex justify-center mt-7">
                    <Image
                        src="/logo.png" // Substitua com o caminho para sua imagem
                        alt="Descrição da imagem"
                        className="max-w-full h-auto"
                        width={400} // Ajuste conforme necessário
                        height={400} // Ajuste conforme necessário
                    />
                </div>
                
                <p className='text-center'>
                    Projeto simples de cadatro e listagem de personagem, tripulação e akuma no mi.
                    Esse projeto foi criado utilizando framework next.js com tailwind no frontend, já no backend foi utilizado
                    Nodejs com prisma ORM.
                </p>

            </Container>
        </main>
    )
}