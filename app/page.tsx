import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import {
  certifications,
  experience,
  navItems,
  projects,
  skillGroups
} from "@/lib/content";

const cvPath = "/Subarna_Tamang_CV.pdf";

export default function Home() {
  return (
    <>
      <Navbar items={navItems} cvPath={cvPath} />
      <main>
        <section
          id="hero"
          className="relative overflow-hidden"
          style={{ background: "#080c12", minHeight: "calc(100vh - 72px)" }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0,
              backgroundImage:
                "linear-gradient(rgba(0,255,140,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,140,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,255,140,0.4), transparent)",
              animation: "cyber-scan 4s linear infinite",
            }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="grid min-h-[calc(100vh-72px)] gap-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center py-24 pr-0 lg:pr-16">
                <div className="mb-8 flex items-center gap-3">
                  <span
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: "#00ff8c", boxShadow: "0 0 6px #00ff8c",
                      display: "inline-block", flexShrink: 0,
                      animation: "status-pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 11,
                      color: "#00ff8c", letterSpacing: "0.14em", textTransform: "uppercase",
                    }}
                  >
                    London, UK — Open to roles
                  </span>
                </div>
                <h1
                  style={{
                    fontFamily: "'Lora', serif", fontSize: "clamp(40px, 6vw, 60px)",
                    fontWeight: 600, color: "#ffffff", lineHeight: 1.02,
                    letterSpacing: "-0.01em", margin: "0 0 10px",
                  }}
                >
                  Subarna Tamang
                </h1>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 12,
                    color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em",
                    textTransform: "uppercase", marginBottom: 24,
                  }}
                >
                  GRC &amp; Cyber Risk Analyst
                </p>
                <div style={{ width: 40, height: 1, background: "#00ff8c", marginBottom: 22 }} />
                <p
                  style={{
                    fontFamily: "'Lora', serif", fontStyle: "italic",
                    fontSize: 17, color: "rgba(255,255,255,0.58)", lineHeight: 1.65,
                    maxWidth: 400, marginBottom: 36,
                  }}
                >
                  MSc Cybersecurity Management (Distinction) — translating complex
                  technical risks into clear business controls.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  
                    href={cvPath}
                    download
                    aria-label="Download Subarna Tamang CV as a PDF"
                    style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 12,
                      color: "#080c12", background: "#00ff8c",
                      padding: "11px 24px", letterSpacing: "0.06em",
                      textTransform: "uppercase", borderRadius: 2,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", fontWeight: 500,
                    }}
                  >
                    Download CV
                  </a>
                  
                    href="#projects"
                    style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 12,
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      padding: "11px 24px", letterSpacing: "0.06em",
                      textTransform: "uppercase", borderRadius: 2,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none",
                    }}
                  >
                    View Projects →
                  </a>
                </div>
              </div>
              <div
                className="hidden lg:flex flex-col justify-center py-24 pl-16"
                style={{ borderLeft: "1px solid rgba(0,255,140,0.1)" }}
              >
                <div
                  style={{
                    background: "rgba(0,255,140,0.04)",
                    border: "1px solid rgba(0,255,140,0.15)",
                    borderRadius: 4, padding: "18px 22px", marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    {["rgba(255,90,90,0.5)", "rgba(255,180,60,0.5)", "rgba(0,255,140,0.5)"].map((c) => (
                      <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
                    ))}
                  </div>
                  {[
                    ["$ ", "whoami"],
                    ["{", ""],
                    ['  "role"', ': "GRC Analyst",'],
                    ['  "education"', ': "MSc Cybersecurity (Dist.)",'],
                    ['  "frameworks"', ': ["NIST CSF", "ISO 27001", "COBIT 5"],'],
                    ['  "status"', ': "available"'],
                    ["}", ""],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, lineHeight: 1.9 }}>
                      <span style={{ color: i === 0 ? "#00ff8c" : "rgba(255,255,255,0.28)" }}>{k}</span>
                      <span style={{ color: "rgba(255,255,255,0.72)" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 1, background: "rgba(0,255,140,0.08)",
                    border: "1px solid rgba(0,255,140,0.08)", borderRadius: 3,
                  }}
                >
                  {[
                    ["Risk", "Assessment & Registers"],
                    ["Control", "Design & Heatmaps"],
                    ["Cloud", "AWS Security"],
                    ["Compliance", "GDPR · PCI-DSS"],
                  ].map(([label, detail]) => (
                    <div key={label} style={{ background: "#080c12", padding: "11px 14px" }}>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{label}</p>
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.68)", margin: "3px 0 0" }}>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" className="border-t border-line bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy">
                About
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Clear governance, practical controls, credible delivery.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-neutral-700">
                I&apos;m a GRC and Cyber Risk Analyst based in London,
                specialising in risk assessment, control design, and security
                governance. I hold an MSc in Cybersecurity Management
                (Distinction) from Ravensbourne University, where my
                dissertation applied NIST CSF and COBIT 5 to build a
                post-incident resilience strategy for a real hospitality group.
                I&apos;m currently pursuing CompTIA Security+ and ISO 27001
                Foundation, with CRISC as a longer-term target.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {certifications.map((item) => (
                  <article
                    key={item.label}
                    className="border border-line bg-white p-5"
                  >
                    <h3 className="text-sm font-semibold text-navy">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" className="border-t border-line bg-[#fbfcfe]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy">
                Skills
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Core skills
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <section
                  key={group.title}
                  aria-label={`${group.title} skills`}
                  className="border border-line bg-white p-6"
                >
                  <h3 className="text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-tint px-3 py-1.5 text-sm font-medium text-navy"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Applied risk thinking across operational and technical roles.
            </h2>
            <div className="mt-14 border-l border-line">
              {experience.map((role) => (
                <article key={role.title} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-navy" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold text-ink">
                      {role.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-500">
                      {role.dates}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-navy">
                    {role.company}
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                    {role.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" className="border-t border-line bg-[#fbfcfe]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy">
                  Projects
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  Evidence of depth, outcomes, and documentation.
                </h2>
              </div>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Section>

        <ContactSection cvPath={cvPath} />
      </main>
      <Footer />
    </>
  );
}
