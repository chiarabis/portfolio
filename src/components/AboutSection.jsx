import TabButton from "./TabButton"
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeftAlt, faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";

const TAB_DATA = [
    /*{
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-2 md:grid-cols-3 gap-x-6">
          <li>Html e Css</li>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>React Native</li>
          <li>SQL</li>
          <li>TypeScript</li>
          <li>Responsive design</li>
          <li>Basi di UI/UX design</li>
        </ul>
      ),
    },*/
    {
      title: "Formazione",
      id: "education",
      content: (
        <ul className="list-disc list-inside">
          <li>Master in Front-End Development - Start2Impact University</li>
          <li>Master di I livello in Digital Humanities - Università Ca' Foscari</li>
          <li>Laurea in Conservazione dei Beni Culturali - Università di Ferrara</li>
        </ul>
      ),
    },
    {
      title: "Esperienze lavorative",
      id: "experience",
      content: (
        <ul className="list-disc grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 list-inside">
          <li>Baby sitter e aiuto compiti</li>
          <li>Bibliotecaria catalogatrice</li>
          <li>Assistente museale</li>
          <li>Cameriera di sala</li>
        </ul>
      ),
    },
    {
      title: "Interessi personali",
      id: "hobbies",
      content: (
        <ul className="list-disc grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 list-inside">
          <li>Leggere (thriller, gialli, sci-fi)</li>
          <li>Candele artigianali</li>
          <li>Serie TV e film</li>
          <li>Fitness e fare passeggiate</li>
          <li>Colorare e disegnare</li>
        </ul>
      ),
    }
];



export default function AboutSection() {
    //const [tab, setTab] = useState("education");
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeTab = TAB_DATA[activeTabIndex];

    const handleNext = () => {
      setActiveTabIndex((prev) => (prev + 1) % TAB_DATA.length);
    };
    const handlePrev = () => {
      setActiveTabIndex((prev) => (prev - 1 + TAB_DATA.length) % TAB_DATA.length);
    };

    const handleTabChange = (id) => {
      //setTab(id)
      const index = TAB_DATA.findIndex((tab) => tab.id === id);
      if (index !== -1) setActiveTabIndex(index);
    };


    return (

    <section className="text-zinc-300" id="aboutme">
      {/*<div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">*/}
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left w-full h-full text-base lg:text-lg
          gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16
          columns-1 md:columns-2 space-y-8">
            <p>Sono una <b>front-end developer</b>, con focus su React.</p>
            <p>Il mio percorso per diventarlo è stato tutto fuorchè lineare. 
            Il mio background di studi è umanistico e per molto tempo ho inseguito un sogno da cui, a un certo punto, 
            mi sono svegliata. <i>Non l'ho sentito più mio.</i></p>
            <p>Dopo la laurea ho frequentato un master in Digital Humanities all'Università Ca' Foscari, con l'intento di approfondire
            l'interconnessione tra le tecnologie digitali e informatiche con le discipline umanistiche. 
            Da quel momento ho realizzato che volevo diventare una sviluppatrice.</p>
            <p> {/**className="border-x border-zinc-300 px-4" */}
              Non è stato facile all'inizio e molte volte mi sono sentita persa, ma la perseveranza e la consapevolezza 
              che ce l'avrei fatta ad affrontare le sfide mi hanno dato un input costante.
            </p>
            <p>Così ho iniziato il mio percorso studiando da autodidatta, sul web, attraverso le guide e i tutorial;
            poi ho deciso di seguire un corso più strutturato, con dei coach che potessero guidarmi e consigliarmi, sulla piattaforma Start2Impact. 
            Mentre lavoravo, studiavo e realizzavo i progetti personali e per i moduli del corso.</p>
            <p>
              <FontAwesomeIcon icon={faQuoteLeftAlt} className="mr-2"/>Questa professione è ciò in cui voglio 
              dare il meglio di me stessa. Sono entusiasta di imparare e 
            di mettermi in gioco; nonché a puntare, step by step, sempre a nuovi obiettivi.
            <FontAwesomeIcon icon={faQuoteRightAlt} className="ml-2"/>
            </p>

            <div className="border-t border-zinc-300 px-4"></div>
              
            <div className="mt-10">
              {/* DESKTOP: TabButton visibili */}
              <div className=" hidden sm:flex flex-row justify-between gap-4">
                {TAB_DATA.map((tab) => (
                  <TabButton
                    key={tab.id}
                    selectTab={() => handleTabChange(tab.id)}
                    active={activeTab.id === tab.id}
                  >
                    {tab.title}
                  </TabButton>
                ))}
              </div>
              {/* MOBILE: frecce + tab centrale dinamico */}
              <div className="flex sm:hidden items-center justify-between gap-4">
                <button onClick={handlePrev} className="p-2 group hover:text-zinc-300 transition text-zinc-500">
                  <FontAwesomeIcon icon={faChevronLeft} className="text-inherit transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(212,212,212,0.9)]"/>
                </button>

                <TabButton selectTab={() => handleTabChange(tab.id)} active={true}>
                  {activeTab.title}
                </TabButton>

                <button onClick={handleNext} className="p-2 group hover:text-zinc-300 transition text-zinc-500">
                  <FontAwesomeIcon icon={faChevronRight} className="text-inherit transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(212,212,212,0.9)]"/>
                </button>
              </div>

              {/* CONTENUTO */}
              <div className="mt-4">
                {activeTab.content}
              </div>
              


              {/*<div className="flex flex-row justify-between gap-4 gradient-text bg-gradient-to-r">
              
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >Formazione
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >Esperienze lavorative
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("hobbies")}
                  active={tab === "hobbies"}
                >Interessi personali
                </TabButton>

              </div>
              
              <div className="mt-4">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>*/}

            </div>

          </div>
        </motion.div>
        
      
    </section>
  );
}