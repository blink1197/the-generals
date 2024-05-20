import { Logo } from "./const"
import HamburgerMenu from "../hamburgerMenu"

function TopBar() {
    return (
        <div className='absolute top-0 flex-shrink-0 w-full h-16 md:hidden'>
            <div className="relative w-full h-full">
                <HamburgerMenu />
                <Logo />
            </div>
        </div>
    )
}

export default TopBar