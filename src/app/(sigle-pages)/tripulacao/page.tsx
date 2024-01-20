import { CardTripulacao } from "@/components/cardtripulacao";
import { Container } from "@/components/container";
import { TripulacaoProps } from "@/utils/types/tripulacao";

async function getTripulacaoData() {

    try {     
       
        const result = await fetch('http://localhost:3333/list_tripulacao', {next: { revalidate: 320 }});
        return result.json();
        
    } catch (error) {
        throw new Error('Falha ao buscar dados')
    }
}

export default async function Tripulacao(){

    const data: TripulacaoProps[] = await getTripulacaoData();

    return(
        <main>
            <Container>
                <h2 className="text-lg font-bold mt-8 mb-5 text-blue-950">Conheça as tripulações</h2>

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((item) => (
                        <CardTripulacao key={item.id} data={item} />
                    ))}
                </section>

            </Container>
        </main>
    )
}