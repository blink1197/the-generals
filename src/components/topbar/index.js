import { Logo, HamburgerIcon, CloseIcon } from "./const"
import HamburgerMenu from "../hamburgerMenu"

function TopBar() {
    return (
        <div className='absolute top-0 flex-shrink-0 w-full h-16 sm:hidden'>
            <div className="relative w-full h-full">
                <HamburgerMenu />
                {/* <HamburgerIcon />
                <CloseIcon /> */}
                <Logo />
            </div>
        </div>
    )
}

export default TopBar