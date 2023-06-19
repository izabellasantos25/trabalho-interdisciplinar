"use client"
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produto = await req.json();
  console.log(produto)

  return (

    <div className={styles.body}> 

    <div className={styles.menu}>
    <Link href="/cadastro" className='voltar'> CADASTRAR </Link>
    </div>

    <div className={styles.main}>

      {produto.map(produto => (

        <div className={styles.group} key={produto.id}>

          <img src={produto.imagem}></img>
          <p>{produto.titulo}</p>
          <p>{produto.preco}</p>
          <Link href={`/produto/${produto.id}`}>Ver mais</Link>
          
        </div>

      ))}

    </div>

    </div>

  )
}