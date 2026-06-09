import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const frontendTech = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Axios",
  "Framer Motion",
];

const backendTech = [
  "Python",
  "FastAPI",
  "REST API",
  "Pydantic",
  "YouTube Transcript API",
];

const aiTech = [
  "OpenRouter API",
  "DeepSeek ChatGPT",
  "Natural Language Processing",
  "Prompt Engineering",
  "Text Summarization",
  "Content Analysis",
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="
        relative
        overflow-hidden
        scroll-mt-20
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
            TECH STACK
          </span>

          <h2
            className="orbitron mt-6 text-white font-bold"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
            }}
          >
            Technologies Used
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
            Built using modern web technologies, AI tools,
            and scalable backend architecture.
          </p>

        </div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {/* Frontend */}
          <div
            className="
              rounded-[28px]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
            "
            style={{
              background: "rgba(17,24,39,0.55)",
              border: "1px solid rgba(139,92,246,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 30px rgba(139,92,246,0.06)",
            }}
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-3xl
              "
              style={{
                background: "rgba(139,92,246,0.10)",
                border: "1px solid rgba(139,92,246,0.20)",
              }}
            >
              <FontAwesomeIcon icon={faCode} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Frontend
            </h3>

            <ul className="mt-6 space-y-4">
              {frontendTech.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="text-violet-400">●</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div
            className="
              rounded-[28px]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
            "
            style={{
              background: "rgba(17,24,39,0.55)",
              border: "1px solid rgba(59,130,246,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 30px rgba(59,130,246,0.06)",
            }}
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-3xl
              "
              style={{
                background: "rgba(59,130,246,0.10)",
                border: "1px solid rgba(59,130,246,0.20)",
              }}
            >
              <FontAwesomeIcon icon={faGear} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Backend
            </h3>

            <ul className="mt-6 space-y-4">
              {backendTech.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="text-blue-400">●</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* AI / NLP */}
          <div
            className="
              rounded-[28px]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
            "
            style={{
              background: "rgba(17,24,39,0.55)",
              border: "1px solid rgba(6,182,212,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 30px rgba(6,182,212,0.06)",
            }}
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-3xl
              "
              style={{
                background: "rgba(6,182,212,0.10)",
                border: "1px solid rgba(6,182,212,0.20)",
              }}
            >
              <FontAwesomeIcon icon={faRobot} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              AI / NLP
            </h3>

            <ul className="mt-6 space-y-4">
              {aiTech.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="text-cyan-400">●</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;