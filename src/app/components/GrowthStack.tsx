"use client";

import React, { useState } from "react";
import { Code, Trophy, Brain, Zap, ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageGradient } from "@/components/ascii/ImageGradient";
import { RewardFlow } from "@/components/card-visuals/RewardFlow";
import { RankOrbit } from "@/components/card-visuals/RankOrbit";
import { NeuralPulse } from "@/components/card-visuals/NeuralPulse";
import { CircuitPattern } from "@/components/card-visuals/CircuitPattern";

// =============================================================================
// Growth Stack Section
// =============================================================================
export default function GrowthStack() {
  return (
    <section id="growth-stack" className="w-full bg-white border-t border-black/10">
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-wider text-black/40 border border-black/10 px-2 py-1 rounded-[3px]">
              <span className="w-1 h-1 bg-blue rounded-full" />
              Platform Features
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-[1.1] tracking-tight">
              The Growth
              <br />
              <span className="text-black/40">Engine</span>
            </h2>
            <p className="text-base md:text-lg text-black/60 mt-4 max-w-xl">
              Set precise conditions for who gets rewarded and why. Target the exact behaviors that drive protocol growth—not vanity metrics.
            </p>
          </div>
          <Button variant="outline" href="https://docs.torque.so" className="w-fit">
            Read the Docs
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {/* Large Card - Programmable Rewards */}
          <div className="md:col-span-2 lg:col-span-2">
            <FeatureCard
              icon={Code}
              title="Programmable Rewards"
              description='Set conditions like "only reward users who hold >$1K and traded 3+ times this week." No more paying for bots or one-time farmers.'
              visual={<RewardFlow color="#0000FF" />}
              filename="rewards.config"
              features={[
                { icon: Zap, label: "Conditional Logic" },
                { dot: true, label: "Real-time" },
              ]}
              large
              featured
            />
          </div>

          {/* Small Card - Leaderboards */}
          <div>
            <FeatureCard
              icon={Trophy}
              title="Leaderboards"
              description="Real-time rankings turn passive holders into competing power users."
              visual={<RankOrbit color="#0000FF" competitorCount={6} />}
              filename="leaderboard.tsx"
              metric="2.1x volume increase"
            />
          </div>

          {/* Small Card - AI Insights */}
          <div>
            <FeatureCard
              icon={Brain}
              title="AI Insights"
              description='Ask "Which wallets are about to churn?" and get actionable recommendations.'
              visual={<NeuralPulse color="#0000FF" nodeCount={10} />}
              filename="intelligence.ai"
              metric="Predictive analytics"
            />
          </div>

          {/* Wide Card - API / SDK */}
          <div className="md:col-span-2 lg:col-span-2">
            <APICard />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// Feature Card Component
// =============================================================================
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  visual?: React.ReactElement;
  filename: string;
  features?: Array<{ icon?: React.ComponentType<{ className?: string }>; dot?: boolean; label: string }>;
  metric?: string;
  large?: boolean;
  featured?: boolean;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  visual,
  filename,
  features,
  metric,
  large,
  featured,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative rounded-[3px] group h-full border transition-all overflow-hidden ${large ? "min-h-[320px]" : "min-h-[280px]"} ${featured ? "border-blue/20 hover:border-blue/40 shadow-[0_0_40px_-10px_rgba(0,122,255,0.15)]" : "border-black/5 hover:border-black/15"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {/* Procedural visual background - always partially visible */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-500">{visual && React.cloneElement(visual, { paused: !isHovered })}</div>

      {/* White gradient overlay */}
      <ImageGradient className={featured ? "bg-gradient-to-t from-white via-white/85 to-white/50" : "bg-gradient-to-t from-white via-white/90 to-white/60"} />
      <ImageGradient className="bg-gradient-to-br from-white/40 via-transparent to-transparent" />

      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
        <span className="font-mono text-[9px] text-black/30">{filename}</span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col p-4 pt-8">
        <div className="mt-auto">
          <div className={`w-8 h-8 rounded-[3px] backdrop-blur-sm flex items-center justify-center mb-3 transition-colors ${featured ? "bg-blue/15 group-hover:bg-blue/25" : "bg-white/80 group-hover:bg-blue/10"}`}>
            <Icon className={`w-4 h-4 transition-colors ${featured ? "text-blue" : "text-black group-hover:text-blue"}`} />
          </div>

          <h3 className="font-display text-base md:text-lg font-medium mb-1 text-black group-hover:text-blue transition-colors">
            {title}
          </h3>

          <p className="text-black/60 text-xs leading-relaxed mb-3">
            {description}
          </p>

          {features && (
            <div className="pt-3 border-t border-black/10 flex items-center gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1.5 text-[10px] text-black/50">
                  {feature.icon && <feature.icon className="w-3 h-3" />}
                  {feature.dot && <span className="w-1 h-1 bg-blue rounded-full" />}
                  <span className="font-mono">{feature.label}</span>
                </div>
              ))}
            </div>
          )}

          {metric && (
            <div className="pt-3 border-t border-black/10">
              <span className="inline-flex items-center text-xs font-medium text-blue">
                {metric}
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// API Card Component
// =============================================================================
function APICard() {
  return (
    <div className="relative rounded-[3px] group h-full border border-black/5 hover:border-black/15 transition-colors overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Code preview area */}
        <div className="relative flex-1 bg-gray-950 overflow-hidden border-b md:border-b-0 md:border-r border-black/10">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="font-mono text-[9px] text-white/30">api.sdk</span>
          </div>
          <div className="px-3 pb-3 font-mono text-[9px] leading-relaxed select-none pointer-events-none">
            <div className="text-white/30">{`// Create an incentive campaign`}</div>
            <div><span className="text-blue-400">const</span> <span className="text-white/80">campaign</span> = <span className="text-blue-400">await</span> <span className="text-white/80">torque</span>.<span className="text-yellow-300">createCampaign</span>({`{`}</div>
            <div className="pl-3"><span className="text-white/50">name:</span> <span className="text-green-400">&quot;Volume Raffle&quot;</span>,</div>
            <div className="pl-3"><span className="text-white/50">trigger:</span> <span className="text-green-400">&quot;trade &gt; $100&quot;</span>,</div>
            <div className="pl-3"><span className="text-white/50">reward:</span> {`{`} <span className="text-white/50">type:</span> <span className="text-green-400">&quot;raffle&quot;</span>, <span className="text-white/50">pool:</span> <span className="text-purple-300">10_000</span> {`}`},</div>
            <div className="pl-3"><span className="text-white/50">filter:</span> {`{`} <span className="text-white/50">minHold:</span> <span className="text-purple-300">1000</span>, <span className="text-white/50">minTrades:</span> <span className="text-purple-300">3</span> {`}`},</div>
            <div>{`}`});</div>
            <div className="mt-1 text-white/30">{`// campaign.id → "torq_8f3k..."`}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-center md:w-[280px]">
          <div className="w-8 h-8 rounded-[3px] bg-white border border-black/5 flex items-center justify-center mb-3 group-hover:bg-blue/10 group-hover:border-blue/20 transition-colors">
            <Terminal className="w-4 h-4 text-black group-hover:text-blue transition-colors" />
          </div>

          <h3 className="font-display text-base md:text-lg font-medium mb-1 text-black group-hover:text-blue transition-colors">
            Developer-first Infrastructure
          </h3>
          <p className="text-black/60 text-xs leading-relaxed mb-3">
            Full API access, webhooks, and SDK for seamless integration. Ship incentive logic in minutes.
          </p>

          <div className="pt-3 border-t border-black/10 flex flex-wrap items-center gap-1.5">
            {["REST API", "Webhooks", "TypeScript SDK"].map((item) => (
              <span
                key={item}
                className="px-2 py-1 bg-gray-50 rounded-[2px] font-mono text-[10px] text-black/60 border border-black/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
