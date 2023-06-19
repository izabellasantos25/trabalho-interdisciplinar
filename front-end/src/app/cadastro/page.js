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

          <div className={styles.background}>
            <div className={styles.circulo}></div>
            <div className={styles.circulo}></div>
          </div>

            <form  className={styles.form} onSubmit={cadastrar}>

               <div className={styles.h3}>Cadastre

                <a className={styles.a} href='/'>Voltar</a>

               </div> 

                <label className={styles.label} for="titulo">Título</label>
                <input className={styles.input} type="text" placeholder='Informe o título' nome="titulo" onChange={e => setTitulo(e.target.value)} />
 
                <label className={styles.label} for="dataCadastro">Data de cadastro</label>
                <input className={styles.input} type="text" placeholder='00/00/0000' nome="dataCadastro" onChange={e => setDataCadastro(e.target.value)} />

                <label className={styles.label} for="preco">Preço</label>
                <input className={styles.input} type="text" placeholder='R$000,000.00' nome="preco" onChange={e => setPreco(e.target.value)} />

                <label className={styles.label} for="descricao">Descrição</label>
                <input className={styles.input} type="text" placeholder='Descrição do produto' nome="descricao" onChange={e => setDescricao(e.target.value)} />

                <label className={styles.label} for="imagem">Link da imagem</label>
                <input className={styles.input} type="text" placeholder='Link HTTPS' nome="imagem" onChange={e => setImagem(e.target.value)} />
                
                <button className={styles.botao} type='submit'>Cadastrar</button>

            </form>

        </div>
    );
}