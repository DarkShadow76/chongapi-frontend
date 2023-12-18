//import { Montserrat } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
//import './globals.css'

const font = Nunito_Sans({ subsets: ['latin'], weight: ['200', '700', '500'] })
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
  title: 'ChongAPI',
  description: 'Still in development',
  version: '1.0.0',
  author: 'A. Cáceres, J. Linares',
  license: 'MIT',
  url: 'proximamente',
  contact: {
    email: '-',
    website: 'proximamente',
  },
  /*
  config: {
    timeout: 5000,
    maxRequests: 1000,
  },
  */
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
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}
