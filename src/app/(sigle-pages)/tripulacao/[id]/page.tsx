import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { TripulacaoProps } from "@/utils/types/tripulacao";
import { Perfil } from "@/components/perfil";


async function getData(id: string) {

    try {
        const res = await fetch(`http://localhost:3333/tripulacao/detalhes?id=${id}`, { cache: "no-cache" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }

}

export default async function TripulacaoDetails({ params: { id } }: { params: { id: string } }) {

    const data: TripulacaoProps = await getData(id)

    if (!data) {
        redirect('/')
    }


    return (
        <main className="w-full">

            <Container>
                <section className="w-full bg-black rounded-lg mt-6">
                    <div className="w-full max-h-96  h-96 relative">
                        <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                            <p className="font-bold text-xl text-white">{data.nome}</p>
                        </div>
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
                              
                <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Capitão</h2>
                <div className="flex gap-2 flex-wrap">
                    <Label name={data.tripulacaoPersonagem[0]?.personagem.nome} />
                </div>

                <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Tripulação</h2>

                <section className="flex gap-2 flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {data.personagem.map((item) => (
                            <Perfil key={item.id} img={item.url_imagem} name={item.nome} id={`personagem/${item.id}`}/>
                        ))}
                </section>

            </Container>

        </main>
    )
}