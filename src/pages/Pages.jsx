import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Homepage from '../components/Homepage';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';


function Pages(){
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about-me' element={<AboutSection/>}/>
                <Route path='/skills' element={<SkillSection/>}/>
                <Route path='/projects' element={<ProjectSection/>}/>
                <Route path='/contacts' element={<ContactSection/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Pages;