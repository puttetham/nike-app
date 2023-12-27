import PopularProductCard from "../components/PopularProductCard";
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -200,
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

const PopularProducts = () => {

    const ref = useRef();

    const isInView =useInView(ref, {margin:"-100px"})

    const products = [
        {
            imgURL: shoe4,
            name: "Nike Air Jordan-01",
            price: "$200.20",
        },
        {
            imgURL: shoe5,
            name: "Nike Air Jordan-10",
            price: "$210.20",
        },
        {
            imgURL: shoe6,
            name: "Nike Air Jordan-100",
            price: "$220.20",
        },
        {
            imgURL: shoe7,
            name: "Nike Air Jordan-001",
            price: "$230.20",
        },
    ];    

    return (
        <motion.section id="products" className="max-container max-sm:mt-12" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="flex flex-col justify-start gap-5" variants={variants}>
                <h2 className="text-4xl font-palanquin font-bold dark:text-white-400">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-gray-400">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
            </motion.div>

            <motion.div variants={variants} className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:grap-4 gap-14">
              {products.map((product) => (
                <PopularProductCard key={product.name} {...product} />
              ))}
            </motion.div>
        </motion.section>    
    )
}

export default PopularProducts