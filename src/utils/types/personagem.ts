export interface PersonagemProps{
    id: string;
    nome: string;
    apelido:string;
    url_imagem:string;
    afiliacao:string;
    recompensa:string;
    descricao:string;
    aniversario:string;
    akumanomi:{
        id:string;
        nome:string;
        url_imagem:string
    };
    tripulacao:{
        id:string;
        nome:string;
        url_imagem:string
    }
}