import Link from "next/link";

export default function Home() {
  return (
    <div class='flex flex-col space-y-10 mt-10'>
      <h1>
        Você está em <strong>{'"HOME"'}</strong> <br></br>
        Bem vindo ao meu portifólio!
      </h1>
      <h2>
        <button class='mr-2 underline'>
          <Link href='./portifolio'>Clique aqui</Link>
        </button>
        para navegar por projetos, idéias e estudos.
      </h2>
    </div>
  )
}