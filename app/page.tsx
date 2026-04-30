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
                dissertation