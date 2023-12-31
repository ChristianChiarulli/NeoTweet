"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { getTagValues } from "@/app/lib/utils";
import { useRelayStore } from "@/app/stores/relayStore";
import { nip19 } from "nostr-tools";
import { Event } from "nostr-tools";
import { AddressPointer } from "nostr-tools/lib/nip19";
import { useArticleEventStore } from "@/app/stores/eventStore";

export default function Blog() {
  const { subscribe, relayUrl } = useRelayStore();
  const { cachedArticleEvent, setCachedArticleEvent } = useArticleEventStore();

  const [naddr, setNaddr] = useState<string>("");
  const [naddrPointer, setNaddrPointer] = useState<AddressPointer>();
  // TODO: get this event from cache, should cache after click since we already get it on the home page
  const [articleEvent, setArticle] = useState<Event>();
  const pathname = usePathname();
  let naddrStr: string = "";
  if (pathname && pathname.length > 60) {
    naddrStr = pathname.split("/").pop() || "";
    console.log("naddrStr", naddrStr);
  }

  useEffect(() => {
    if (naddrStr) {
      console.log("naddr", naddr);
      const naddr_data: any = nip19.decode(naddrStr).data;
      console.log("naddr_data", naddr_data);
      setNaddr(naddrStr);
      setNaddrPointer(naddr_data);

      if (naddrPointer) {
        if (cachedArticleEvent) {
          console.log("cachedArticleEvent", cachedArticleEvent);
          setArticle(cachedArticleEvent);
          setCachedArticleEvent(null);
          return;
        }
        console.log("subscribing to article");
        const onEvent = (event: any) => {
          console.log("article event", event);
          setArticle(event);
        };

        const onEOSE = () => {
          console.log("article eose");
          console.log("articleEvent", articleEvent);
        };

        const filter = {
          kinds: [naddrPointer.kind],
          authors: [naddrPointer.pubkey],
          "#d": [naddrPointer.identifier],
        };

        if (naddrPointer.relays) {
          console.log("TRYING TO SUBSCRIBE TO RELAY");
          console.log("naddrPointer.relays[0]", naddrPointer.relays[0]);
          subscribe([naddrPointer.relays[0]], filter, onEvent, onEOSE);
        } else {
          subscribe([relayUrl], filter, onEvent, onEOSE);
        }
      }
    }
  }, [naddr]);

  function setupMarkdown(content: string) {
    var md = require("markdown-it")();
    var result = md.render(content || "");
    return result;
  }

  const markdown = setupMarkdown(articleEvent?.content || "");

  return (
    <div className="xl:relative">
      {articleEvent && (
        <div className="mx-auto max-w-2xl">
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {getTagValues("title", articleEvent.tags)}
            </h1>
            <time
              dateTime="2022-09-05"
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              <span className="ml-3">
                {new Date(articleEvent.created_at * 1000).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </span>
            </time>
          </header>
          <article
            dangerouslySetInnerHTML={{ __html: markdown }}
            className="mt-8 prose dark:prose-invert"
          ></article>
        </div>
      )}
    </div>
  );
}
