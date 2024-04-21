import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
        
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-zinc-500 hover:border-zinc-300 group/link">
                <FontAwesomeIcon icon={faCode} 
                className="h-10 w-10 text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                cursor-pointer group-hover/link:text-zinc-300" />
            </Link>

            <Link to={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-zinc-500 hover:border-zinc-300 group/link">
                <FontAwesomeIcon icon={faEye} 
                className="h-10 w-10 text-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                cursor-pointer group-hover/link:text-zinc-300" />
            </Link>
            </div>

        </div>

        <div className="text-zinc-300 rounded-b-xl mt-3 bg-zinc-900 py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-zinc-500">{description}</p>
        </div>
    </div>
  )
}
