import { useState } from "react";
import { Logo, PlayIcon, RulesIcon, WatchIcon, SocialsIcon, AccountIcon, DarkModeIcon, SettingsIcon, HelpIcon } from "./const";

const SideBar = () => {
    const [isHoverPlay, setIsHoverPlay] = useState(false);
    const [isHoverRules, setIsHoverRules] = useState(false);
    const [isHoverWatch, setIsHoverWatch] = useState(false);
    const [isHoverSocials, setIsHoverSocials] = useState(false);
    const [isHoverAccount, setIsHoverAccount] = useState(false);
    
    return (
        <div className="flex flex-col items-center justify-between bg-neutral-100 w-60 h-dvh">
            <div className="my-4">
                <Logo />
            </div>
            <div className="w-full h-1/2">
                <div
                    className="flex items-center p-2 mx-6 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                    onMouseEnter={() => setIsHoverPlay(true)}
                    onMouseLeave={() => setIsHoverPlay(false)}
                >
                    <PlayIcon width={8} height={8} color={isHoverPlay ? 'white' : undefined} />
                    <h1 className="ml-2">Play</h1>
                </div>
                <div
                    className="flex items-center p-2 mx-6 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                    onMouseEnter={() => setIsHoverRules(true)}
                    onMouseLeave={() => setIsHoverRules(false)}
                >
                    <RulesIcon width={8} height={8} color={isHoverRules ? 'white' : undefined} />
                    <h1 className="ml-2">Rules</h1>
                </div>
                <div
                    className="flex items-center p-2 mx-6 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                    onMouseEnter={() => setIsHoverWatch(true)}
                    onMouseLeave={() => setIsHoverWatch(false)}
                >
                    <WatchIcon width={8} height={8} color={isHoverWatch ? 'white' : undefined} />
                    <h1 className="ml-2">Watch</h1>
                </div>
                <div
                    className="flex items-center p-2 mx-6 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                    onMouseEnter={() => setIsHoverSocials(true)}
                    onMouseLeave={() => setIsHoverSocials(false)}
                >
                    <SocialsIcon width={8} height={8} color={isHoverSocials ? 'white' : undefined} />
                    <h1 className="ml-2">Socials</h1>
                </div>
                <div
                    className="flex items-center p-2 mx-6 my-2 text-xl font-semibold transition-transform duration-300 rounded-sm hover:bg-neutral-700 hover:text-white hover:cursor-pointer hover:scale-105"
                    onMouseEnter={() => setIsHoverAccount(true)}
                    onMouseLeave={() => setIsHoverAccount(false)}
                >
                    <AccountIcon width={8} height={8} color={isHoverAccount ? 'white' : undefined} />
                    <h1 className="ml-2">Account</h1>
                </div>
            </div>
            <div className="w-full py-4 bg-neutral-200">
                <div className="flex items-center p-2 mx-6 text-lg font-semibold transition-transform duration-300 rounded-sm hover:cursor-pointer hover:scale-105">    
                    <DarkModeIcon width={6} height={6} />
                    <h1 className="ml-2">Dark Mode</h1>
                </div>
                <div className="flex items-center p-2 mx-6 text-lg font-semibold transition-transform duration-300 rounded-sm hover:cursor-pointer hover:scale-105">
                    <SettingsIcon width={6} height={6} />
                    <h1 className="ml-2">Settings</h1>
                </div>
                <div className="flex items-center p-2 mx-6 text-lg font-semibold transition-transform duration-300 rounded-sm hover:cursor-pointer hover:scale-105">
                    <HelpIcon width={6} height={6}/>
                    <h1 className="ml-2">Help</h1>
                </div>
            </div>
        </div>
    );
};

export default SideBar;