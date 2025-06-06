/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ imgUrl, title, description, previewUrl, codeUrl, backContent }) => {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="group h-[28rem] w-full relative perspective"
    onMouseLeave={() => setFlipped(false)}>
      
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full transform-style preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden
          ${flipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
          style={{ transform: "rotateY(0deg)" }}
        >
          <div className="flex flex-col bg-zinc-900 w-full h-full">
            <div
              className="h-72 md:h-52 lg:h-72"
              style={{
                background: `url(${imgUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="text-zinc-300 bg-zinc-900 py-6 px-4 h-fit">
              <h5 className="text-xl font-semibold mb-2">{title}</h5>
              <p className="text-zinc-500">{description}</p>
            </div>
          </div>

          {/* OVERLAY */}
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-900 
            bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-xl">
            <button
              onClick={() => setFlipped(true)}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-zinc-500 hover:border-zinc-300 group/link"
            >
              <FontAwesomeIcon
                icon={faArrowRotateRight}
                className="h-8 w-8 text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                cursor-pointer group-hover/link:text-zinc-300"
              />
            </button>

            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-zinc-500 hover:border-zinc-300 group/link"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="h-8 w-8 text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                cursor-pointer group-hover/link:text-zinc-300"
              />
            </a>
          </div>
        </div>

        {/* BACK SIDE */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.4, delay: flipped ? 0.3 : 0 }}
            className={`absolute w-full h-full rounded-xl bg-zinc-800 text-zinc-300 p-6 
            flex flex-col justify-start backface-hidden
            ${flipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ transform: "rotateY(180deg)" }}
            >
            <h5 className="font-bold self-center">{title}</h5>
            {backContent}
            
            {/**ICONA e LINK GitHub */}
            <div
              className="relative flex w-fit items-center cursor-pointer my-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              {/* Link "Repository" */}
              <AnimatePresence>
                {isHovered && (
                  <motion.a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute left-12 w-max text-zinc-500 font-semibold"
                  >
                    Vai al repository
                  </motion.a>
                )}
              </AnimatePresence>

              {/* Icona */}
              <motion.div
                transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                className="text-zinc-300"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`h-8 w-8 transition duration-300 ${
                    isHovered
                      ? "text-zinc-300 animate-pulse drop-shadow-[0_0_6px_rgba(212,212,216,0.9)]"
                      : ""
                  }`}
                />
              </motion.div>

            </div>


          </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
