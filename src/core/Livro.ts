
export default class Livro {
    id: number | null;
    nome: string;
    autor : string;

    constructor(id: number | null, nome: string, autor: string) {
        this.id = id;
        this.nome = nome;
        this.autor = autor;
    }

    static vazio(): Livro {
        return new Livro(null, "", "");
       }
       
}   