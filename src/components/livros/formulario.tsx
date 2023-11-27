import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";
import Livro from "@/core/Livro";

interface FormularioProps {
    livro: Livro
    livroMudou?: (livro: Livro) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.livro?.id
    const [nome, setNome] = useState(props.livro?.nome)
    const [autor, setAutor] = useState(props.livro?.autor)
    return (<div>
        {id ? (<Entrada texto="id" valor={id} somenteLeitura ></Entrada>) : false}
        <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
        <Entrada texto="Autor" valor={autor} onChange={setAutor}></Entrada>
        

        <div className="flex justify-end mt-5" >
            <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                onClick={() => props.livroMudou?.(new Livro(id, nome, autor))}>
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                onClick={props.cancelado}> Cancelar
            </Botao>
        </div>
    </div>
    )
}
