import { AkumanomiProps } from "@/utils/types/akumanomi";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { Perfil } from "@/components/perfil";


async function getData(id: string) {

    try {
        const res = await fetch(`http://localhost:3333/akumanomi/detalhes?id=${id}`, { cache: "no-cache" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }

}

export default async function AkumanomiDetails({ params: { id } }: { params: { id: string } }) {

    const data: AkumanomiProps = await getData(id)

    if (!data) {
        redirect('/')
    }

    console.log(data)

    return (

        <main className="w-full">

        <Container>
            <section className="w-full bg-black rounded-lg mt-6">
                <div className="w-full max-h-96  h-96 relative">
               
                    <Image
                        src={data.url_imagem}
                        alt={data.nome}
                        priority={true}
                        quality={100}
                        fill={true}
                        className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                    />
                </div>
            </section>

            <h1 className="font-bold text-xl my-4">{data.nome}</h1>
            <p>{data.descricao}</p>
                          
            <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Tipo de fruta</h2>

            <div className="flex gap-2 flex-wrap">
                <Label name={data.tipo} />
            </div>

            <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Usuário atual</h2>
                <div className="flex gap-2 flex-wrap">
                    <Perfil img={data.akumanomiPersonagem[0]?.personagem.url_imagem} name={data.akumanomiPersonagem[0]?.personagem.nome} id={`personagem/${data.akumanomiPersonagem[0]?.personagem.id}`}/>

                </div>


        </Container>

    </main>
    )
}