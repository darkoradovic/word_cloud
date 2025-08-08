import type { Topic } from "../types";

interface Props {
  topic: Topic;
  onClick: () => void;
  fontSizeClass: string;
  textColorClass: string;
}

const TopicWord = ({
  topic,
  onClick,
  fontSizeClass,
  textColorClass,
}: Props) => {
  return (
    <span
      className={`
        font-bold transition-all duration-300 transform-gpu cursor-pointer 
        hover:scale-110 hover:text-white hover:z-10
        ${fontSizeClass} ${textColorClass}
      `}
      onClick={onClick}
    >
      {topic.label}
    </span>
  );
};

export default TopicWord;
