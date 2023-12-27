import Button from "../components/Button";
import { offer } from "../assets/images";
import{ arrowRight } from "../assets/icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        }
    },
    exit: {
        opacity: 1,
    }

}

const SpecialOffer = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});

    return (
        <motion.section ref={ref} variants={fadeInVariants} initial="initial" animate={isInView && "animate"} className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain" />
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold dark:text-white-400'>
                    <span className='text-coral-red'> Special </span>
                    Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text dark:text-gray-400">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className="mt-6 lg:max-w-lg info-text dark:text-gray-400">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button
                        label="Learn more"
                        backgroundColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default SpecialOffer