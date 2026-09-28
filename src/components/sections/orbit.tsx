"use client"

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/../content/site";
import { Icon } from "@/lib/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function OrbitStage() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(!!site.person.photo.src);

  const springConfig = { stiffness: 120, damping: 20 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 22);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 22);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, reducedMotion]);

  const ring1Nodes = site.hero.orbit.filter((n) => n.ring === 1);
  const ring2Nodes = site.hero.orbit.filter((n) => n.ring === 2);

  const getNodeStyle = (position: string) => {
    switch (position) {
      case "top": return { top: 0, left: "50%" };
      case "bottom": return { top: "100%", left: "50%" };
      case "left": return { top: "50%", left: 0 };
      case "right": return { top: "50%", left: "100%" };
      default: return {};
    }
  };

  const getTransition = (delay: number) => {
    if (reducedMotion) return { duration: 0, delay: 0 };
    return {
      duration: 1.2,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    };
  };

  const spinDurations = ["8s", "10s", "12s", "9s"];

  return (
    <motion.div
      className="relative w-[min(100%,460px)] aspect-square mx-auto"
      style={{ x: parallaxX, y: parallaxY }}
    >
      {/* Ring 1 */}
      <motion.div
        initial={{ scale: reducedMotion ? 1 : 0.7, opacity: reducedMotion ? 1 : 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={getTransition(0.3)}
        className="absolute inset-0 rounded-full border border-border animate-orbit-60"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {ring1Nodes.map((node, idx) => (
          <div
            key={idx}
            className="absolute w-[42px] h-[42px] -m-[21px] grid place-items-center"
            style={getNodeStyle(node.position)}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ scale: reducedMotion ? 1 : 0 }}
                  animate={{ scale: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 1 + idx * 0.1, type: "spring", bounce: 0.4 }}
                  className="w-full h-full rounded-full bg-secondary border border-border grid place-items-center text-accent transition-colors duration-300 hover:border-accent will-change-transform"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                >
                  <Icon name={node.icon as any} className="w-[18px] h-[18px]" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{node.label}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        initial={{ scale: reducedMotion ? 1 : 0.7, opacity: reducedMotion ? 1 : 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={getTransition(0.42)}
        className="absolute inset-[10%] rounded-full border border-dashed border-border animate-orbit-44-rev"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {ring2Nodes.map((node, idx) => (
          <div
            key={idx}
            className="absolute w-[42px] h-[42px] -m-[21px] grid place-items-center"
            style={getNodeStyle(node.position)}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ scale: reducedMotion ? 1 : 0 }}
                  animate={{ scale: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 1.2 + idx * 0.1, type: "spring", bounce: 0.4 }}
                  className="w-full h-full rounded-full bg-secondary border border-border grid place-items-center text-accent transition-colors duration-300 hover:border-accent will-change-transform"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                >
                  <Icon name={node.icon as any} className="w-[18px] h-[18px]" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{node.label}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ scale: reducedMotion ? 1 : 0.7, opacity: reducedMotion ? 1 : 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={getTransition(0.54)}
        className="absolute inset-[19%] rounded-full border border-border"
      />

      <motion.div
        initial={{ scale: reducedMotion ? 1 : 0.7, opacity: reducedMotion ? 1 : 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={getTransition(0.66)}
        className="absolute inset-[26%] rounded-full border border-border grid place-items-center text-center overflow-hidden"
        style={{
          background: "linear-gradient(145deg, var(--color-card), color-mix(in srgb, var(--color-primary) 18%, var(--color-card)))",
          boxShadow: "0 30px 80px -30px var(--color-primary)",
        }}
      >
        {hasPhoto ? (
          <Image
            src={site.person.photo.src}
            alt={site.person.photo.alt}
            fill
            sizes="(min-width: 1024px) 280px, 60vw"
            className="object-cover rounded-full"
            style={{ objectPosition: site.person.photo.objectPosition }}
            priority
            onError={() => setHasPhoto(false)}
          />
        ) : (
          <>
            <b className="font-serif font-normal text-[clamp(2.4rem,7vw,3.6rem)]">{site.person.monogram}</b>
            <small className="absolute bottom-[14%] font-mono text-[0.58rem] text-muted-foreground tracking-[0.1em] uppercase">[ ADD PHOTO ]</small>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
