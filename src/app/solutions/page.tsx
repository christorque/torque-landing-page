"use client";

import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntegrationRequestModal from "../components/IntegrationRequestModal";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CircleDot,
  TrendingUp,
  Rocket,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// =============================================================================
// Types
// =============================================================================
interface Solution {
  id: string;
  sector: string;
  icon: React.ComponentType<{ className?: string }>;
  filename: string;
  image: string;
  insight: {
    title: string;
    stat: string;
  };
  problem: {
    title: string;
    points: string[];
  };
  fix: {
    title: string;
    description: string;
    mechanics: string[];
    result: string;
  };
}


// =============================================================================
// Data
// =============================================================================
const solutions: Solution[] = [
  {
    id: "stablecoins",
    sector: "Stablecoins",
    icon: CircleDot,
    filename: "stablecoin.strategy",
    image: "/generated/image/light-mono/floating-mass-01.jpg",
    insight: {
      title: "Distribution Nodes",
      stat: "The Velocity Gap ($175M+ Cap / 0 Velocity).",
    },
    problem: {
      title: "The Velocity Gap",
      points: [
        "Stablecoins sit idle in wallets instead of circulating",
        "High market cap creates false sense of adoption",
        "No incentive for holders to actually use the asset",
      ],
    },
    fix: {
      title: "Turn passive holders into active transaction agents.",
      description:
        "Distribution Nodes: use referral rebates to turn passive holders into active transaction agents.",
      mechanics: ["Referral Rebate (0.1% of volume)", "Looping Bonus (Leverage > 3x)"],
      result: "+40% Velocity Increase",
    },
  },
  {
    id: "trading",
    sector: "Trading Platforms",
    icon: TrendingUp,
    filename: "trading.strategy",
    image: "/generated/image/light-mono/network-nodes-light.jpg",
    insight: {
      title: "Habit Formation Architecture",
      stat: "The 'One-and-Done' Trader (High Churn).",
    },
    problem: {
      title: "The One-and-Done Trader",
      points: [
        "High volume metrics hide mercenary trading behavior",
        "Users trade once for rewards, then disappear",
        "Volume quality is ignored in favor of raw numbers",
      ],
    },
    fix: {
      title: "Incentivize 'Streaks' over raw volume.",
      description:
        "Habit Formation Architecture: we shifted incentives from raw volume to 'Streaks' to build habitual protocol usage.",
      mechanics: ["Volume-Based Raffles", "Streak Bonuses"],
      result: "+146% Net Retention",
    },
  },
  {
    id: "launchpads",
    sector: "Launchpads",
    icon: Rocket,
    filename: "launchpad.strategy",
    image: "/generated/image/light-mono/data-particles.jpg",
    insight: {
      title: "Post-Launch Retention",
      stat: "The Launch-and-Leave Problem (95% Day-7 Drop-off).",
    },
    problem: {
      title: "The Launch-and-Leave Problem",
      points: [
        "Token launches drive massive day-1 activity that evaporates by day 7",
        "Early participants flip tokens immediately after launch",
        "No mechanism to convert launch hype into sustained protocol usage",
      ],
    },
    fix: {
      title: "Reward post-launch engagement with tiered loyalty mechanics.",
      description:
        "Post-Launch Retention: tiered loyalty mechanics that reward sustained engagement past day one, converting launch participants into long-term users.",
      mechanics: ["Hold-to-Earn Tiers (7d / 30d / 90d)", "Post-Launch Activity Multipliers"],
      result: "3.2x Day-30 Retention",
    },
  },
];


// =============================================================================
// Solutions Page
// =============================================================================
export default function SolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24 md:pt-32">
        {/* Page Header */}
        <header className="w-full px-6 md:px-12 lg:px-20 pb-12 md:pb-16 border-b border-black/10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-wider text-black/40">
              <span className="w-1 h-1 bg-blue rounded-full" />
              Solutions
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[1.1] tracking-tight mb-4">
              Engineering Protocol Equilibrium
            </h1>
            <p className="text-base md:text-lg text-black/60 max-w-2xl mb-6">
              Every sector has a systemic flaw. Torque provides the diagnostics to find the leak and the primitives to fix it.
            </p>

            {/* Quick Nav */}
            <div className="flex flex-wrap items-center gap-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <a
                    key={solution.id}
                    href={`#${solution.id}`}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] border border-black/10 hover:border-black/20 transition-colors font-mono text-[10px] uppercase tracking-wider text-black/50 hover:text-black"
                  >
                    <Icon className="w-3 h-3 group-hover:text-blue transition-colors" />
                    {solution.sector}
                  </a>
                );
              })}
            </div>
          </div>
        </header>

        {/* Solutions Section */}
        <SolutionsGrid />

        {/* CTA Section */}
        <SolutionsCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>

      {/* Integration Request Modal */}
      <IntegrationRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </>
  );
}

// =============================================================================
// Solutions Grid
// =============================================================================
function SolutionsGrid() {
  return (
    <section className="w-full bg-white border-t border-black/10">
      <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-32">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-wider text-black/60 border border-black/10 px-3 py-1.5 rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
              <span>Core Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-black mb-6 max-w-4xl leading-[1.1] tracking-tight">
              Battle-tested mechanical
              <br />
              <span className="text-black/40">modules</span>
            </h2>

            <p className="text-lg md:text-xl text-black/60 max-w-2xl">
              Each solution comes with diagnosis, mechanical logic, and proven results.
            </p>
          </div>
          <Button variant="outline" href="/primitives" className="w-fit">
            Explore Primitives
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Solutions */}
        <div className="space-y-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// Solution Card
// =============================================================================
interface SolutionCardProps {
  solution: Solution;
}

function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={solution.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-[3px] overflow-hidden border border-black/5 hover:border-black/15 transition-colors bg-gradient-to-br from-blue/[0.03] via-white to-blue/[0.02]"
    >

      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-4 py-2 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
        <span className="font-mono text-[9px] text-black/30">{solution.filename}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 pt-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-[3px] bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-black mb-1">
              {solution.sector}
            </h3>
            <p className="text-sm font-mono uppercase tracking-wider text-black/50">
              {solution.insight.title}
            </p>
          </div>
        </div>

        {/* Insight */}
        <div className="mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-[3px] border-l-2 border-blue">
          <span className="text-[10px] font-mono uppercase tracking-wider text-black/40 block mb-1">
            diagnosis
          </span>
          <p className="text-base text-black">{solution.insight.stat}</p>
        </div>

        {/* Problem & Fix Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-5 bg-white/60 backdrop-blur-sm rounded-[3px] border border-black/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-3">
              The Problem
            </h4>
            <h5 className="text-base font-display font-medium text-black mb-3">
              {solution.problem.title}
            </h5>
            <ul className="space-y-2">
              {solution.problem.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60">
                  <span className="w-1 h-1 bg-black/30 rounded-full mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Fix */}
          <div className="p-5 bg-white/60 backdrop-blur-sm rounded-[3px] border border-blue/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue mb-3">
              The Torque Fix
            </h4>
            <h5 className="text-base font-display font-medium text-black mb-2">
              {solution.fix.title}
            </h5>
            <p className="text-sm text-black/60 mb-4">{solution.fix.description}</p>

            {/* Mechanics */}
            <div className="pt-4 border-t border-black/10">
              <span className="text-[10px] font-mono uppercase tracking-wider text-black/40 block mb-2">
                Mechanics
              </span>
              <ul className="space-y-1.5 mb-4">
                {solution.fix.mechanics.map((mechanic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black">
                    <span className="text-blue mt-0.5">+</span>
                    {mechanic}
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="pt-3 border-t border-blue/20">
                <span className="inline-flex items-center px-3 py-1.5 bg-blue/10 text-blue text-sm font-medium rounded-[3px]">
                  {solution.fix.result}
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
          <span className="text-sm text-black/40">
            See how we implemented this for {solution.sector.toLowerCase()} protocols
          </span>
          <Button variant="outline" size="sm" href="/playbooks">
            View Playbook
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Solutions CTA Section
// =============================================================================
interface SolutionsCTAProps {
  onOpenModal: () => void;
}

function SolutionsCTA({ onOpenModal }: SolutionsCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-white border-t border-black/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-xl"
      >
        <div className="inline-flex items-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-wider text-black/40">
          <Rocket className="w-3 h-3" />
          Deploy Now
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-black leading-[1.1] tracking-tight mb-4">
          Ready to engineer
          <br />
          <span className="text-black/40">protocol equilibrium?</span>
        </h2>
        <p className="text-base text-black/60 mb-6">
          Torque exists to replace &ldquo;vibes-based&rdquo; marketing with deterministic, programmable ROI. No waste. Just growth.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="accent" onClick={onOpenModal}>
            Get Started
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" href="/solutions">
            View Solutions
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

