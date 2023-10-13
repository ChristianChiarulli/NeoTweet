import type { Event } from "nostr-tools";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface ArticleEventState {
  articleEvents: Record<string, Array<Event>>;
  setArticleEvents: (relayUrl: string, articleEvents: Array<Event>) => void;
  getArticleEvents: (relayUrl: string) => Array<Event>;
  cachedArticleEvent: Event | null;
  setCachedArticleEvent: (article: Event | null) => void;
  getCachedArticleEvent: () => Event | null;

  noteEvents: Record<string, Array<Event>>;
  setNoteEvents: (relayUrl: string, noteEvents: Array<Event>) => void;
  getNoteEvents: (relayUrl: string) => Array<Event>;
  cachedNoteEvent: Event | null;
  setCachedNoteEvent: (note: Event | null) => void;
  getCachedNoteEvent: () => Event | null;
}

export const useArticleEventStore = create<ArticleEventState>()(
  devtools(
    persist(
      (set, get) => ({
        articleEvents: {},
        setArticleEvents: (relayUrl, articleEvents) =>
          set((prev) => ({
            articleEvents: { ...prev.articleEvents, [relayUrl]: articleEvents },
          })),
        getArticleEvents: (relayUrl: string) => get().articleEvents[relayUrl] ?? [],
        cachedArticleEvent: null,
        setCachedArticleEvent: (article) =>
          set({ cachedArticleEvent: article }),
        getCachedArticleEvent: () => get().cachedArticleEvent,

        noteEvents: {},
        setNoteEvents: (relayUrl, noteEvents) =>
          set((prev) => ({
            noteEvents: { ...prev.noteEvents, [relayUrl]: noteEvents },
          })),
        getNoteEvents: (relayUrl: string) => get().noteEvents[relayUrl] ?? [],
        cachedNoteEvent: null,
        setCachedNoteEvent: (note) => set({ cachedNoteEvent: note }),
        getCachedNoteEvent: () => get().cachedNoteEvent,
      }),
      {
        name: "nostrnotes-article-event-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
