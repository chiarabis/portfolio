"use client";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function HeroSection() {
    return (
        <section className='lg:py-16'>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 items-center md:grid-cols-12"
        >
            
            <div className='col-span-8 2xl:col-span-6 w-full text-center md:text-left md:place-self-start my-auto sm:pl-4 xl:pl-16'>
                <h1 className="text-zinc-300 text-3xl sm:text-5xl lg:text-6xl mt-12">
                    <span className='gradient-text bg-gradient-to-r'>Hi, I&apos;m{" "}</span>
                    
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        'Chiara',
                        1000,
                        'Front-end Developer',
                        1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />         
                </h1>

                <p className="text-zinc-500 text-base sm:text-lg lg:text-xl mb-6">
                    I&apos;m also a coffeeholic, a candle maker and a cat lover.
                </p>

                <div>
                    <Link to='/contacts'>
                        <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-950
                        text-zinc-300 button-contact bg-gradient-to-br from-cyan-600 via-indigo-600 to-pink-600">
                            Contact me</button>
                    </Link>
                </div>
            </div>

            <div className="col-span-4 place-self-center md:m-0 mt-6 mb-12"> {/** 2xl:justify-self-start*/}
                <div className="rounded-full w-[250px] h-[250px] relative">
                    <img src="/images/pic.JPG" alt="picture" className="absolute transform -translate-x-1/2
                    -translate-y-1/2 top-1/2 left-1/2 lg:w-fit w-[180px]"></img>
                </div>
            </div>
        </motion.div>

    </section>
    )
}