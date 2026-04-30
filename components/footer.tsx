import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>&copy; 2025 Subarna Tamang</p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/subarna-tamang"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Subarna Tamang on LinkedIn"
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-neutral-600 transition hover:border-navy hover:text-navy"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/luciferMM93"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Subarna Tamang on GitHub"
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-neutral-600 transition hover:border-navy hover:text-navy"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
