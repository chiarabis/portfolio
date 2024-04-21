import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Homepage from '../components/Homepage';
import AboutSection from '../components/AboutSection';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';


function Pages(){
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about-me' element={<AboutSection/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Pages;