// If you want to add underlined animation, you can use framer-motion:

/*import { motion } from 'framer-motion'

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

// Under <p></p> add a motion.div:
/*<motion.div
    animate={active ? "active" : "default"}
    variants={variants}
    className="h-[1px] bg-zinc-300 mt-0">
  </motion.div>*/

  
export default function TabButton( { active, selectTab, children } ) {
    const buttonClasses = active ? "text-zinc-300" : "text-zinc-500";

    return (
      <button onClick={selectTab}>
        <p className={`mr-4 font-semibold hover:text-zinc-300 ${buttonClasses}`}>
          {children}
        </p>
      </button>
    );
}
