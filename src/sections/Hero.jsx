import { arrowRight } from "../assets/icons";
import { bigShoe1,bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    const statistics = [
        { value: '1k+', label: 'Brands' },
        { value: '500+', label: 'Shops' },
        { value: '250k+', label: 'Customers' },
    ];

    const shoes = [
        {
            thumbnail: thumbnailShoe1,
            bigShoe: bigShoe1,
        },
        {
            thumbnail: thumbnailShoe2,
            bigShoe: bigShoe2,
        },
        {
            thumbnail: thumbnailShoe3,
            bigShoe: bigShoe3,
        },
    ];

    const slideVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                 duration: 1,
                 staggerChildren: 0.1,   
            }
        },
    }

    return (
        <motion.section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" initial="initial" animate="animate">
            <motion.div variants={slideVariants} className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <motion.p className="text-xl font-montserrat text-coral-red">Our Summer Collection</motion.p>
                <motion.h1 
                className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-[99] dark:text-white-400"
                variants={slideVariants}
                >
                    <span className="xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span>
                    &nbsp;Shoes
                </motion.h1>
                <motion.p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-400" variants={slideVariants}>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</motion.p>
                <Button label="Shop now" iconUrl={arrowRight} />
                
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((statistic) => (
                    <div key={statistic.value}> 
                        <p className="text-4xl font-palanquin font-bold dark:text-coral-red">{statistic.value}</p>
                        <p className="font-montserrat leading-7 text-slate-gray dark:text-gray-400">{statistic.label}</p>
                    </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center">
                <motion.img
                src={bigShoeImg}
                alt='shoe colletion'
                width={610}
                height={502}
                className='object-contain relative'
                initial={{opacity:0, scale: 0}}
                animate={{opacity:1, scale: 1}}
                transition={{duration: 0.8}}
                />

                <motion.div className='flex sm:gap-6 gap-4 absolute -bottom-[0%] sm:left-[15%] max-sm:px-6'
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration: 4, staggerChildren: 0.5}}
                 >
                {shoes.map((image, index) => (
                    <div key={index}>
                        <ShoeCard
                            index={index}
                            imgURL={image}
                            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                        />
                    </div>
                ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Hero