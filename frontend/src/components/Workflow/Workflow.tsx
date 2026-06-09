import { faChartBar } from "@fortawesome/free-solid-svg-icons/faChartBar";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "framer-motion";

const workflowSteps = [
  {
    number: "01",
    icon: <FontAwesomeIcon icon={faLink} />,
    color: "#8B5CF6",
    title: "Paste URL",
    description:
      "User provides a YouTube video link for analysis.",
  },
  {
    number: "02",
    icon: <FontAwesomeIcon icon={faFileLines} />,
    color: "#3B82F6", 
    title: "Extract Transcript",
    description:
      "The transcript is automatically fetched from the video.",
  },
  {
    number: "03",
    icon: <FontAwesomeIcon icon={faRobot} />,
    color: "#06B6D4",
    title: "AI Processing",
    description:
      "Advanced NLP models analyze the video content.",
  },
  {
    number: "04",
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
    color: "#F59E0B",
    title: "Generate Summary",
    description:
      "AI creates a concise and structured summary.",
  },
  {
    number: "05",
    icon: <FontAwesomeIcon icon={faChartBar} />,
    color: "#10B981",
    title: "Insights & Results",
    description:
      "Users receive summaries, topics, and key takeaways.",
  },
];

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="
        relative
        overflow-hidden
        scroll-mt-12
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

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center">

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
              color: "#8B5CF6",
              background: "rgba(139,92,246,0.10)",
              border: "1px solid rgba(139,92,246,0.22)",
            }}
          >
            WORKFLOW
          </span>

          <h2
            className="mt-6 text-white font-bold"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
            }}
          >
            How{" "}
            <span className="orbitron bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
              QuickTube
            </span>{" "}
            Works
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-slate-400
            "
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
            }}
          >
            From YouTube URL to intelligent insights in
            just a few seconds.
          </p>

        </div>

        {/* Workflow Cards */}
        <div
          className="
            mt-16
            grid
            md:grid-cols-2
            lg:grid-cols-5
            gap-6
          "
        >
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                rounded-[28px]
                p-7
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
              "
              style={{
                background: "rgba(17,24,39,0.55)",
                border: `1px solid ${step.color}30`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 0 20px ${step.color}15`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 35px ${step.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${step.color}15`;
              }}
            >
              {/* Number */}
              <div
                className="
                  absolute
                  top-4
                  right-4
                  text-sm
                  font-bold
                "
                style={{
                  color: "#8B5CF6",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
                style={{
                  color: step.color,
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  boxShadow: `0 0 15px ${step.color}20`,
                }}
              >
                {step.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-white
                  font-semibold
                  text-xl
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-4
                  text-slate-400
                "
                style={{
                  lineHeight: "1.8",
                  fontSize: "0.95rem",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Processing Pipeline */}
        <div
          className="
            mt-16
            rounded-[28px]
            p-8
          "
          style={{
            background: "rgba(17,24,39,0.55)",
            border: "1px solid rgba(139,92,246,0.15)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 30px rgba(139,92,246,0.06)",
          }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Processing Pipeline
          </h3>

          <div
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-4
            "
          >
            <span className="px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-white">
              YouTube URL
            </span>

            <span className="text-violet-400 text-xl">→</span>

            <span className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-white">
              Transcript
            </span>

            <span className="text-violet-400 text-xl">→</span>

            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-white">
              AI Analysis
            </span>

            <span className="text-violet-400 text-xl">→</span>

            <span className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-white">
              Summary
            </span>

            <span className="text-violet-400 text-xl">→</span>

            <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-white">
              Insights
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;