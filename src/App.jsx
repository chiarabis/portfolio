import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
    <BrowserRouter>
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

