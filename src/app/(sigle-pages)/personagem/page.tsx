import { CardPersonagem } from "@/components/cardpersonagem";
import { Container } from "@/components/container";
import { PersonagemProps } from "@/utils/types/personagem";



async function getPersonagemData() {

    try {

        const result = await fetch('http://localhost:3333/list_personagem', { next: { revalidate: 320 } });
        return result.json();

    } catch (error) {
        throw new Error('Falha ao buscar dados')
    }
}
export default async function Personagem() {

    const data: PersonagemProps[] = await getPersonagemData();


    return (
        <main>
            <Container>

                <h2 className="text-lg font-bold mt-8 mb-5 text-blue-950">Conheça os personagens</h2>

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((item) => (
                        <CardPersonagem key={item.id} data={item} />
                    ))}
                </section>

            </Container>
        </main>
    )
}