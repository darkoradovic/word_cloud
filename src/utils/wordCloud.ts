import type { Topic } from "../types";

export function getFontSizeClass(volume: number, topics: Topic[]): string {
  const sortedTopics = [...topics].sort((a, b) => a.volume - b.volume);
  const index = sortedTopics.findIndex((t) => t.volume === volume);
  const total = sortedTopics.length;

  if (index < total / 6) return "text-xs";
  if (index < (total / 6) * 2) return "text-sm";
  if (index < (total / 6) * 3) return "text-base";
  if (index < (total / 6) * 4) return "text-lg";
  if (index < (total / 6) * 5) return "text-xl";
  return "text-2xl";
}

export function getTextColorClass(score: number): string {
  if (score > 60) return "text-green-500";
  if (score < 40) return "text-red-500";
  return "text-gray-500";
}
