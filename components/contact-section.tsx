import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { Section } from "@/components/section";

type ContactSectionProps = {
  cvPath: string;
};

const links = [
  {
    label: "subarnatamang331@gmail.com",
    href: "mailto:subarnatamang331@gmail.com",
    icon: MailIcon,
    aria: "Email Subarna Tamang"
  },
  {
    label: "linkedin.com/in/subarna-tamang",
    href: "https://www.linkedin.com/in/subarna-tamang",
    icon: LinkedinIcon,
    aria: "Visit Subarna Tamang on LinkedIn"
  },
  {
    label: "github.com/luciferMM93",
    href: "https://github.com/luciferMM93",
    icon: GithubIcon,
    aria: "Visit Subarna Tamang on GitHub"
  }
];

export function ContactSection({ cvPath }: ContactSectionProps) {
  return (
    <Section id="contact" className="border-t border-line bg-white">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Open to GRC, risk, and cybersecurity roles in London.
        </h2>
        <div className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.aria}
                className="focus-ring flex min-h-11 items-center gap-3 border border-line px-4 py-3 text-sm font-medium text-neutral-700 transition hover:border-navy hover:text-navy"
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="break-all">{link.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={cvPath}
            download
            aria-label="Download Subarna Tamang CV as a PDF"
            className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#142f59] sm:w-auto"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/subarna-tamang"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-tint sm:w-auto"
          >
            LinkedIn
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-neutral-500">
          Full risk register, control heatmaps, and project artefacts available
          on request.
        </p>
      </div>
    </Section>
  );
}
