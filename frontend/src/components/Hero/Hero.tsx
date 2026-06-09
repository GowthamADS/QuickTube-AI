import {
  faBrain,
  faLightbulb,
  faTags,
  faChartSimple,
  faCopy,
  faLink,
  faWandMagicSparkles,
  faBolt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        pt-30
        pb-30
        px-6
      "
    >
      {/* Purple Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(139,92,246,0.15), transparent 45%)",
        }}
      />

      {/* Blue Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 40%, rgba(59,130,246,0.08), transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            text-violet-300
            text-sm
            font-medium
          "
        >
          <FontAwesomeIcon icon={faWandMagicSparkles} />          
          <span>AI Powered • LLM Powered • NLP Technology</span>
        </div>

        {/* Heading */}
        <h1
          className="
            orbitron
            mt-8
            font-extrabold
            text-white
            leading-[1.05]
            "
            style={{
              fontSize: "clamp(2rem, 4vw, 8rem)",
            }}
          >
          Transform YouTube
          <br />

          Videos into{" "}
          <span
            className="
              bg-linear-to-r
              from-violet-400
              via-purple-500
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Smart Summaries
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-6
            max-w-3xl
            mx-auto
            text-slate-400
          "
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
          }}
        >
          Get concise summaries, key insights, and video
          analysis using advanced AI technology.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
        <a href="#demo">
          <button
            className="
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-white
              bg-linear-to-r
              from-violet-500
              to-blue-500
              shadow-lg
              shadow-violet-500/20
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FontAwesomeIcon icon={faBolt} /> Try Now
          </button>
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-violet-500/20
              bg-white/5
              text-white
              hover:bg-white/10
              transition
            "
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div
          className="
            mt-16
            flex
            flex-wrap
            justify-center
            gap-16
          "
        >
          <div>
            <h3 className="text-4xl font-bold text-white">
              1000+
            </h3>
            <p className="mt-2 text-slate-400">
              Videos Summarized
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              95%
            </h3>
            <p className="mt-2 text-slate-400">
              Accuracy
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">
              &lt;10s
            </h3>
            <p className="mt-2 text-slate-400">
              Processing Time
            </p>
          </div>
        </div>

      </div>
      {showModal && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/60
            backdrop-blur-sm
            overflow-y-auto
            p-6
          "
        >
          <div
            className="
              w-full
              max-w-3xl
              mx-auto
              mt-10
              mb-10
              rounded-3xl
              p-8
              max-h-[90vh]
              overflow-y-auto
            "
            style={{
              background: "rgba(17,24,39,0.95)",
              border: "1px solid rgba(139,92,246,0.2)",
              boxShadow: "0 0 40px rgba(139,92,246,0.15)",
            }}
          >
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">
                About QuickTube
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="
                  text-slate-400
                  hover:text-white
                  text-2xl
                "
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 leading-8">
              QuickTube uses AI and Natural Language Processing (NLP) to transform lengthy YouTube videos into structured learning notes. Simply paste a YouTube URL and receive an intelligent summary, key takeaways, learning difficulty, target audience recommendations, and estimated learning time within seconds.
            </p>

           <div className="grid md:grid-cols-2 gap-4 mt-8">

  <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-4">
    <div className="flex items-center gap-3 text-white font-semibold">
      <FontAwesomeIcon icon={faBrain} />
      AI Summaries
    </div>
    <p className="text-slate-400 text-sm mt-2">
      Generate concise summaries from lengthy YouTube videos.
    </p>
  </div>

  <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
    <div className="flex items-center gap-3 text-white font-semibold">
      <FontAwesomeIcon icon={faLightbulb} />
      Key Takeaways
    </div>
    <p className="text-slate-400 text-sm mt-2">
      Extract important concepts and learning points instantly.
    </p>
  </div>

    <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">
      <div className="flex items-center gap-3 text-white font-semibold">
        <FontAwesomeIcon icon={faTags} />
        Topic Detection
      </div>
      <p className="text-slate-400 text-sm mt-2">
        Automatically identify major topics discussed in the video.
      </p>
    </div>

    <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
      <div className="flex items-center gap-3 text-white font-semibold">
        <FontAwesomeIcon icon={faChartSimple} />
        Learning Analysis
      </div>
      <p className="text-slate-400 text-sm mt-2">
        Get difficulty level, audience type, and learning time.
      </p>
    </div>

    <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-4">
      <div className="flex items-center gap-3 text-white font-semibold">
        <FontAwesomeIcon icon={faCopy} />
        Copy Summary
      </div>
      <p className="text-slate-400 text-sm mt-2">
        Save and reuse AI-generated summaries with one click.
      </p>
    </div>

    <div className="rounded-xl bg-pink-500/10 border border-pink-500/20 p-4">
      <div className="flex items-center gap-3 text-white font-semibold">
        <FontAwesomeIcon icon={faLink} />
        Video Intelligence
      </div>
      <p className="text-slate-400 text-sm mt-2">
        Analyze videos directly from any supported YouTube URL.
      </p>
    </div>

  </div>
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/5
          p-5
        "
      >
        <h3 className="flex items-center gap-2 text-yellow-300 font-semibold mb-3">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
          />
          Why a Disclaimer?
        </h3>

        <p className="text-slate-400 text-sm leading-6">
          QuickTube relies on publicly available YouTube transcripts and AI
          analysis. Some videos may not provide transcripts, while others may
          be private, age-restricted, members-only, or unavailable for
          processing. AI-generated summaries are designed to assist learning
          and may occasionally contain inaccuracies or omit certain details.
        </p>

        <ul className="mt-4 text-slate-400 text-sm space-y-1.5">
          <li>• Videos without subtitles/transcripts cannot be analyzed.</li>
          <li>• Private, deleted, age-restricted, or members-only videos are not supported.</li>
          <li>• Very long videos may be partially processed for faster results.</li>
          <li>• AI-generated summaries may contain minor inaccuracies.</li>
          <li>• Difficulty levels and learning time are AI-estimated values.</li>
        </ul>
      </div>
            <button
              onClick={() => setShowModal(false)}
              className="
                mt-8
                w-full
                py-4
                rounded-xl
                bg-linear-to-r
                from-violet-500
                to-blue-500
                text-white
                font-semibold
              "
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;