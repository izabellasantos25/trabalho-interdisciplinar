'use client'
import { useState } from 'react'
import styles from '../page.module.css'
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
        <div className={styles.body}>
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input className={styles.input}
                    type="text"
                    placeholder='Titulo do Produto:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                />
                <input className={styles.input}
                    type="text"
                    placeholder='Data do Cadastro:'
                    nome="dataCadastro"
                    onChange={e => setDataCadastro(e.target.value)}
                />
                <input className={styles.input}
                    type="text"
                    placeholder='Preço do Produto:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                />

                <input className={styles.input}
                    type="text"
                    placeholder='Descrição do Produto:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                />

                <input className={styles.input}
                    type="text"
                    placeholder='Link da Imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                />
                <div className={styles.space}></div>
                <button className={styles.button} type='submit'>Cadastrar</button>
            </form>
        </div>
        <button className={styles.button2}><a className={styles.a} href='/'>Voltar</a></button></div>
    );
}