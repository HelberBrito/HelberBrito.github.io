import Link from "next/link";
import '../globals.css'

export default function Portifolio() {
  return (
    <div class='mt-5'>
      <h1 class='mb-5'>
      Você está em <strong>{'"PORTIFOLIO"'}</strong> <br></br>
      </h1>

      <div class='flex'>
        <h2 class='mr-2 mb-1'>
          Projetos:
        </h2>
        <Link href='./portifolio/producao' class='underline'>Produção</Link>
      </div>

      <div class='flex'>
        <h2 class='mr-2 mb-1'>
          Projetos:
        </h2>
        <Link href='./portifolio/ideias&planejamentos' class='underline'>Idéias & Planejamentos</Link>
      </div>

      <div class='flex'>
        <h2 class='mr-2 mb-1'>
          Projetos:
        </h2>
        <Link href='./portifolio/pessoais' class='underline'>Pessoais</Link>
      </div>
      
      <div class='flex'>
        <h2 class='mr-2 mb-1'>
          Projetos:
        </h2>
        <Link href='./portifolio/estudos&experimentos' class='underline'>Estudos & Experimentos</Link>
      </div>

    </div>
  )
}