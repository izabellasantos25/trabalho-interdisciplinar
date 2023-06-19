'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [dataCadastro, setDataCadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            dataCadastro: dataCadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='data de cadastro:'
                    nome="dataCadastro"
                    onChange={e => setDataCadastro(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='descrição:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                />
                <button type='submit'>Cadastrar</button>
                <a href='/'>Voltar</a>
            </form>
    );
}