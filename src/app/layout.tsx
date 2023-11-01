import Link from "next/link"
import './globals.css'

export const metadata = {
  title: 'devHB',
  description: 'desenvolvido por devHB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        
        {/* cabeçalho */}
        <header class="fixed top-0 left-0 right-0 bg-blue-900 p-4">
          <nav class=''>
            <div class='flex space-x-5 mx-5'>
              <Link
                href='./'
              >Home</Link>
              <Link 
                href='/portifolio'
                class=''
                >Portifolio</Link>
              <Link href='/about'>Sobre</Link>
            </div> 
          </nav>
        </header>

        {/* conteúdo */}
        <main class='mt-10 p-4'>
          {children}
        </main>
        
        {/* rodapé */}
        <footer class="fixed bottom-0 left-0 right-0 bg-blue-900 p-4">
          <div>
            <span>
              sou um FOOTER FIXO
            </span>
          </div>
        </footer>

      </body>
    </html>
  )
}
