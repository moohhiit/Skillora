export type TabType = "news" | "cartoon" | "games";

export const content: Record<TabType, string[]> = {
  news: [
    "Breaking: React 19 Released!",
    "Vite 5.0 now supports faster HMR",
    "Tailwind CSS introduces new animations",
  ],
  cartoon: [
    "Mickey Mouse Adventures",
    "Tom & Jerry Classics",
    "SpongeBob SquarePants",
  ],
  games: ["Chess", "Ludo", "Tic-Tac-Toe"],
};
