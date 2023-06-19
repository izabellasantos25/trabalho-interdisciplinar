'use client'
import styles from './../../page.module.css'
import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produto", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (

    <div> 

        <div className={styles.menu2}>
        <a className={styles.link2} href="/cadastro"> CADASTRAR </a>
        <a className={styles.link2} href="/"> HOME </a>
        </div>

            <div className={styles.group2}>

              <div className={styles.card}>

                <img className={styles.imagem} src={produto.imagem} width={300} height={450}></img>
                <div className={styles.texto}>{produto.titulo}</div>
                <div className={styles.texto}>{produto.descricao}</div>
                <button className={styles.botao2} onClick={e => e.preventDefault(remover())}>Deletar</button>
              
              </div>

            </div>

    </div>

    )
}
