import { Logo } from "./const"
import HamburgerMenu from "../hamburgerMenu"

function TopBar() {
    return (
        <div className='absolute top-0 flex-shrink-0 w-full h-16 md:hidden z-[200] dark:bg-zinc-800'>
            <div className="w-full h-full ">
                <HamburgerMenu />
                <Logo />
            </div>
        </div>
    )
}

export default TopBar