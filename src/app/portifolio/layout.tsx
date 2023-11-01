import Link from "next/link";

export default function PortifolioLayout({children}: any) {
  return (
    <main>
      <div>
        <nav>
          Navegamento (layout do layout)
          <Link 
            href='./producao'
            class='ml-10'
          >
            Produção
          </Link>
        </nav>
        {children}
      </div>
    </main>
  )
}