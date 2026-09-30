"use client";

import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'motion/react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden">
        <m.div
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8 relative"
        >
        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <Image 
          src="https://media.tenor.com/v17zYVW6e0AAAAAe/minions-confuse.gif" 
          alt="Confused Minion" 
          width={250} 
          height={250} 
          className="rounded-full shadow-2xl relative z-10 border-4 border-accent/20"
          unoptimized
        />
      </m.div>

      <m.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-serif text-[clamp(4rem,15vw,10rem)] tracking-tight leading-none mb-2 text-accent"
      >
        404
      </m.h2>

      <m.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium mb-4"
      >
        Oops! Page not found.
      </m.h3>

      <m.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-muted-foreground mb-10 max-w-[500px] text-lg"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </m.p>

      <m.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" className="btn-primary shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
          Take Me Home
        </Link>
      </m.div>
    </div>
    </LazyMotion>
  );
}
