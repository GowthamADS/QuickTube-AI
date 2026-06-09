const About = () => {
  const features = [
    "Quick Summary — concise overview of the entire video",
    "Key Points — most important takeaways extracted automatically",
    "Topic Analysis — detects main subjects and themes",
    "Important Timestamps — jump to what matters most",
  ];

  const steps = [
    {
      text: "User enters YouTube URL",
      color: "#8B5CF6",
    },
    {
      text: "Transcript is extracted automatically",
      color: "#6366F1",
    },
    {
      text: "AI processes the full content",
      color: "#3B82F6",
    },
    {
      text: "Summary is generated in seconds",
      color: "#06B6D4",
    },
    {
      text: "Analysis & insights displayed",
      color: "#10B981",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        scroll-mt-9
        py-19
        px-6
        lg:px-12
      "
    >
      {/* Purple Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 40%, rgba(139,92,246,0.08), transparent 40%)",
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
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-xl mx-auto lg:mx-0">

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
                mb-6
              "
              style={{
                color: "#8B5CF6",
                background: "rgba(139,92,246,0.10)",
                border: "1px solid rgba(139,92,246,0.22)",
              }}
            >
              ABOUT THE PROJECT
            </span>

            {/* Heading */}
            <h2
              className="
                text-white
                font-bold
                leading-tight
                mb-3
              "
              style={{
                fontSize: "clamp(1.8rem,2.8vw,2.8rem)",
              }}
            >
              What is{" "}
              <span className="orbitron bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                QuickTube
              </span>
               {" "}?
            </h2>

            {/* Description */}
            <p
              className="text-slate-400 mb-10"
              style={{
                fontSize: "1.0005rem",
                lineHeight: "1.9",
              }}
            >
              This project uses{" "}
              <span className="text-violet-400 font-medium">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-medium">
                Natural Language Processing (NLP)
              </span>{" "}
              to summarize YouTube videos automatically.
              Simply paste any YouTube URL and receive a full
              structured breakdown in seconds — no manual
              note-taking required.
            </p>

            {/* Features */}
            <div className="space-y-5">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                    style={{
                      border: "1px solid #00E5A8",
                      color: "#00E5A8",
                    }}
                  >
                    ✓
                  </div>

                  <p
                    className="text-slate-300"
                    style={{
                      fontSize: "1.0005rem",
                      lineHeight: "1.8",
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              w-full
              max-w-xl
              mx-auto
              rounded-[28px]
              p-10
            "
            style={{
              background: "rgba(17,24,39,0.55)",
              border: "1px solid rgba(139,92,246,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(139,92,246,0.08)",
            }}
          >
            <h3
              className="
                text-violet-400
                text-sm
                font-semibold
                uppercase
                tracking-[5px]
                mb-8
              "
            >
              HOW IT WORKS
            </h3>

            <div
              className="
                rounded-2xl
                py-5
                px-6
                text-center
                mb-10
              "
              style={{
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.20)",
                color: "#B794F4",
                fontSize: "1rem",
              }}
            >
              f(x) = YouTube URL → Transcript → AI Summary
            </div>

            <div className="space-y-6">

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5"
                >
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-sm
                      shrink-0
                    "
                    style={{
                      color: step.color,
                      background: `${step.color}20`,
                      border: `1px solid ${step.color}40`,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p
                    className="text-slate-300"
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;