/* eslint-disable react/prop-types */
"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Newspaper Website",
        description: "Usando la API del New York Times, ho realizzato un sito web per accedere alle informazioni e alle notizie.",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/chiarabis/newspaper-clone-app",
        previewUrl: "https://newspaper-clone-app.vercel.app/",
    },
    {
        id: 2,
        title: "Recipes Web App",
        description: "Una web app per cercare ricette da tutto il mondo, con possibilità di opzioni veg, salvarle tra i preferiti e poter creare una lista della spesa.",
        image: "/images/projects/2.png",
        gitUrl: "https://github.com/chiarabis/recipes-app",
        previewUrl: "https://recipes-app-hazel-zeta.vercel.app/",
    },
    {
        id: 3,
        title: "Climate Change Web App",
        description: "'One Planet Project', una web app stile cyber-futuristico per monitorare i dati del cambiamento climatico ed educare e sensibilizzare l'utente.",
        image: "/images/projects/3.png",
        gitUrl: "https://github.com/chiarabis/one-planet-project-web",
        previewUrl: "https://one-planet-project-web.vercel.app/",
    },
    {
        id: 4,
        title: "Calculator",
        description: "Il primo mini-progetto in Javascript! Una semplice calcolatrice per comprendere la logica di programmazione.",
        image: "/images/projects/4.png",
        gitUrl: "https://github.com/chiarabis/calculator",
        previewUrl: "https://chiarabis.github.io/calculator/",
    },
    {
        id: 5,
        title: "Library App",
        description: "Applicazione per la ricerca di libri.",
        image: "/images/projects/5.png",
        gitUrl: "",
        previewUrl: "",
    },
];



export default function ProjectSection( {isHomepage} ) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { opacity: 0,  y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const projectsToDisplay = isHomepage ? projectsData.slice(0, 3) : projectsData;


    return (
        <section id="projects">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-12">My Projects</h2>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsToDisplay.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li>
                ))}
            </ul>

            {isHomepage && (
            <div className="flex justify-center mt-12">
                <Link to="/projects">
                    <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold
                     border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300">All</button>
                </Link>
            </div>
            )}
        </section>
    )
}
