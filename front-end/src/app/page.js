"use client"
import styles from './page.module.css'

export default async function Home() {
  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });

  const produto = await req.json();
  console.log(produto)

  return (

    <div> 

    <div className={styles.menu}>
    <a className={styles.link} href="/cadastro"> CADASTRAR </a>
    </div>

    <div className={styles.main}>

      {produto.map(produto => (

        <div className={styles.group} key={produto.id}>

          <img src={produto.imagem} width={300} height={450}></img>
          <div className={styles.texto}>{produto.titulo}</div>
          <div className={styles.texto}>{produto.preco}</div>
          <a className={styles.link} href={`/produto/${produto.id}`}>Ver mais</a>

        </div>

      ))}

    </div>

    </div>

  )
}