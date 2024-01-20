export interface TripulacaoProps{
    id: string;
    nome: string;
    url_imagem:string;
    personagem:{
        id:string;
        nome:string;
        url_imagem:string;
    }
    tripulacaoPersonagem:{
        id:string;
        personagem:{
            id:string;
            nome:string;
            url_imagem:string;
        }
    }

}