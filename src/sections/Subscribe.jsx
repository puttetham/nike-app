import Button from "../components/Button"

const Subscribe = () => {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:text-white-400">Sign up for 
            <span className="text-coral-red"> Updates</span> & Newsletter
            </h3>
            
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" placeholder="subscribe@nike.com" className="input dark:bg-black dark:text-gray-400"/>
                <div className="flex max-sm:justfi-end items-center max-sm:w-full">
                    <Button label="Sign Up" fullWidth />
                </div>
            </div>
        </section>
  )
}

export default Subscribe