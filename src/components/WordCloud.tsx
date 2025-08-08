import { useState, useMemo } from "react";
import { TOPICS_DATA } from "../data/topics";
import TopicWord from "./TopicWord";
import TopicDetails from "./TopicDetails";
import type { Topic } from "../types";
import { getFontSizeClass, getTextColorClass } from "../utils/wordCloud";

const WordCloud = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const sortedTopics = useMemo(
    () => [...TOPICS_DATA].sort((a, b) => a.volume - b.volume),
    []
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
        Topic Word Cloud
      </h1>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        <div className="flex-1 p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {TOPICS_DATA.map((topic) => (
              <TopicWord
                key={topic.id}
                topic={topic}
                onClick={() => setSelectedTopic(topic)}
                fontSizeClass={getFontSizeClass(topic.volume, sortedTopics)}
                textColorClass={getTextColorClass(topic.sentimentScore)}
              />
            ))}
          </div>
        </div>
        <TopicDetails topic={selectedTopic} />
      </div>
    </div>
  );
};

export default WordCloud;
