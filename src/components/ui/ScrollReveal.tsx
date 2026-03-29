"use client";

import { motion, type Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Exported child variants
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Use these on direct `motion.*` children of a <ScrollReveal stagger> container.
 * The parent propagates the "visible" key via variant inheritance, and
 * staggerChildren in the parent's transition staggers the delay automatically.
 *
 * Example:
 *   <ScrollReveal stagger className="grid grid-cols-3 gap-4">
 *     {items.map(item => (
 *       <motion.div key={item.id} variants={staggerChildVariants}>
 *         ...
 *       </motion.div>
 *     ))}
 *   </ScrollReveal>
 */
export const staggerChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Direction = "up" | "left" | "right" | "none";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay (seconds) before the element begins animating. */
  delay?: number;
  /** Duration of the reveal animation (seconds). Default: 0.6 */
  duration?: number;
  /**
   * Direction the element slides in from.
   * - "up"    — fades up from y+30  (default, matches spec)
   * - "left"  — slides in from x-50 (content columns)
   * - "right" — slides in from x+50 (image columns)
   * - "none"  — fade only, no transform
   */
  direction?: Direction;
  /**
   * Stagger container mode.
   * The element itself fades in, and staggerChildren is added to the
   * transition so direct motion.* children animate in sequence.
   * Children must carry `variants={staggerChildVariants}` (exported above).
   */
  stagger?: boolean;
  /** Time between staggered child animations (seconds). Default: 0.1 */
  staggerDelay?: number;
  /** Trigger only once as the element enters the viewport. Default: true */
  once?: boolean;
  /**
   * IntersectionObserver rootMargin passed to Framer Motion's viewport option.
   * A negative value means the trigger fires before the element is fully visible.
   * Default: "-100px"
   */
  margin?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Variant builder
// ─────────────────────────────────────────────────────────────────────────────

function buildVariants(
  direction: Direction,
  duration: number,
  delay: number,
  stagger: boolean,
  staggerDelay: number,
): Variants {
  // ── Stagger container ──────────────────────────────────────────────────────
  // The container itself fades in quickly; the staggerChildren transition key
  // cascades the "visible" state to children with their own variant definitions.
  if (stagger) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delayChildren: delay,
          staggerChildren: staggerDelay,
        },
      },
    };
  }

  // ── Single-element directional reveal ─────────────────────────────────────
  const offset = 50;
  const hiddenTransform: { x?: number; y?: number } =
    direction === "left"  ? { x: -offset, y: 0 } :
    direction === "right" ? { x:  offset, y: 0 } :
    direction === "up"    ? { x: 0, y: 30 }      :
    /* "none" */            { x: 0, y: 0 };

  return {
    hidden: { opacity: 0, ...hiddenTransform },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: "easeOut", delay },
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  stagger = false,
  staggerDelay = 0.1,
  once = true,
  margin = "-100px",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={buildVariants(direction, duration, delay, stagger, staggerDelay)}
    >
      {children}
    </motion.div>
  );
}
