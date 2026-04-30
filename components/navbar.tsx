"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/content";

type NavbarProps = {
  items: NavItem[];
  cvPath: string;
};

export function Navbar({ items, cvPath }: NavbarProps) {
  const [active, setActive] = useState(items[0]?.href ?? "#about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.08, 0.18, 0.32]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#hero"
          aria-label="Subarna Tamang homepage"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm font-semibold tracking-wide text-navy"
          onClick={closeMenu}
        >
          ST
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm font-medium transition ${
                active === item.href ? "text-navy" : "text-neutral-600 hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={cvPath}
            download
            aria-label="Download Subarna Tamang CV as a PDF"
            className="focus-ring inline-flex min-h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white transition hover:bg-[#142f59]"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-navy md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white px-5 py-4 shadow-sm md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`focus-ring rounded-lg px-2 py-3 text-base font-medium ${
                  active === item.href ? "bg-tint text-navy" : "text-neutral-700"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvPath}
              download
              aria-label="Download Subarna Tamang CV as a PDF"
              onClick={closeMenu}
              className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
