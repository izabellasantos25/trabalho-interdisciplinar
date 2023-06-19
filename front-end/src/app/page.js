"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produto = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produto.map(produto => (
        <div key={produto.id}>
          <img src={produto.imagem}></img>
          <p>{produto.titulo}</p>
          <p>{produto.preco}</p>
          <Link href={`/produto/${produto.id}`}>Ver mais</Link>
        </div>
      ))}
    </main>
  )
}