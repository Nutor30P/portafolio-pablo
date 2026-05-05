import Link from "next/link";

export default function PersonalProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020812] px-6 py-16 text-white">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-300">
          Back home
        </Link>
        <h1 className="mt-10 text-5xl font-bold">Personal Projects</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          Labs, learning projects, and independent experiments will be listed
          here.
        </p>
      </section>
    </main>
  );
}
