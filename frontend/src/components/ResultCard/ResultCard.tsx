import {
  faCircleCheck,
  faCircleDot,
  faCopy,
  faFileLines
} from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faClock, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type ResultCardProps = {
  video_id?: string;
  title?: string;
  summary?: string;
  keyPoints?: string[];
  topics?: string[];
  difficulty?: string;
  audience?: string[];
  learningTime?: string;
};

const ResultCard = ({
  video_id,
  title,
  summary,
  keyPoints = [],
  topics = [],
  difficulty,
  audience = [],
  learningTime,
}: ResultCardProps) => {
  const difficultyStyles = {
    Beginner:
      "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
    Intermediate:
      "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400",
    Advanced:
      "bg-red-500/10 border border-red-500/20 text-red-400",
  };
const [copied, setCopied] = useState(false);

const copySummary = () => {
  navigator.clipboard.writeText(summary || "");

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  const difficultyClass =
    difficultyStyles[
      difficulty as keyof typeof difficultyStyles
    ] ||
    "bg-violet-500/10 border border-violet-500/20 text-violet-400";

  return (
    <section className="mt-12">
      <div
        className="
        rounded-3xl
        border
        border-violet-500/20
        bg-[#09142d]
        backdrop-blur-md
        p-8
        shadow-xl
        shadow-violet-500/10
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-violet-500/10
            border
            border-violet-500/20
            text-violet-400
            text-sm
            tracking-wider
            "
          >
            AI ANALYSIS
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            {title || "Video Summary"}
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Video ID: {video_id}
          </p>
        </div>

        {/* Summary */}
        <div
          className="
          rounded-2xl
          bg-[#0f1b3d]
          border
          border-violet-500/10
          p-6
          "
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            <FontAwesomeIcon
              icon={faFileLines}
              className="mr-2"
            />
             Summary
          </h3>

          <p className="text-slate-300 leading-8">
            {summary ||
              "The generated summary will appear here after analyzing the YouTube video."}
          </p>
          <div className="flex flex-wrap gap-3 mt-5">

            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faTags} className="text-violet-400" />
              {topics.length} Topics
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleDot} className="text-rose-400" />
              {keyPoints.length} Key Points
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} />
              {learningTime || "N/A"}
            </span>

          </div>

          <button
            onClick={copySummary}
            className="
              mt-5
              px-5
              py-2
              rounded-xl
              bg-violet-500/10
              border
              border-violet-500/20
              text-violet-300
              hover:bg-violet-500/20
              transition-all
            "
          >
            <>
              {copied ? (
                <>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "rgb(99, 230, 190)" }}
                    className="mr-2"
                  />
                  Copied!
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="mr-2"
                  />
                  Copy Summary
                </>
              )}
            </>
          </button>
        </div>

        {/* Key Points + Difficulty */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Key Points */}
          <div
            className="
            rounded-2xl
            bg-[#0f1b3d]
            border
            border-violet-500/10
            p-6
            "
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircleDot}
                className="text-rose-400"
              />
              Key Points
            </h3>

            <ul
              className="
              space-y-4
              max-h-112.5
              overflow-y-auto
              pr-2
              "
            >
              {keyPoints.length > 0 ? (
                keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="
                    text-slate-300
                    flex
                    gap-3
                    leading-7
                    items-start
                    "
                  >
                    <span className="text-violet-400 mt-1">
                      •
                    </span>

                    <span>{point}</span>
                  </li>
                ))
              ) : (
                <li className="text-slate-500">
                  Key points will appear here.
                </li>
              )}
            </ul>
          </div>

         
          {/* Difficulty */}
          <div
            className="
            rounded-2xl
            bg-[#0f1b3d]
            border
            border-violet-500/10
            p-6
            flex
            flex-col
            "
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faChartSimple}
                style={{ color: "rgb(96, 165, 250)" }}
              />
              Difficulty Level
            </h3>

            <span
              className={`
                inline-flex
                w-fit
                px-5
                py-2
                rounded-full
                font-medium
                mb-6
                ${difficultyClass}
              `}
            >
              {difficulty || "Not Analyzed"}
            </span>

            <div className="text-left">
              <p className="text-slate-400 text-sm">
                Estimated Audience
              </p>

              <ul className="mt-2 space-y-1 text-slate-300">
                {audience.length > 0 ? (
                  audience.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))
                ) : (
                  <li>• Not Available</li>
                )}
              </ul>

              <p className="text-slate-400 text-sm mt-5">
                Learning Time
              </p>

              <p className="text-white font-medium mt-1">
                {learningTime || "Not Available"}
              </p>
            </div>
          </div>

        </div>

        {/* Topics */}
        <div
          className="
          mt-8
          rounded-2xl
          bg-[#0f1b3d]
          border
          border-violet-500/10
          p-6
          "
        >
          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faTags}
              className="text-violet-400"
            />
            Topics
          </h3>

          <div className="flex flex-wrap gap-3">
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <span
                  key={index}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-violet-500/10
                  border
                  border-violet-500/20
                  text-violet-300
                  transition-all
                  duration-300
                  hover:bg-violet-500/20
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-violet-500/20
                  cursor-default
                  "
                >
                  {topic}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
                Topics will appear here.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;