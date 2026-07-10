import { YouTubeEmbed } from "@next/third-parties/google";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─────────────────────────────────────────────────────────────────────────────
// XrfDemoVideo
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Click-to-play YouTube facade placed high on the homepage (right after the
 * hero) so visitors immediately see the XRF analyzers in operation.
 *
 * Uses the official @next/third-parties YouTubeEmbed, which renders a
 * lightweight thumbnail (paulirish/lite-youtube-embed) and only loads the full
 * iframe player on click. That web component locks its own 16:9 ratio via a
 * padding-bottom trick — so there is no layout shift — and self-caps at 720px,
 * so it never goes full-bleed. We keep the same max-w-7xl container every other
 * section uses and center the embed with `[&_lite-youtube]:mx-auto`.
 *
 * Dark section (mirrors the Services section token) so the black player blends
 * in and the heading is white for contrast.
 */
export default function XrfDemoVideo() {
  return (
    <section
      id="xrf-demo"
      aria-label="XRF analyzers in operation"
      className="bg-[hsl(220_25%_10%)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header — same composition as the other section headers ──────── */}
        <ScrollReveal className="mb-12 text-center">
          <p className="micro-label mb-3">In Action</p>
          <div className="accent-line w-12 mx-auto mt-3 mb-6" />
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            See Our XRF Analyzers in Operation
          </h2>
        </ScrollReveal>

        {/* ── Video facade — 16:9 locked, self-caps at 720px, centered ────── */}
        <div className="[&_lite-youtube]:mx-auto">
          <YouTubeEmbed
            videoid="xu5C3WCcZaM"
            params="rel=0"
            playlabel="Play: XRF analyzers on the conveyor line"
          />
        </div>
      </div>
    </section>
  );
}
