"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from 'react';
import { motion } from "framer-motion";


export default function ContactSection() {
    const form = useRef();
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const data = {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try{
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Oh no! Failed... ❌");
            form.current.reset();
            setEmailSubmitted(true);
        } catch(error) {
            alert("Some error occurred.");
            console.error(error);
            form.current.reset();
        }
    }

    

    return (
        <section id='contact' className="grid md:grid-cols-2 my-12 md:mx-8 lg:mx-12 gap-10 lg:gap-32 relative">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300 mt-2">
                Let&apos;s Connect!
                </h2>
                <p className="text-zinc-500 my-4 max-w-md">
                    Hai un'idea e vuoi discuterne insieme?<br/>
                    Vuoi collaborare con me per un progetto?<br/>
                    Hai bisogno di aiuto per realizzare il tuo sito web oppure una web app?
                </p>
                <p className="text-zinc-500 mb-8 md:mb-0 max-w-md">Scrivimi compilando
                    il form oppure contattami tramite LinkeIn o Instagram.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <form 
                    className="flex flex-col" 
                    ref={form} 
                    onSubmit={handleSubmit}
                    >

                    <div className="mb-6">
                        <label htmlFor="name" className="text-zinc-300 block mb-2 text-sm md:text-base font-medium">Nome</label>
                        <input
                            name="user_name"
                            type="text"
                            id="name"
                            required
                            className="bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 text-sm md:text-base rounded-lg block w-full p-2.5"
                            placeholder="Name"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="text-zinc-300 block mb-2 text-sm md:text-base font-medium">Email</label>
                        <input
                            name="user_email"
                            type="email"
                            id="email"
                            required
                            className="bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 text-sm md:text-base rounded-lg block w-full p-2.5"
                            placeholder="your_email@example.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="text-zinc-300 block text-sm md:text-base mb-2 font-medium">Oggetto</label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 text-sm md:text-base rounded-lg block w-full p-2.5"
                            placeholder="Subject of the email"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="text-zinc-300 block text-sm md:text-base mb-2 font-medium">Messaggio</label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 text-sm md:text-base rounded-lg block w-full p-2.5"
                            placeholder="Your message here"
                        />
                    </div>

                    {emailSubmitted ? (
                        <p className="text-green-600 text-center mt-12 sm:mt-8 font-semibold text-base">Message sent successfully!
                            <FontAwesomeIcon icon={faCheck} className="ml-2"/>
                        </p>
                    ) : (
                        <div className='flex justify-center mt-12 sm:mt-8'>
                            <button type='submit' className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold
                                border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300">Invia
                                <FontAwesomeIcon icon={faEnvelope} className="ml-2"/>
                            </button>
                        </div>
                    )}
                
                </form>
                
            </motion.div>
        </section>
    )
}
