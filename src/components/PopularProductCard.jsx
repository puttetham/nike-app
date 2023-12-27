import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <motion.img src={imgURL} alt={name} className="w-[280px] h-[280px] cursor-pointer" whileHover={{scale:1.2}} />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-gray-400">
                (4.5)
            </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white-400">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-base">{price}</p>
    </div>
  )
}

export default PopularProductCard