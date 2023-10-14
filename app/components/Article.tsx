import { nip19, type Event } from "nostr-tools";
import { useRelayStore } from "../stores/relayStore";
import { useArticleEventStore } from "../stores/eventStore";
import { useRouter } from "next/navigation";
import { getTagValues } from "../lib/utils";
import { AddressPointer } from "nostr-tools/lib/nip19";

interface Props {
  event: Event;
}

export default function Article({ event }: Props) {
  const { relayUrl } = useRelayStore();
  const { setCachedArticleEvent } = useArticleEventStore();

  const router = useRouter();

  const routeArticle = () => {
    const identifier = getTagValues("d", event.tags);

    // TODO: handle relays
    // TODO: add tag for applicacants
    const addressPointer: AddressPointer = {
      identifier: identifier,
      pubkey: event.pubkey,
      kind: 30023,
      relays: [relayUrl],
    };

    setCachedArticleEvent(event);
    router.push(nip19.naddrEncode(addressPointer));
  };

  return (
    <article
      onClick={routeArticle}
      className="group relative flex flex-col items-start cursor-pointer"
    >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative z-10">
          {getTagValues("title", event.tags)}
        </span>
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {new Date(event.created_at * 1000).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {getTagValues("summary", event.tags)}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      >
        Read article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            stroke-width="1.5"
            stroke-linecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
}
