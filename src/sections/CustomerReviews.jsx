import { customer1, customer2 } from "../assets/images";
import ReviewCard from "../components/ReviewCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CustomerReviews = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-200px"})

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.2,     
            }
        }
    }

    const reviews = [
        {
            imgURL: customer1,
            customerName: 'Morich Brown',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: customer2,
            customerName: 'Lota Mongeskar',
            rating: 4.5,
            feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
    ];

    return (
        <motion.section ref={ref} className="max-container" variants={variants} initial="initial" animate={isInView && "animate"}>
            <h3 className="font-palauin text-center text-4xl font-bold dark:text-white-400">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-gray-400">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} 
                                review={review}
                    />
                ))}
            </div>
        </motion.section>
    )
}

export default CustomerReviews