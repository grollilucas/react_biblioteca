import { IconeEdicao, IconeLixo } from "../icones/tabela"
import Livro from "@/core/Livro"

interface TabelaProps {
    livros: Livro[]
    livroSelecionado?: (livro: Livro) => void
    livroExcluido?: (livro: Livro) => void
}


export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.livroSelecionado || props.livroExcluido


    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Autor</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}


            </tr>
        )
    }

    function renderDados() {
        return props.livros?.map((livro, i) => {
            return (
                <tr key={livro.id}
                    className={`${i % 2 === 0 ? 'bg-yellow-200' : 'bg-yellow-100'} `}>
                    <td className="text-left p-3">{livro.id}</td>
                    <td className="text-left p-3">{livro.nome}</td>
                    <td className="text-left p-3">{livro.autor}</td>
                    {exibirAcoes ? renderizarAcoes(livro) : false}

                </tr>)
        })
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
        bg-gradient-to-r from-yellow-500 to-yellow-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )

    function renderizarAcoes(livro: Livro) {
        return (
            <td className="flex justify-center">
                {props.livroSelecionado
                    ? (<button onClick={() => props.livroSelecionado?.(livro)}
                        className={`flex justify-center items text-green-600
        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeEdicao}</button>)
                    : false}
                {props.livroExcluido
                    ? (<button onClick={() => props.livroExcluido?.(livro)}
                        className={`flex justify-center items text-red-600
        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeLixo}</button>)
                    : false}
            </td>)
    }
}