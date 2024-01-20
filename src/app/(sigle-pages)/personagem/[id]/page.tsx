import { PersonagemProps } from "@/utils/types/personagem";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { Perfil } from "@/components/perfil";


async function getData(id: string) {

    try {
        const res = await fetch(`http://localhost:3333/personagem/detalhes?id=${id}`, { cache: "no-cache" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }

}

export default async function PersonagemDetails({ params: { id } }: { params: { id: string } }) {

    const data: PersonagemProps = await getData(id)

    if (!data) {
        redirect('/')
    }


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



                <div className="flex flex-wrap">
                    <div className="mr-4"> {/* Adicionei uma classe de margem à direita para separar os dois elementos */}
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Apelido</h2>
                        {data.apelido ? (
                            <div className="flex gap-2 flex-wrap">
                                <Label name={data.apelido} />
                            </div>
                        ) : (
                            <div className="flex gap-2 flex-wrap">
                                <Label name={"Não possui apelido"} />
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Aniversário</h2>
                        <div className="flex gap-2 flex-wrap">
                            <Label name={data.aniversario} />
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap">
                    <div className="mr-4"> {/* Adicionei uma classe de margem à direita para separar os dois elementos */}
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Afiliação</h2>
                        <div className="flex gap-2 flex-wrap">
                            <Label name={data.afiliacao} />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Recompensa</h2>
                        {data.recompensa ? (
                            <div className="flex gap-2 flex-wrap">
                                <Label name={`฿${data.recompensa}`} />
                            </div>
                        ) : (
                            <div className="flex gap-2 flex-wrap">
                                <Label name={"Não possui recompensa"} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="mr-4"> {/* Adicionei uma classe de margem à direita para separar os dois elementos */}
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Tripulação</h2>
                        {data.tripulacao ? (
                            <div className="flex gap-2 flex-wrap">
                                <Perfil img={data.tripulacao?.url_imagem} name={data.tripulacao?.nome} id={`tripulacao/${data.tripulacao?.id}`}/>
                            </div>
                        ) : (
                            <div className="flex gap-2 flex-wrap">
                                 <Label name={"Não possui tripulação"} />
                            </div>
                        )}

                    </div>

                    <div className="mr-4"> {/* Adicionei uma classe de margem à direita para separar os dois elementos */}
                        <h2 className="font-bold text-lg mt-7 mb-2 text-blue-950">Akumanomi</h2>
                        {data.akumanomi ? (
                            <div className="flex gap-2 flex-wrap">
                                <Perfil img={data.akumanomi?.url_imagem} name={data.akumanomi?.nome} id={`akumanomi/${data.akumanomi?.id}`}/>
                            </div>
                        ) : (
                            <div className="flex gap-2 flex-wrap">
                                <Label name={"Não possui akuma no mi"} />
                            </div>
                        )}
                    </div>
                </div>




            </Container>
        </main>
    )
}