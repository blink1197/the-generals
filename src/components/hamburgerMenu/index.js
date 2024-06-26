import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = () => {
        setIsOpen(false); // Close the menu when a menu item is clicked
    };

    console.log(isOpen);
    return (
        <div ref={menuRef} className={`${isOpen ? 'block' : 'h-0'}`}>
            <button className="z-[100] w-8 h-8 absolute left-4 top-4 space-y-2" onClick={() => setIsOpen(prevState => !prevState)} >
                <div className={`w-8 h-1 bg-zinc-700 dark:bg-white rounded-full transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}></div>
                <div className={`w-8 h-1 bg-zinc-700 rounded-full dark:bg-white transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-0'}`}></div>
                <div className={`w-8 h-1 bg-zinc-700 rounded-full dark:bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            </button>
            <div className={`dark:bg-zinc-700 dark:text-white pt-12 h-dvh left-0 w-full text-xl font-bold bg-white shadow-lg top-12 font-outfit transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <>
                    <Link to="/" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Home</div>
                    </Link>
                    <Link to="/play" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Play</div>
                    </Link>
                    <Link to="/rules" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Rules</div>
                    </Link>
                    <Link to="/watch" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Watch</div>
                    </Link>
                    <Link to="/socials" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Socials</div>
                    </Link>
                    <Link to="/account" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Account</div>
                    </Link>
                    <Link to="/settings" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Settings</div>
                    </Link>
                    <Link to="/help" onClick={handleMenuItemClick}>
                        <div className="block px-4 py-4 my-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-950">Help</div>
                    </Link>
                </>
            </div>
        </div>
    );
}

export default HamburgerMenu;
