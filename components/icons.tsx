import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5.25 7.25 6.75 5.5 6.75-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 9.5v7.25M7.25 7.25v.01M11 16.75v-4.1c0-1.75 1.05-3.15 2.82-3.15 1.64 0 2.93 1.05 2.93 3.25v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.75 4.75h14.5v14.5H4.75V4.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.25 19.25v-2.8c-2.5.55-2.95-1.05-2.95-1.05-.42-1.08-1.02-1.36-1.02-1.36-.83-.57.06-.56.06-.56.92.07 1.4.96 1.4.96.82 1.42 2.15 1.01 2.67.77.08-.6.32-1.01.58-1.24-2-.23-4.1-1.02-4.1-4.5 0-1 .34-1.8.93-2.44-.1-.23-.42-1.16.08-2.42 0 0 .78-.25 2.55.93A8.66 8.66 0 0 1 12 5.2c.86 0 1.72.12 2.52.34 1.77-1.18 2.55-.93 2.55-.93.5 1.26.18 2.19.09 2.42.58.64.92 1.45.92 2.44 0 3.5-2.1 4.27-4.1 4.5.33.28.62.83.62 1.68v3.6"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
