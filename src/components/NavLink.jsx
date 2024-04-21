import { Link } from "react-router-dom";

const NavLink = ({to, title, onClose}) => {
    const handleClick = () => {
        onClose();
    };

    return (
        <Link to={to} className='block py-2 pl-3 pr-4 font-bold sm:text-xl rounded md:p-0 hover:text-zinc-300'
            onClick={handleClick}>{title}</Link>
    )
}

export default NavLink;