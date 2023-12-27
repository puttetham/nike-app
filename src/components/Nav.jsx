import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import DarkModeToggle from "./DarkModeToggle";

const Nav = () => {
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ]; 

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks && navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-base text-slate-gray dark:text-white-400">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <DarkModeToggle />
                <div className="hidden max-lg:block">
                    <img className="dark:text-white" src={hamburger} alt="hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav