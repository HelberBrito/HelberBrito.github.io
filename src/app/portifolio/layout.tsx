import Link from "next/link";

export default function PortifolioLayout({children}: any) {
  return (
    <main>
      <div>
        <nav class='flex mt-2'>
          
          <h3>Clique aqui para</h3>
          <Link 
            href='./'
            class='ml-2 underline'
          >
            VOLTAR
          </Link>
        </nav>
        {children}
      </div>
    </main>
  )
}