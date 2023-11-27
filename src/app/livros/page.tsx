'use client';
import Layout from "@/components/livros/layout";
import Tabela from "@/components/livros/tabela";
import Botao from "@/components/livros/botao";
import Formulario from "@/components/livros/formulario";
import { atualizarLivro, cadastrarLivro, excluirLivro, fetchLivros } from "@/service/livroService";
import { useEffect, useState } from "react";
import Livro from "@/core/Livro";


export default function Livros() {


    const [livro, setLivro] = useState<Livro>(Livro.vazio())

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        if (visivel === 'tabela') {
            const loadLivros = async () => {
                try {
                    const dados = await fetchLivros();
                    setLivros(dados);
                } catch (error) {
                    console.error("Erro ao buscar livros:", error);
                }
            }
            loadLivros();
        }
    }, [visivel]);


    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-bl from-blue-400 via-purple-400 to-yellow-400
             text-white`}>

            <Layout titulo="Cadastro de Livros">
                {visivel === 'tabela' ? (
                    <> <div className="flex justify-end">
                        <Botao className="mb-4" cor="bg-gradient-to-r from-purple-500 to-purple-900"
                            onClick={() => novoLivro()}>
                            +Novo Livro </Botao>
                    </div>
                        <Tabela livros={livros}
                            livroSelecionado={LivroSelecionado}
                            livroExcluido={livroExcluido}></Tabela>
                    </>
                ) : (<Formulario livro={livro}
                    livroMudou={salvarOuAlterarLivro}
                    cancelado={() => setVisivel('tabela')} />)}
            </Layout>
        </div>
    )


    function LivroSelecionado(livro: Livro) {
        setLivro(livro)
        setVisivel('form')
    }

    async function salvarLivro(livro: Livro) {
        try {
            const novoLivro = await cadastrarLivro(livro);
            setVisivel("tabela");
        } catch (error) {
            console.error("Erro ao salvar livro:", error);
        }
    }

    async function livroExcluido(livro: Livro) {
        const confirmacao =
            window.confirm("Deseja excluir esse Livro?");
        if (confirmacao) {
            try {
                if (livro.id !== null) {
                    await excluirLivro(livro.id);
                } else {
                    console.error("livroID é null");
                }
                setLivros(prevLivros => prevLivros.filter(ev => ev.id !== livro.id));
            } catch (error) {
                console.error("Erro ao excluir livro:", error);
            }
        }
    }

    function novoLivro() {
        setLivro(Livro.vazio())
        setVisivel("form")
    }

    async function alterarLivro(livro: Livro) {
        try {
            const livroAtualizado = await atualizarLivro(livro);
            setVisivel("tabela");
        } catch (error) {
            console.error("Erro ao atualizar livro:", error);
        }
    }

    function salvarOuAlterarLivro(livro: Livro) {
        if (livro.id) {
            alterarLivro(livro)
        } else {
            salvarLivro(livro)
        }
    }

}