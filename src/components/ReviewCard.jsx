import { star } from "../assets/icons";

const ReviewCard = ({review}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={review.imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm info-text text-center dark:text-gray-400">{review.feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className="object-contain m-0"/>
            <p className="text-xl text-slate-gray font-montserrat dark:text-gray-400">({review.rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-center text-3xl font-bold dark:text-gray-400">{review.customerName}</h3>
    </div>
  )
}

export default ReviewCard