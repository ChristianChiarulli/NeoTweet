"use client";

import { useArticleEventStore } from "./stores/eventStore";
import { useRelayStore } from "./stores/relayStore";
import { useEffect, useState } from "react";

import type { Event } from "nostr-tools";
import Article from "./components/Article";
import { getTagValues } from "./lib/utils";
import RelayMenu from "./components/menus/RelayMenu";
import { Profile } from "./types";
import { useProfileStore } from "./stores/profileStore";
import Link from "next/link";

export default function Home() {
  const { articleEvents, getArticleEvents, setArticleEvents } =
    useArticleEventStore();
  const { subscribe, relayUrl } = useRelayStore();
  const { setProfile } = useProfileStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const articleFilter = {
    kinds: [30023],
    limit: 10,
    until: undefined,
    "#t": ["neovim"],
  };

  const getArticles = async () => {
    const events: Event[] = [];
    const pubkeys = new Set();

    if (articleEvents[relayUrl]) {
      const lastEvent = articleEvents[relayUrl].slice(-1)[0];
      console.log("lastEvent", lastEvent);
      // @ts-ignore
      articleFilter.until = lastEvent.created_at - 10;
    }

    const onEvent = (event: Event) => {
      const title = getTagValues("title", event.tags);

      if (title) {
        events.push(event);
        pubkeys.add(event.pubkey);
      }
    };

    const onEOSE = () => {
      if (articleEvents[relayUrl]) {
        setArticleEvents(relayUrl, [...articleEvents[relayUrl], ...events]);
      } else {
        setArticleEvents(relayUrl, events);
      }

      const userFilter = {
        kinds: [0],
        authors: Array.from(pubkeys),
      };

      const onEvent = (event: Event) => {
        const profileContent = JSON.parse(event.content);

        const profile: Profile = {
          relay: relayUrl,
          publicKey: event.pubkey,
          about: profileContent.about,
          lud06: profileContent.lud06,
          name: profileContent.name,
          nip05: profileContent.nip05,
          picture: profileContent.picture,
          website: profileContent.website,
        };

        setProfile(profile);
      };

      const onEOSE = () => { };

      subscribe([relayUrl], userFilter, onEvent, onEOSE);
    };

    subscribe([relayUrl], articleFilter, onEvent, onEOSE);
  };

  useEffect(() => {
    if (getArticleEvents(relayUrl).length > 0) {
      return;
    }
    getArticles();
  }, []);

  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
      {/* Articles */}
      <div className="flex flex-col gap-16 lg:grid-area: article mt-6">
        {mounted &&
          articleEvents[relayUrl] &&
          articleEvents[relayUrl].map((event) => (
            <Article key={event.id} event={event} />
          ))}
      </div>

      <RelayMenu />
      {/* Sidebar */}
      <div className="">
        <div className="sticky top-10 space-y-10 lg:pl-16 xl:pl-24 lg:grid-area: sidebar">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="ml-3 select-none">Recommended</span>
            </h2>
            <div className="ml-3 mt-6 space-y-6">
              <div className="flex flex-col items-start gap-y-4 text-zinc-800 dark:text-zinc-300">
                <span className="text-zinc-700 dark:text-zinc-300 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400">
                  <Link href="https://neotweet.com/naddr1qq4ku6tsxq6z6etwvde8jur5v4jz6erfwfjkxapdd4jhxumpvajj6wfnxu6njdenvgerzwfhqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygpzq53v9set80efqp4jwh3zfv596e9mr8mehk5sdxgmevuxrcvvkspsgqqqw4rscdrz4r">
                    NIP-04: Encrypted Direct Message
                  </Link>
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400">
                  <Link href="https://neotweet.com/naddr1qq7xuet0we5k6ttyd9nxvetjv4h8gttfdeehgctvd3shg6t0dckk6et5dphkguedwpex7uedvdhkuuedvfsnqdf5xcunycmpx56sz9rhwden5te0wfjkccte9ejxzmt4wvhxjmczyq3q2gkzcv4nhu5sq6e8tc3yk2zavja3naumm2gxnydukwrpuxxtgqcyqqq823cv73txj">
                    Neovim Different Installation Methods Pros & Cons
                  </Link>
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400">
                  <Link href="https://neotweet.com/naddr1qqlkwctjd35kxttzwfjkzepdwa5hg6pdvd5x2etnv5khw6rpwskhg6r994ekx6t9de3k2tt5v4kxcuedw4ej6wp4xqunqdt9xqurvdfjqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsygpzq53v9set80efqp4jwh3zfv596e9mr8mehk5sdxgmevuxrcvvkspsgqqqw4rs6x84xd">
                    Garlic bread with cheese: What the science tells us
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=""> */}
        {/*   <div className="sticky top-10 space-y-10 lg:pl-16 xl:pl-24 lg:grid-area: sidebar"> */}
        {/*     <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"> */}
        {/*       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"> */}
        {/*         <span className="ml-3 select-none">Recommended</span> */}
        {/*       </h2> */}
        {/*       <div className="ml-3 mt-6 space-y-6"> */}
        {/*         <div className="flex flex-col items-start gap-y-4 text-zinc-800 dark:text-zinc-300"> */}
        {/*           <span className=" text-zinc-700 dark:text-zinc-300 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400 "> */}
        {/*             NIP-04: Encrypted Direct Message */}
        {/*           </span> */}
        {/*           <span>Neovim Different Installation Methods Pros & Cons</span> */}
        {/*           <span> */}
        {/*             Garlic bread with cheese: What the science tells us */}
        {/*           </span> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
