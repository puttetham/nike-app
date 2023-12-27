import ServiceCard from "../components/ServiceCard";
import { shieldTick, support, truckFast } from "../assets/icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    exit: {
        opacity: 1,
    }
}

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});

    const services = [
        {
            imgURL: truckFast,
            label: "Free shipping",
            subtext: "Enjoy seamless shopping with our complimentary shipping service."
        },
        {
            imgURL: shieldTick,
            label: "Secure Payment",
            subtext: "Experience worry-free transactions with our secure payment options."
        },
        {
            imgURL: support,
            label: "Love to help you",
            subtext: "Our dedicated team is here to assist you every step of the way."
        },
    ];

    return (
        <motion.section ref={ref} variants={variants} initial="initial" animate={isInView && "animate"} className="max-container flex justify-center flex-wrap gap-9" >
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </motion.section>
    )
}

export default Services