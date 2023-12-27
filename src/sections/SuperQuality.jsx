import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: 200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        }
    }
}

const SuperQuality = () => {

    const ref = useRef();

    const isInView =useInView(ref, {margin:"-100px"})

    return (
        <motion.section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
            <div className="flex flex-1 flex-col">
                <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold dark:text-white-400'>
                    We Provide You
                    <span className='text-coral-red'> Super </span>
                    <span className='text-coral-red'>Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text dark:text-gray-400">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="mt-6 lg:max-w-lg info-text dark:text-gray-400">Our dedication to detail and excellence ensures your satisfaction</p>
                <div className="mt-11">
                    <Button label="View details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
            </div>
        </motion.section>
    ) 
}

export default SuperQuality