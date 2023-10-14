import { Fragment, useEffect, useState } from "react";

import { useRelayInfoStore } from "@/app/stores/relayInfoStore";
import { useRelayMenuStore } from "@/app/stores/relayMenuStore";
import { useRelayStore } from "@/app/stores/relayStore";
import { useUserProfileStore } from "@/app/stores/userProfileStore";
import { Profile } from "@/app/types";
import { Popover, Transition } from "@headlessui/react";

const links = [
  { name: "Profile", href: "#" },
  { name: "Settings", href: "#" },
  // { name: "Bookmarked Notes", href: "#" },
  // create faq page later https://github.com/vercel/next.js/discussions/17443
  // { name: "Help", href: "#" },
];

export default function Example({ children }: any) {
  const { activeRelay, relayUrl } = useRelayStore();
  const { getUserProfile, setUserProfile, userProfile, clearUserProfile, setUserPublicKey } =
    useUserProfileStore();
  const [currentProfile, setCurrentProfile] = useState<Profile>();
  const { getRelayInfo } = useRelayInfoStore();
  const { setRelayMenuActiveTab, setRelayMenuIsOpen } = useRelayMenuStore();

  useEffect(() => {
    if (currentProfile && currentProfile.relay === relayUrl) {
      return;
    }
    const cachedProfile = getUserProfile(relayUrl);

    if (cachedProfile) {
      setCurrentProfile(cachedProfile);
      return;
    }
  }, [relayUrl, activeRelay, userProfile]);

  const handleRelayMenuSettingsClick = () => {
    setRelayMenuActiveTab("Settings");
    setRelayMenuIsOpen(true);
    console.log("RelayMenuSettings");
  };

  const handleRelayMenuReadFromClick = () => {
    setRelayMenuActiveTab("Read From");
    setRelayMenuIsOpen(true);
  };

  const signOut = async () => {
    clearUserProfile();
    setUserPublicKey("");
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none ring-0">
        {children}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 flex w-screen max-w-min translate-x-4 px-4">
          <div className="w-48 shrink rounded-md py-2 text-sm font-semibold leading-6 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 shadow-zinc-800/5 bg-white/90 text-zinc-800 dark:text-zinc-200 dark:ring-white/10">
            <span
              onClick={handleRelayMenuReadFromClick}
              className="mb-2 block cursor-pointer border-b border-zinc-200  px-4 pb-2 pt-1 dark:border-zinc-700/40"
            >
              {currentProfile && currentProfile.name && (
                <p>{currentProfile.name}</p>
              )}
              {currentProfile && currentProfile.name && (
                <p className="mb-1 mt-2 flex items-center gap-x-2">
                  <img
                    className="h-5 w-5 rounded-full"
                    src={
                      relayUrl
                        .replace("wss://", "https://")
                        .replace("relay.", "") + "/favicon.ico"
                    }
                    alt=""
                  />
                  {getRelayInfo(relayUrl) && (
                    <span className="text-zinc-500 dark:text-zinc-200">
                      {getRelayInfo(relayUrl).name}
                    </span>
                  )}
                </p>
              )}
            </span>
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-1 hover:bg-teal-400/40 dark:hover:bg-teal-500/50"
              >
                {item.name}
              </a>
            ))}
            {/* TODO: close menu when this is clicked */}
            <span
              onClick={handleRelayMenuSettingsClick}
              className="block w-full cursor-pointer px-4 py-1 text-left hover:bg-teal-400/40 dark:hover:bg-teal-500/50"
            >
              Relays
            </span>
            {/* <span */}
            {/*   onClick={handleRelayMenuSettingsClick} */}
            {/*   className="block w-full cursor-pointer px-4 py-1 text-left hover:bg-blue-200 dark:hover:bg-blue-600" */}
            {/* > */}
            {/*   Settings */}
            {/* </span> */}
            <div className="mt-2 border-t border-zinc-200 dark:border-zinc-700/40" />
            <span
              onClick={signOut}
              className="mt-2 block cursor-pointer px-4 py-1 hover:bg-teal-400/40 dark:hover:bg-teal-500/50"
            >
              <p>{"Sign out"}</p>
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
