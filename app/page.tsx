"use client";

import { useArticleEventStore } from "./stores/eventStore";
import { useRelayStore } from "./stores/relayStore";
import { useEffect, useState } from "react";

import type { Event } from "nostr-tools";
import Article from "./components/Article";
import { getTagValues } from "./lib/utils";
import RelayMenu from "./components/menus/RelayMenu";

export default function Home() {
  const { articleEvents, getArticleEvents, setArticleEvents } =
    useArticleEventStore();
  const { subscribe, relayUrl } = useRelayStore();

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
              <span className="ml-3">Recommended</span>
            </h2>
            <div className="ml-3 mt-6 space-y-6">
              <div className="flex flex-col items-start gap-y-4 text-zinc-800 dark:text-zinc-300">
                <span>Test Article</span>
                <span>Test Article</span>
                <span>Test Article</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
