import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
    <BrowserRouter>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Portfolio Website - Chiara Bissolo</title>
        <meta name="description" content="My portfolio website - I'm Chiara Bissolo, Front-end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="sviluppatore verona, sito web, sviluppatore web, web developer, creazione siti web, development, sviluppo siti web, sito web verona, software, javascript, tech, front end developer, react" />
        <meta name="author" content="Chiara Bissolo" />
        <meta property="og:title" content="Portfolio Website - Chiara Bissolo" />
        <meta property="og:description" content="Sito web Portfolio di Chiara Bissolo, front-end developer" />
        <meta property="og:image" content="/image-og.png" />
        <meta property="og:url" content="https://portfolio-chiara-bissolo.vercel.app/" />
        <meta property="og:type" content="website"/>
        <link rel="canonical" href="https://portfolio-chiara-bissolo.vercel.app/"/>
        <link rel="icon" type="image/png" href="/favicon/favicon_io/favicon.ico"/>
      </Helmet>


      <main className='flex flex-col min-h-screen'>
        <Navbar/>
          <div className="container mt-24 mx-auto sm:py-4 py-6 px-12">
            <Pages/>
          </div>
        <Footer/>
        </main>
      </BrowserRouter>
    </>
  )
}
export default App;

