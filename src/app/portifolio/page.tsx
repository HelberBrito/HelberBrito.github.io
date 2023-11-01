import Link from "next/link";
import '../globals.css'

export default function Portifolio() {
  return (
    <div>
      <h1>
      Você está em <strong>{'"PORTIFOLIO"'}</strong> <br></br>
      </h1>
      <div class=''>
        <h2 class='mr-10'>
          <Link href='./producao'>Produção</Link>
          <Link href='./producao'>Produção</Link>
        </h2>
        <h2 class='underline'>
          <Link href='./pessoal'>Pessoal</Link>
        </h2>
      </div>
    </div>
  )
}