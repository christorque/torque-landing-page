"use client";

import React from "react";

// =============================================================================
// Shared UI primitives for mockups
// =============================================================================

function MockText({ width, opacity = "bg-black/10" }: { width: string; opacity?: string }) {
  return <div className={`h-1.5 rounded-full ${opacity}`} style={{ width }} />;
}

function MockStatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-[2px] border border-black/5 px-2 py-1.5 flex-1 min-w-0">
      <div className="font-mono text-[8px] text-black/30 uppercase tracking-wider truncate">{label}</div>
      <div className="font-mono text-[10px] font-semibold text-black/70 truncate">{value}</div>
    </div>
  );
}

// =============================================================================
// 1. Incentives Dashboard Mockup
//    Based on: Incentives view — epoch table with budget bars
//    Used for: Programmable Rewards card (GrowthStack)
// =============================================================================
export function IncentivesMockup() {
  const epochs = [
    { epoch: 8, status: "Live", reach: "129/200", budget: 78, color: "bg-blue" },
    { epoch: 7, status: "Closed", reach: "88/200", budget: 56, color: "bg-blue/70" },
    { epoch: 6, status: "Closed", reach: "99/200", budget: 57, color: "bg-blue/60" },
    { epoch: 5, status: "Closed", reach: "113/200", budget: 78, color: "bg-blue/50" },
    { epoch: 4, status: "Closed", reach: "125/200", budget: 82, color: "bg-blue/40" },
  ];

  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Stats row */}
      <div className="flex gap-1.5 mb-2.5">
        <MockStatCard value="72.3K" label="Participants" />
        <MockStatCard value="$645K" label="Rewards" />
        <MockStatCard value="77%" label="Utilization" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-2 text-[6px] font-mono">
        <span className="text-blue border-b border-blue pb-0.5">All</span>
        <span className="text-black/25">Live</span>
        <span className="text-black/25">Ended</span>
        <span className="text-black/25">Drafts</span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[24px_40px_1fr_40px_60px] gap-1 mb-1 text-[5px] font-mono text-black/30 uppercase tracking-wider">
        <span>Epoch</span>
        <span>Status</span>
        <span>Name</span>
        <span>Reach</span>
        <span>Budget</span>
      </div>

      {/* Epoch rows */}
      <div className="flex flex-col gap-1">
        {epochs.map((e) => (
          <div key={e.epoch} className="grid grid-cols-[24px_40px_1fr_40px_60px] gap-1 items-center py-0.5 border-b border-black/[0.03]">
            <span className="font-mono text-[7px] text-black/40">{e.epoch}</span>
            <span className={`text-[5px] font-mono px-1 py-0.5 rounded-sm w-fit ${e.status === "Live" ? "bg-blue/10 text-blue" : "bg-black/5 text-black/30"}`}>
              {e.status}
            </span>
            <div className="flex items-center gap-1 min-w-0">
              <MockText width="80%" opacity="bg-black/8" />
            </div>
            <span className="font-mono text-[6px] text-black/40">{e.reach}</span>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${e.color}`} style={{ width: `${e.budget}%` }} />
              </div>
              <span className="font-mono text-[5px] text-black/30">{e.budget}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// 2. Users Table Mockup
//    Based on: Users table view — wallet list with rewards & streaks
//    Used for: Leaderboards card (GrowthStack)
// =============================================================================
export function UsersTableMockup() {
  const wallets = [
    { addr: "CyaE...a54o", reward: "$359.7", lifetime: "$52.8K", volume: "$977.2K", streak: "3d" },
    { addr: "Time...p4VR", reward: "$315.8", lifetime: "$30.4K", volume: "$205.0K", streak: "1d" },
    { addr: "BA36...CTPi", reward: "$164.9", lifetime: "$25.2K", volume: "$1.2M", streak: "3d" },
    { addr: "G6fU...d1ZC", reward: "$2,250", lifetime: "$20.8K", volume: "$254.2K", streak: "1d" },
    { addr: "GDeu...Y4Cx", reward: "$2,748", lifetime: "$16.8K", volume: "$147.2K", streak: "1d" },
    { addr: "pGrD...FHci", reward: "$99.9", lifetime: "$15.2K", volume: "$432.7K", streak: "1d" },
    { addr: "Gtg4...G5C2", reward: "$4,996", lifetime: "$15.0K", volume: "$159.3K", streak: "1d" },
  ];

  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Stats row */}
      <div className="flex gap-1.5 mb-2.5">
        <MockStatCard value="71,260" label="Participants" />
        <MockStatCard value="593" label="Rewarded" />
        <MockStatCard value="77%" label="Budget Util." />
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_44px_44px_48px_20px] gap-1 mb-1 text-[5px] font-mono text-black/30 uppercase tracking-wider">
        <span>Wallet</span>
        <span>Reward</span>
        <span>Lifetime</span>
        <span>Volume</span>
        <span>Str.</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-0.5">
        {wallets.map((w, i) => (
          <div key={i} className={`grid grid-cols-[1fr_44px_44px_48px_20px] gap-1 items-center py-[3px] border-b border-black/[0.03] ${i === 0 ? "bg-blue/[0.03]" : ""}`}>
            <span className="font-mono text-[6.5px] text-blue/70 truncate">{w.addr}</span>
            <span className="font-mono text-[6px] text-black/50">{w.reward}</span>
            <span className="font-mono text-[6px] text-black/50">{w.lifetime}</span>
            <span className="font-mono text-[6px] text-black/50">{w.volume}</span>
            <span className="font-mono text-[6px] text-black/40">{w.streak}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// 3. Reporting Charts Mockup
//    Based on: Reporting — Volume/Trades/Users epoch bar charts
//    Used for: AI Insights card (GrowthStack), Stablecoins solution
// =============================================================================
export function ReportingChartsMockup() {
  // Simplified epoch bar chart data
  const volumeBars = [3, 8, 12, 18, 15, 9, 6, 14, 11, 7, 5, 10, 16, 13, 8, 6, 4, 9, 12, 7];
  const maxBar = Math.max(...volumeBars);

  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Stats row */}
      <div className="flex gap-1.5 mb-2">
        <MockStatCard value="$204.3M" label="Total Volume" />
        <MockStatCard value="2.7M" label="Total Trades" />
        <MockStatCard value="248.3K" label="Total Users" />
      </div>

      {/* Volume chart */}
      <div className="flex-1 flex flex-col">
        <div className="text-[6px] font-mono text-blue/60 uppercase tracking-wider mb-1">Volume ($M)</div>
        <div className="flex-1 flex items-end gap-[2px] px-1">
          {volumeBars.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[1px] transition-all"
              style={{
                height: `${(v / maxBar) * 100}%`,
                backgroundColor: i < 4 ? "rgba(156,163,175,0.3)" : `rgba(0,0,255,${0.2 + (i % 5) * 0.15})`,
              }}
            />
          ))}
        </div>
        {/* X-axis labels */}
        <div className="flex justify-between mt-1 text-[5px] font-mono text-black/20 px-1">
          <span>Jan 14</span>
          <span>Jan 26</span>
          <span>Feb 3</span>
          <span>Feb 15</span>
        </div>

        {/* Legend */}
        <div className="flex gap-2 mt-1.5 text-[5px] font-mono text-black/30">
          <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 rounded-full bg-black/15" />Pre</div>
          <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 rounded-full bg-blue/40" />E1</div>
          <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 rounded-full bg-blue/60" />E2</div>
          <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 rounded-full bg-blue/80" />E3</div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 4. Reporting Overview Mockup
//    Based on: Reporting overview — donut chart + volume concentration
//    Used for: Lending solution card
// =============================================================================
export function ReportingOverviewMockup() {
  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Stats row */}
      <div className="flex gap-1.5 mb-2.5">
        <MockStatCard value="$204.3M" label="Volume" />
        <MockStatCard value="2.7M" label="Trades" />
        <MockStatCard value="248.3K" label="Users" />
      </div>

      {/* Charts row */}
      <div className="flex gap-2 flex-1">
        {/* Volume concentration */}
        <div className="flex-1 flex flex-col">
          <div className="text-[6px] font-mono text-blue/60 uppercase tracking-wider mb-1.5">Concentration</div>
          <div className="flex flex-col gap-1">
            {[85, 62, 45, 70, 38, 55, 30].map((w, i) => (
              <div key={i} className="flex items-center gap-1">
                <MockText width="24px" opacity="bg-black/6" />
                <div className="flex-1 flex items-center gap-0.5">
                  <div className="h-1.5 bg-blue/20 rounded-full" style={{ width: `${w}%` }} />
                  <div className="h-1.5 bg-black/5 rounded-full" style={{ width: `${100 - w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donut chart */}
        <div className="w-[72px] flex flex-col items-center justify-center">
          <div className="text-[6px] font-mono text-blue/60 uppercase tracking-wider mb-1 self-start">New vs Return</div>
          <svg viewBox="0 0 36 36" className="w-14 h-14">
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="4" />
            <circle
              cx="18" cy="18" r="14" fill="none"
              stroke="rgba(0,0,255,0.4)" strokeWidth="4"
              strokeDasharray="22 88" strokeDashoffset="25"
              strokeLinecap="round"
            />
            <circle
              cx="18" cy="18" r="14" fill="none"
              stroke="rgba(0,0,255,0.15)" strokeWidth="4"
              strokeDasharray="66 88" strokeDashoffset="3"
              strokeLinecap="round"
            />
            <text x="18" y="17" textAnchor="middle" className="fill-black/50" style={{ fontSize: "5px", fontFamily: "var(--font-mono)" }}>71.3K</text>
            <text x="18" y="21.5" textAnchor="middle" className="fill-black/25" style={{ fontSize: "3.5px", fontFamily: "var(--font-mono)" }}>Active</text>
          </svg>
          <div className="flex gap-1.5 mt-1 text-[5px] font-mono text-black/30">
            <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full bg-blue/40" />78%</span>
            <span className="flex items-center gap-0.5"><span className="w-1 h-1 rounded-full bg-blue/15" />22%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 5. User Detail Mockup
//    Based on: Users detail panel — wallet stats + volume chart
//    Used for: Perps solution card
// =============================================================================
export function UserDetailMockup() {
  const bars = [4, 7, 3, 9, 12, 8, 6, 11, 5, 14, 10, 7, 4, 8, 11, 6, 9, 3, 7, 5];
  const maxBar = Math.max(...bars);

  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Wallet header */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="font-mono text-[8px] text-blue/70">CyaE...a54o</div>
        <div className="flex items-center gap-0.5 px-1 py-0.5 bg-blue/5 rounded-sm text-[5px] font-mono text-blue/50">Active</div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-1 mb-2">
        <MockStatCard value="$977.2K" label="Volume" />
        <MockStatCard value="$52.8K" label="Earned" />
        <MockStatCard value="6K" label="Txns" />
        <MockStatCard value="$12.1K" label="Epoch Vol." />
      </div>

      {/* Volume chart */}
      <div className="flex-1 flex flex-col">
        <div className="text-[6px] font-mono text-black/30 uppercase tracking-wider mb-1">Volume</div>
        <div className="flex-1 flex items-end gap-[2px] px-0.5">
          {bars.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[1px]"
              style={{
                height: `${(v / maxBar) * 100}%`,
                backgroundColor: `rgba(0,0,255,${0.25 + (v / maxBar) * 0.5})`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-[5px] font-mono text-black/20 px-0.5">
          <span>1/19</span>
          <span>1/29</span>
          <span>2/8</span>
          <span>2/13</span>
        </div>
      </div>

      {/* Rewards section */}
      <div className="mt-1.5 pt-1.5 border-t border-black/5">
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-mono text-black/30">Rewards Claimed</span>
          <span className="text-[8px] font-mono font-semibold text-blue/70">$52,799</span>
        </div>
        <div className="mt-0.5 h-1 bg-black/5 rounded-full overflow-hidden">
          <div className="h-full bg-blue/40 rounded-full" style={{ width: "98%" }} />
        </div>
        <div className="text-[5px] font-mono text-black/20 mt-0.5">98% claimed</div>
      </div>
    </div>
  );
}

// =============================================================================
// 6. Campaign Dashboard Mockup
//    Based on: Home dashboard — campaign overview with AI chat
//    Used for: Playbook cards, case study card
// =============================================================================
export function CampaignDashboardMockup() {
  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      {/* Campaign header */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue/60" />
        <div className="font-mono text-[7px] text-black/50 truncate">Winners Arc: Trading Rewards</div>
      </div>

      {/* Stats row */}
      <div className="flex gap-1.5 mb-2">
        <MockStatCard value="$218M" label="All-time Vol." />
        <MockStatCard value="2.9M" label="Trades" />
        <MockStatCard value="76.5K" label="Users" />
      </div>

      {/* Mini bars */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="text-[6px] font-mono text-black/30 uppercase tracking-wider">Epoch Performance</div>
        {[
          { label: "E8", reach: 65, budget: 78 },
          { label: "E7", reach: 44, budget: 56 },
          { label: "E6", reach: 50, budget: 57 },
          { label: "E5", reach: 57, budget: 78 },
        ].map((e) => (
          <div key={e.label} className="flex items-center gap-1.5">
            <span className="font-mono text-[6px] text-black/30 w-4">{e.label}</span>
            <div className="flex-1 flex gap-0.5">
              <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue/50 rounded-full" style={{ width: `${e.reach}%` }} />
              </div>
              <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue/30 rounded-full" style={{ width: `${e.budget}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI prompt hint */}
      <div className="mt-2 pt-1.5 border-t border-black/5">
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-black/[0.02] rounded-[2px] border border-black/5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue/20 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue/60" />
          </div>
          <span className="font-mono text-[6px] text-black/25 italic">How can we drive growth today?</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 7. Retention Matrix Mockup
//    Based on: Torque AI — cohort retention heatmap
//    Used for: AI Insights card alternative
// =============================================================================
export function RetentionMatrixMockup() {
  const matrix = [
    [100, 34, 28, 22, 18, 15],
    [100, 31, 25, 20, 16, 0],
    [100, 29, 22, 18, 0, 0],
    [100, 33, 26, 0, 0, 0],
    [100, 30, 0, 0, 0, 0],
    [100, 0, 0, 0, 0, 0],
  ];

  return (
    <div className="w-full h-full flex flex-col p-3 pt-2 text-[7px] select-none pointer-events-none">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-blue/20 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-blue/60" />
        </div>
        <div className="font-mono text-[7px] text-black/50">Cohort Retention Analysis</div>
      </div>

      <MockStatCard value="68,686" label="Total Unique Traders" />

      {/* Heatmap header */}
      <div className="grid grid-cols-7 gap-[2px] mt-2 mb-1 text-[5px] font-mono text-black/25">
        <span></span>
        {["E+0", "E+1", "E+2", "E+3", "E+4", "E+5"].map(l => <span key={l} className="text-center">{l}</span>)}
      </div>

      {/* Heatmap rows */}
      <div className="flex flex-col gap-[2px]">
        {matrix.map((row, ri) => (
          <div key={ri} className="grid grid-cols-7 gap-[2px]">
            <span className="text-[5px] font-mono text-black/25 flex items-center">E{ri + 1}</span>
            {row.map((val, ci) => (
              <div
                key={ci}
                className="aspect-[2/1] rounded-[1px] flex items-center justify-center"
                style={{
                  backgroundColor: val === 0 ? "rgba(0,0,0,0.02)" : `rgba(0,0,255,${Math.max(0.05, val / 120)})`,
                }}
              >
                {val > 0 && <span className="text-[4.5px] font-mono" style={{ color: val > 50 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.4)" }}>{val}%</span>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Average retention */}
      <div className="mt-auto pt-1.5 border-t border-black/5 flex items-center justify-between text-[6px] font-mono text-black/30">
        <span>Avg. Retention E+1</span>
        <span className="text-blue/70 font-medium">31.4%</span>
      </div>
    </div>
  );
}
