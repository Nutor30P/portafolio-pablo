import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-100">
      <section className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white">
          ← Back to home
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Work Projects
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            Professional Technical Case Studies
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
            Documentation for applied projects, presented in an anonymized way
            and focused on technical learnings, architecture, models, data, and
            results.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/work/dronevision"
            className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-500"
          >
            <p className="text-sm text-neutral-500">
              Computer Vision · Drones · YOLOX · FastAPI · PostgreSQL
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              DroneVision Inspection Platform
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-400">
              Computer vision system designed to support electrical
              infrastructure inspections using drone-captured images, object
              detection models, an inference backend, and technical reports.
            </p>

            <p className="mt-6 text-sm text-neutral-500">
              Read case study →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
