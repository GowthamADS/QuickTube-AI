import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faClock, faLightbulb, faPen, faGlobe, faDownload } from "@fortawesome/free-solid-svg-icons";
const features = [
  {
    icon: <FontAwesomeIcon icon={faBrain} />,
    title: "Smart Summarization",
    color: "#EC4899",
    description:
      "Generate concise AI-powered summaries from lengthy YouTube videos.",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    title: "Timestamp Extraction",
    color: "#3B82F6",
    description:
      "Identify important moments and jump directly to key sections.",
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "Key Insights",
    color: "#F59E0B",
    description:
      "Extract valuable takeaways and learning points automatically.",
  },
  {
    icon: <FontAwesomeIcon icon={faPen} />,
    title: "Actionable Notes",
    color: "#8B5CF6",
    description:
      "Convert videos into structured notes for quick revision.",
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: "Multi-Language",
    color: "#06B6D4",
    description:
      "Generate summaries in multiple languages with ease.",
  },
  {
    icon: <FontAwesomeIcon icon={faDownload} />,
    title: "Export Options",
    color: "#10B981",
    description:
      "Download summaries or share them instantly.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        scroll-mt-5
        py-20
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
            FEATURES
          </span>

          <h2
            className="
              orbitron
              mt-4
              text-white
              font-bold
            "
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
            }}
          >
            Everything you need
          </h2>

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
            Powerful AI tools designed to turn YouTube videos
            into structured knowledge.
          </p>

        </div>

        {/* Cards */}
        <div
          className="
            mt-11
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
              "
              style={{
                background: "rgba(17,24,39,0.55)",
                border: `1px solid ${feature.color}30`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 0 20px ${feature.color}15`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 35px ${feature.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${feature.color}15`;
              }}
            >
              {/* Icon */}
             <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
                style={{
                  color: feature.color,
                  background: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                  boxShadow: `0 0 0px ${feature.color}`,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-white
                  font-semibold
                "
                style={{
                  fontSize: "1.15rem",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
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
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;