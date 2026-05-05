import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Personal", href: "/personal" },
  { label: "About", href: "/about" },
];

const sections = [
  {
    title: "Work Projects",
    description: "Applied technical case studies from professional contexts.",
    href: "/work",
    accent: "cyan",
    featured: true,
  },
  {
    title: "Personal Projects",
    description: "Labs, learning projects, and independent experiments.",
    href: "/personal",
    accent: "blue",
  },
  {
    title: "About Me",
    description: "Profile, education, experience, resume, and contact.",
    href: "/about",
    accent: "violet",
  },
];

const cardStyles = {
  cyan: {
    border: "border-cyan-300/70",
    glow: "shadow-[0_0_38px_rgba(34,211,238,0.2)]",
    icon: "border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
    text: "text-cyan-300",
  },
  blue: {
    border: "border-sky-400/20",
    glow: "hover:border-sky-400/55",
    icon: "border-sky-400/25 bg-sky-400/10 text-sky-300",
    text: "text-sky-300",
  },
  violet: {
    border: "border-violet-400/25",
    glow: "hover:border-violet-400/60",
    icon: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    text: "text-violet-300",
  },
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.5h15v9.7a1.8 1.8 0 0 1-1.8 1.8H6.3a1.8 1.8 0 0 1-1.8-1.8V8.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.2h6.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.1 12.2h6.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.9 11h2.2v2.4h-2.2z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 8-4 4 4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 8 4 4-4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.5-3 11" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

function CardIcon({ accent }: { accent: string }) {
  if (accent === "cyan") return <BriefcaseIcon />;
  if (accent === "blue") return <CodeIcon />;
  return <UserIcon />;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020812] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover opacity-75"
        style={{
          backgroundImage: `url('${basePath}/images/background.png')`,
          backgroundPosition: "center 28%",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_14%_38%,rgba(14,165,233,0.14),transparent_18%),linear-gradient(90deg,rgba(2,8,18,0.86)_0%,rgba(2,8,18,0.58)_48%,rgba(2,8,18,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,0.04)_0%,rgba(2,8,18,0.24)_52%,rgba(2,8,18,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-9">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-cyan-300">
            PB
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-3 transition hover:text-cyan-300 ${
                  item.href === "/"
                    ? "border-b border-cyan-300 text-cyan-300"
                    : "border-b border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-neutral-100 transition hover:border-cyan-300/70 hover:text-cyan-300"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5h16v11H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
              </svg>
              Contact
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1fr_420px] lg:py-10">
          <div className="max-w-3xl text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.48em] text-cyan-300">
              Welcome to my portfolio
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.35)] sm:text-6xl lg:text-7xl">
              Pablo Bueno
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-100 sm:text-2xl">
              Developing end-to-end{" "}
              <span className="font-semibold text-cyan-300">AI systems</span>{" "}
              for drone-based{" "}
              <span className="font-semibold text-cyan-300">
                infrastructure inspection.
              </span>
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-3 text-xs font-semibold uppercase text-neutral-400 md:justify-start">
              <span className="text-cyan-300">|</span>
              <span>AI Engineer in training</span>
              <span className="text-neutral-600">|</span>
              <span>Computer Vision</span>
              <span className="text-neutral-600">|</span>
              <span>Backend Systems</span>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Link
                href="/work"
                className="flex items-center justify-center gap-3 rounded-lg bg-cyan-300 px-8 py-4 text-sm font-semibold text-[#021016] shadow-[0_0_36px_rgba(34,211,238,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-200"
              >
                View my work
                <ArrowIcon />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center gap-3 rounded-lg border border-cyan-300/45 bg-[#061827]/70 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/10"
              >
                About me
                <UserIcon />
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[340px] lg:flex lg:items-center lg:justify-end">
            <div className="relative h-[300px] w-[360px]">
              <div className="absolute right-0 top-0 h-20 w-32 border border-cyan-300/40 bg-[#03111d]/45 p-3 text-xs text-cyan-200 backdrop-blur-md">
                <div className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-cyan-300" />
                <div className="absolute -right-2 -bottom-2 h-4 w-4 border-b border-r border-cyan-300" />
                <p className="text-neutral-400">DETECTION</p>
                <p className="mt-1 font-semibold text-cyan-300">TOWER</p>
                <p>0.96</p>
              </div>
              <div className="absolute bottom-0 right-0 h-24 w-52 rounded-lg border border-cyan-300/20 bg-[#03111d]/42 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase text-neutral-400">
                  Confidence
                </p>
                <svg
                  aria-hidden="true"
                  className="mt-3 h-10 w-full text-cyan-300"
                  fill="none"
                  viewBox="0 0 180 48"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M0 34 18 28 36 32 54 20 72 26 90 12 108 22 126 7 144 18 162 10 180 14" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 pb-7 md:grid-cols-3">
          {sections.map((section) => {
            const styles = cardStyles[section.accent as keyof typeof cardStyles];

            return (
              <Link
                key={section.href}
                href={section.href}
                className={`group relative rounded-lg border bg-[#04101d]/82 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-[#061525]/88 sm:p-10 ${styles.border} ${styles.glow}`}
              >
                {section.featured ? (
                  <span className="absolute -left-px top-5 rounded-r-md bg-cyan-300 px-4 py-1.5 text-xs font-bold uppercase text-[#021016]">
                    ☆ Featured
                  </span>
                ) : null}

                <div
                  className={`mx-auto mt-7 flex h-24 w-24 items-center justify-center rounded-full border shadow-[0_0_34px_rgba(34,211,238,0.12)] transition duration-300 group-hover:scale-105 ${styles.icon}`}
                >
                  <CardIcon accent={section.accent} />
                </div>

                <h2 className="mt-9 text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]">
                  {section.title}
                </h2>
                <p className="mx-auto mt-6 max-w-72 text-base font-medium leading-7 text-neutral-200">
                  {section.description}
                </p>
                <p
                  className={`mt-9 flex items-center justify-center gap-3 text-base font-bold ${styles.text}`}
                >
                  Explore section
                  <ArrowIcon />
                </p>
              </Link>
            );
          })}
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/7 py-5 text-sm text-neutral-400 md:flex-row">
          <div className="flex items-center gap-5">
            <span className="font-semibold">in</span>
            <span className="font-semibold">gh</span>
            <span aria-hidden="true">✉</span>
          </div>
          <p className="border-x border-cyan-300/50 px-8 text-center">
            Building technology that solves{" "}
            <span className="text-cyan-300">real-world problems.</span>
          </p>
          <p>© 2025 Pablo Bueno</p>
        </footer>
      </div>
    </main>
  );
}
