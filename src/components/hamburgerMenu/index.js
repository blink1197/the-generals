import { useState, useEffect, useRef } from "react";
import { HamburgerIcon, CloseIcon } from "../topbar/const";
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

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} >
                {isOpen ? (
                    <CloseIcon />
                ) : (
                    <HamburgerIcon />
                )}
            </button>
            <div ref={menuRef} className={`absolute left-0 w-full mt-2 text-xl font-bold bg-white rounded-lg shadow-lg top-12 font-outfit transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'} z-50`}>
                {isOpen && (
                    <>
                        <Link to="/">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Home</div>
                        </Link>
                        <Link to="/play">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Play</div>
                        </Link>
                        <Link to="/rules">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Rules</div>
                        </Link>
                        <Link to="/watch">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Watch</div>
                        </Link>
                        <Link to="/socials">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Socials</div>
                        </Link>
                        <Link to="/account">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Account</div>
                        </Link>
                        <Link to="/settings">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Settings</div>
                        </Link>
                        <Link to="/help">
                            <div className="block px-4 py-2 my-3 text-gray-700 hover:bg-gray-200">Help</div>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

export default HamburgerMenu;