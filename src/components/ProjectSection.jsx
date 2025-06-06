/* eslint-disable react/prop-types */
"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faWandMagicSparkles, faListCheck } from "@fortawesome/free-solid-svg-icons";


const projectsData = [
    {
        id: 1,
        title: "One Planet Project - Climate Change Monitoring Web App",
        description: "Una web app stile cyber-futuristico per monitorare i dati del cambiamento climatico.",
        image: "/images/projects/one_planet_project.png",
        previewUrl: "https://one-planet-project-web.vercel.app/",
        codeUrl: "https://github.com/chiarabis/one-planet-project-web",
        backContent: (
            <div className="text-ellipsis overflow-x-hidden overflow-auto scrollbar flex flex-col justify-between xl:justify-center gap-y-4 h-full my-4">
                <div>
                    <FontAwesomeIcon icon={faListCheck} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Obiettivi:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>UI fluida e accattivante</li>
                        <li>Responsività</li>
                        <li>Educazione e intrattenimento</li>
                        <li>Dati dinamici</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Cosa ho imparato:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Componenti React</li>
                        <li>React Hooks e routing</li>
                        <li>Visualizzazione di dati</li>
                        <li>Fetch dati da API</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Da migliorare:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Organizzazione componenti</li>
                        <li>Aggiornamento di Arwes</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Orizon API",
        description: "Un progetto Node.js. Creazione di REST API per gestire un'agenzia viaggi fittizia Orizon.",
        image: "/images/projects/orizon_api.png",
        previewUrl: "https://orizon-api-nodejs.onrender.com",
        codeUrl: "https://github.com/chiarabis/orizon-api-nodejs",
        backContent: (
            <div className="text-ellipsis overflow-x-hidden overflow-auto scrollbar flex flex-col justify-between xl:justify-center gap-y-4 h-full my-4">
                <div>
                    <FontAwesomeIcon icon={faListCheck} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Obiettivi:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>API RESTful</li>
                        <li>Database</li>
                        <li>Documentazione con Swagger</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Cosa ho imparato:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Client-Server</li>
                        <li>SQL basico</li>
                        <li>Operazioni CRUD</li>
                        <li>Gestione semplice di un backend</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Da migliorare:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Integrazione con frontend</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "Foodelicious - Recipes and Grocery List Web App",
        description: "Una web app per cercare ricette da tutto il mondo, con possibilità di filtrare varie opzioni, salvarle tra i preferiti e poter creare una lista della spesa.",
        image: "/images/projects/foodelicious.png",
        previewUrl: "https://recipes-app-hazel-zeta.vercel.app/",
        codeUrl: "https://github.com/chiarabis/",
        backContent: (
            <div className="text-ellipsis overflow-x-hidden overflow-auto scrollbar flex flex-col justify-between xl:justify-center gap-y-4 h-full my-4">
                <div>
                    <FontAwesomeIcon icon={faListCheck} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Obiettivi:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Sito web responsive</li>
                        <li>Creare una lista della spesa</li>
                        <li>Aggiunger/eliminare i preferiti</li>
                        <li>Cercare ricette per categorie e filtri</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Cosa ho imparato:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Componenti React</li>
                        <li>React Context e routing</li>
                        <li>React Styled Components e altre librerie</li>
                        <li>Fetch dati da API</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Da migliorare:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Grafica</li>
                        <li>UI/UX design</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Form2Doc",
        description: "Tool client-side per generare documenti compilati in Word a partire da campi input, utilizzando JS e librerie esterne.",
        image: "/images/projects/form2doc.png",
        previewUrl: "https://form2doc.netlify.app/",
        codeUrl: "https://github.com/chiarabis/",
        backContent: (
            <div className="text-ellipsis overflow-x-hidden overflow-auto scrollbar flex flex-col justify-between xl:justify-center gap-y-4 h-full my-4">
                <div>
                    <FontAwesomeIcon icon={faListCheck} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Obiettivi:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Generazione documenti compilati</li>
                        <li>Collegamento input a campo segnaposto tag</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Cosa ho imparato:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Javascript</li>
                        <li>Controllo e gestione input form</li>
                        <li>Lettura tag usando JS</li>
                        <li>Trasformazione file .zip in .doc da scaricare</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Da migliorare:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Dipendenza da modello di doc</li>
                        <li>Trasformazione in file PDF</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 5,
        title: "Moove App - Web App di Mobilità Sostenibile",
        description: "App di micromobilità condivisa realizzata interamente in Typescript. Il progetto mira a offrire una soluzione sostenibile e innovativa per il trasporto urbano.",
        image: "/images/projects/moove.png",
        previewUrl: "https://mooveapp.netlify.app/",
        codeUrl: "https://github.com/chiarabis/",
        backContent: (
            <div className="text-ellipsis overflow-x-hidden overflow-auto scrollbar flex flex-col justify-between xl:justify-center gap-y-4 h-full my-4">
                <div>
                    <FontAwesomeIcon icon={faListCheck} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Obiettivi:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Web app responsive</li>
                        <li>Cercare, prenotare, aggiungere mezzi</li>
                        <li>Codice robusto con Typescript</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Cosa ho imparato:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Typescript</li>
                        <li>Organizzazione codice</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-pink-600"/>
                    <h2 className="w-fit gradient-text bg-gradient-to-l font-semibold inline">Da migliorare:</h2>
                    <ul className="flex sm:flex-row md:flex-col md:list-inside md:list-disc lg:list-none lg:flex-row flex-wrap justify-start gap-x-4">
                        <li>Grafica</li>
                        <li>UI/UX design</li>
                    </ul>
                </div>
            </div>
        )
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

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">
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
                        backContent={project.backContent}
                        previewUrl={project.previewUrl}
                        codeUrl={project.codeUrl}
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
