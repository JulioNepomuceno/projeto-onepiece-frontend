export interface AkumanomiProps{
    id: string;
    nome: string;
    url_imagem:string;
    tipo: string;
    descricao:string;
    akumanomiPersonagem:{
        id:string
        personagem:[
            id:string,
            nome:string,
            url_imagem:string,
        ]
    }
}