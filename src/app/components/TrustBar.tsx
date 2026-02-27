"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const logos = [
  { name: "Solana", src: "/logos/solana.svg" },
  { name: "Raydium", src: "/logos/raydium.svg" },
  { name: "Metaplex", src: "/logos/metaplex.svg" },
  { name: "Darklake", src: "/logos/darklake.svg" },
  { name: "Portals", src: "/logos/portals.svg" },
  { name: "Tensor", src: "/logos/tensor.svg" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-6 overflow-hidden bg-transparent">
      <div className="w-full" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] uppercase tracking-wider text-black/30 mb-4"
        >
          Trusted by leading protocols
        </motion.p>

        {/* Slow scrolling marquee */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-10 animate-marquee"
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={32}
                  className="h-6 md:h-7 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
