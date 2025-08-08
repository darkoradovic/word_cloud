import type { Topic } from "../types";

const getTextColorClass = (score: number): string => {
  if (score > 60) return "text-green-500";
  if (score < 40) return "text-red-500";
  return "text-gray-500";
};

interface Props {
  topic: Topic | null;
}

const TopicDetails = ({ topic }: Props) => {
  if (!topic) {
    return (
      <div className="w-full lg:w-1/3 p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Topic Details
        </h2>
        <p className="text-center text-gray-500 italic">
          Click a topic to see details.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/3 p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Topic Details
      </h2>
      <div className="space-y-4">
        <h3 className="text-3xl font-extrabold text-white text-center">
          {topic.label}
        </h3>
        <div className="bg-gray-700 rounded-xl p-4 space-y-2">
          <p className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-400">Total Volume:</span>
            <span className="text-white text-xl font-bold">{topic.volume}</span>
          </p>
          <div className="border-t border-gray-600 pt-2">
            <p className="flex justify-between items-center">
              <span className="text-green-400">Positive:</span>
              <span className="text-green-400 font-bold">
                {topic.sentiment.positive || 0}
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-red-400">Negative:</span>
              <span className="text-red-400 font-bold">
                {topic.sentiment.negative || 0}
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-gray-400">Neutral:</span>
              <span className="text-gray-400 font-bold">
                {topic.sentiment.neutral || 0}
              </span>
            </p>
          </div>
          <p className="flex justify-between items-center text-lg mt-4 font-semibold border-t border-gray-600 pt-2">
            <span className="text-gray-400">Sentiment Score:</span>
            <span
              className={`${getTextColorClass(
                topic.sentimentScore
              )} text-xl font-bold`}
            >
              {topic.sentimentScore}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;
