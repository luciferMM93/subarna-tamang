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
        <Section
          id="hero"
          className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8 lg:px-10"
        >
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-navy">
              London, UK
            </p>
            <h1 className="text-balance text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-[56px]">
              Subarna Tamang
            </h1>
            <p className="mt-5 text-2xl font-medium text-ink sm:text-3xl">
              GRC & Cyber Risk Analyst
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              MSc Cybersecurity Management (Distinction) {"\u2014"} translating complex
              technical risks into clear business controls.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={cvPath}
                download
                aria-label="Download Subarna Tamang CV as a PDF"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#142f59]"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-tint"
              >
                View Projects
              </a>
            </div>
          </div>
        </Section>

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
