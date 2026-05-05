import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020812] px-6 py-16 text-white">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-300">
          Back home
        </Link>
        <h1 className="mt-10 text-5xl font-bold">About Me</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          AI Engineer in training focused on Computer Vision, Backend Systems,
          and applied machine learning for drone-based infrastructure
          inspection.
        </p>
      </section>
    </main>
  );
}
