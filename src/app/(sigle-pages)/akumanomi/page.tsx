import { CardAkumanomi } from "@/components/cardakumanomi";
import { Container } from "@/components/container";
import { AkumanomiProps } from "@/utils/types/akumanomi";


async function getAkumanomiData() {

    try {     
       
        const result = await fetch('http://localhost:3333/list_akumanomi', {next: { revalidate: 320 }});
        return result.json();
        
    } catch (error) {
        throw new Error('Falha ao buscar dados')
    }
}


export default async function Akumanomi() {
    
    const data: AkumanomiProps[] = await getAkumanomiData();
   
    return (
        <main>
            <Container>
                <h2 className="text-lg font-bold mt-8 mb-5 text-blue-950">Conheca as akuma no mi</h2>

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((item) => (
                        <CardAkumanomi key={item.id} data={item} />
                    ))}
                </section>
                
            </Container>
        </main>
    )
}