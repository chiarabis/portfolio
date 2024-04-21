import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
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
        <meta name="keywords" content="computer science, coding, development, software, javascript, tech, front end developer, react, working, skills, web" />
        <meta name="author" content="Chiara Bissolo" />
        <meta property="og:title" content="Portfolio Website - Chiara Bissolo" />
        <meta property="og:description" content="My portfolio website - I'm Chiara Bissolo, Front-end developer" />
        <meta property="og:image" content="/image-og.png" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website"/>
        <link rel="canonical" href=""/>
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

