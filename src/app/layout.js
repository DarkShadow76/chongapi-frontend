// import { Montserrat } from 'next/font/google'
// import './globals.css'

// const montserrat = Montserrat({ subsets: ['latin'] })
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
  title: 'ChongAPI',
  description: 'Still in development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <body className="gradient" style={{
      }}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html >
  )
}
