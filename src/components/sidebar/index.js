import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, PlayIcon, RulesIcon, WatchIcon, SocialsIcon, AccountIcon, DarkModeIcon, SettingsIcon, HelpIcon, LogoSmall } from "./const";

const SideBar = () => {
    const [isHoverPlay, setIsHoverPlay] = useState(false);
    const [isHoverRules, setIsHoverRules] = useState(false);
    const [isHoverWatch, setIsHoverWatch] = useState(false);
    const [isHoverSocials, setIsHoverSocials] = useState(false);
    const [isHoverAccount, setIsHoverAccount] = useState(false);

    return (
        <div className="flex-col items-center justify-between hidden md:flex w-14 bg-neutral-100 lg:w-60 h-dvh">
            <div className="my-4">
                <Logo />
                <LogoSmall />
            </div>
            <div className="w-full h-1/2">
                <Link to="/play">
                    <div
                        className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                        onMouseEnter={() => setIsHoverPlay(true)}
                        onMouseLeave={() => setIsHoverPlay(false)}
                    >
                        <PlayIcon width={8} height={8} color={isHoverPlay ? 'white' : undefined} />
                        <h1 className="hidden ml-2 lg:block">Play</h1>
                    </div>
                </Link>
                <Link to="/rules">
                    <div
                        className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                        onMouseEnter={() => setIsHoverRules(true)}
                        onMouseLeave={() => setIsHoverRules(false)}
                    >
                        <RulesIcon width={8} height={8} color={isHoverRules ? 'white' : undefined} />
                        <h1 className="hidden ml-2 lg:block">Rules</h1>
                    </div>
                </Link>
                <Link to="/watch">
                    <div
                        className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                        onMouseEnter={() => setIsHoverWatch(true)}
                        onMouseLeave={() => setIsHoverWatch(false)}
                    >
                        <WatchIcon width={8} height={8} color={isHoverWatch ? 'white' : undefined} />
                        <h1 className="hidden ml-2 lg:block">Watch</h1>
                    </div>
                </Link>
                <Link to="/socials">
                    <div
                        className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                        onMouseEnter={() => setIsHoverSocials(true)}
                        onMouseLeave={() => setIsHoverSocials(false)}
                    >
                        <SocialsIcon width={8} height={8} color={isHoverSocials ? 'white' : undefined} />
                        <h1 className="hidden ml-2 lg:block">Socials</h1>
                    </div>
                </Link>
                <Link to="/account">
                    <div
                        className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                        onMouseEnter={() => setIsHoverAccount(true)}
                        onMouseLeave={() => setIsHoverAccount(false)}
                    >
                        <AccountIcon width={8} height={8} color={isHoverAccount ? 'white' : undefined} />
                        <h1 className="hidden ml-2 lg:block">Account</h1>
                    </div>
                </Link>
            </div>
            <div className="w-full py-4 bg-neutral-200">
                <div className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:cursor-pointer hover:scale-105">
                    <DarkModeIcon width={6} height={6} />
                    <h1 className="hidden ml-2 lg:block">Dark Mode</h1>
                </div>
                <Link to="/settings">
                    <div className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:cursor-pointer hover:scale-105">
                        <SettingsIcon width={6} height={6} />
                        <h1 className="hidden ml-2 lg:block">Settings</h1>
                    </div>
                </Link>
                <Link to="/help">
                    <div className="flex items-center p-2 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm lg:mx-6 hover:cursor-pointer hover:scale-105">
                        <HelpIcon width={6} height={6} />
                        <h1 className="hidden ml-2 lg:block">Help</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;