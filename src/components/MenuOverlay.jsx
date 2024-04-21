import NavLink from "./NavLink"

export default function MenuOverlay( {links, onClose} ) {
  
  return (
    <ul className="flex flex-col py-4 items-center gradient-text bg-gradient-to-b">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path} title={link.title} onClose={onClose}/>
        </li>
      ))}
    </ul>
  )
}
