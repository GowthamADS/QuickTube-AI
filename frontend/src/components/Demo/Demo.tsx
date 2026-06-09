import axios from "axios";
import { useState } from "react";
import ResultCard from "../ResultCard/ResultCard";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


const Demo = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
  video_id: "",
  title: "",
  summary: "",
  keyPoints: [] as string[],
  topics: [] as string[],
  difficulty: "",
  audience: [] as string[],
  learningTime: "",
});
const [errorMessage, setErrorMessage] = useState<string | JSX.Element>("");

  async function handleGenerate() {
    if (!url) return;

    setErrorMessage("");

    setResult({
    video_id: "",
    title: "",
    summary: "",
    keyPoints: [],
    topics: [],
    difficulty: "",
    audience: [],
    learningTime: "",
  });
  
    if (
      !url.includes("youtube.com") &&
      !url.includes("youtu.be")
    ) {
      setErrorMessage("⚠️ Please enter a valid YouTube URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/summarize",
        {
          youtube_url: url,
        }
      );

      setResult(response.data);

    } catch (error: any) {

        if (error.response?.status === 429) {
          setErrorMessage(
            <>
              <FontAwesomeIcon icon={faTriangleExclamation} className="animate-pulse mr-2" /> AI service is currently busy. Please try again in a minute.
            </>
          );
          setTimeout(() => {
          setErrorMessage("");
        }, 5000);
          return;
        }

        if (error.response?.status === 400) {
          setErrorMessage(error.response.data.detail);
          return;
        }

        setErrorMessage("❌ Failed to analyze video.");
      }
      finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="demo"
      className="
        relative
        overflow-hidden
        scroll-mt-13
        py-15
        px-6
        lg:px-12
      "
    >
      {/* Purple Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(139,92,246,0.08), transparent 40%)",
        }}
      />

      {/* Blue Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.06), transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Badge */}
        <span
          className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            text-xs
            uppercase
            tracking-[3px]
            font-semibold
          "
          style={{
            color: "#60A5FA",
            background: "rgba(59,130,246,0.10)",
            border: "1px solid rgba(59,130,246,0.20)",
          }}
        >
          LIVE DEMO
        </span>

        {/* Heading */}
        <h2
          className="mt-4 text-white font-bold"
          style={{
            fontSize: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Try it{" "}
          <span className="orbitron bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
            Yourself
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-2xl
            mx-auto
            text-slate-400
          "
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.9",
          }}
        >
          Paste any YouTube URL and let AI generate a structured
          summary instantly.
        </p>

        {/* Demo Card */}
        <div
          className="
            mt-8
            max-w-4xl
            mx-auto
            rounded-[28px]
            p-8
          "
          style={{
            background: "rgba(17,24,39,0.55)",
            border: "1px solid rgba(139,92,246,0.15)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 40px rgba(139,92,246,0.08)",
          }}
        >
          {/* Label */}
          <div className="mb-5 text-center text-slate-300 font-medium text-lg">
            <FontAwesomeIcon icon={faLink} /> Paste YouTube URL
          </div>
            {errorMessage && (
              <div
                className="
                  relative
                  mb-5
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  text-red-300
                  p-4
                  text-center
                "
              >
                <button
                  onClick={() => setErrorMessage("")}
                  className="
                    absolute
                    top-3
                    right-4
                    text-red-300
                    hover:text-red-100
                  "
                >
                  ✕
                </button>

                {errorMessage}
              </div>
            )}
          {/* Input */}
          <input
            type="text"
            placeholder="https://youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
              w-full
              h-16
              rounded-2xl
              px-6
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
            "
            style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.20)",
            }}
          />

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
              mt-6
              w-full
              h-16
              rounded-2xl
              font-semibold
              text-lg
              text-white
              bg-linear-to-r
              from-violet-500
              to-blue-500
              shadow-lg
              shadow-violet-500/20
              hover:scale-[1.01]
              transition-all
              duration-300
            "
          >
            {loading ? (
              <div className="flex justify-center items-center gap-3">
                <div
                  className="
                    w-5
                    h-5
                    border-2
                    border-white
                    border-t-transparent
                    rounded-full
                    animate-spin
                  "
                />
                Analyzing Video...
              </div>
            ) : (
              <><FontAwesomeIcon icon={faWandMagicSparkles} /><span> Generate Summary</span></>
            )}
          </button>

          {/* Stats */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              items-center
              gap-8
              text-slate-400
              text-sm
            "
          >
            <span> <FontAwesomeIcon icon={faBolt} /> &lt;10 sec</span>
            <span> <FontAwesomeIcon icon={faRobot} />    AI Powered</span>
            <span> <FontAwesomeIcon icon={faFileLines} /> Structured Summary</span>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-yellow-500/20
            bg-yellow-500/5
            p-4
            text-left
          "
        >
          <h4 className="flex items-center gap-2 text-yellow-300 font-medium mb-2">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{ color: "rgb(255, 212, 59)" }}
            />
            Disclaimer
          </h4>

          <ul className="text-slate-400 text-sm space-y-1">
            <li>• Videos without subtitles/transcripts cannot be analyzed.</li>
            <li>• Private, deleted, age-restricted, or members-only videos are not supported.</li>
            <li>• Very long videos may be partially analyzed for faster results.</li>
            <li>• AI-generated summaries may occasionally contain inaccuracies.</li>
          </ul>
        </div>

        {/* Results */}
        {result.summary && (
          <div className="mt-12">

            <div
              className="
              mb-6
              rounded-3xl
              overflow-hidden
              border
              border-violet-500/20
              bg-[#09142d]
              "
            >
              <a
                href={`https://www.youtube.com/watch?v=${result.video_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://img.youtube.com/vi/${result.video_id}/hqdefault.jpg`}
                  alt="Video Thumbnail"
                  className="
                    w-full
                    rounded-3xl
                    border
                    border-violet-500/20
                    hover:scale-[1.01]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                />
              </a>
            </div>

            <ResultCard
              video_id={result.video_id}
              title={result.title}
              summary={result.summary}
              keyPoints={result.keyPoints}
              topics={result.topics}
              difficulty={result.difficulty}
              audience={result.audience}
              learningTime={result.learningTime}
            />

          </div>
        )}

      </div>
    </section>
  );
};

export default Demo;