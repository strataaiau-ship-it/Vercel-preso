"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Newspaper, Bot, Code2, Layers, ChevronLeft, ChevronRight, Star, Rocket } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const salesPlays = [
  {
    badge: "PLAY 1",
    specialBadge: null,
    icon: ShoppingCart,
    title: "Ecommerce Performance",
    headline: "Every 100ms delay = 1% conversion drop",
    subhead: "High-traffic retailers lose $2.6B annually from slow pages",
    targetProfile: [
      "High-traffic ecommerce ($50M+ GMV)",
      "Peak traffic concerns (seasonal, flash sales)",
      "Headless commerce initiatives",
      "Conversion-sensitive P&L owners",
    ],
    targets: "The Iconic, Kogan, Adore Beauty, Cotton On, JB Hi-Fi, Catch, Temple & Webster",
    pitch: "Your site handles 10M monthly visits. At your traffic, a 100ms improvement = $X million in annual revenue. Here's how we helped PAIGE increase revenue 22% and conversions 76%.",
    proofPoints: [
      { customer: "Helly Hansen", result: "80% YoY growth", impact: "Peak traffic handled" },
      { customer: "PAIGE", result: "+22% revenue, +76% conversions", impact: "Speed drove checkout" },
      { customer: "GRB", result: "100% uptime, 10x faster", impact: "Zero Black Friday downtime" },
    ],
    dealSize: "$100-300K",
    cycle: "3-6 months",
    buyer: "CTO / VP Engineering",
  },
  {
    badge: "PLAY 2",
    specialBadge: null,
    icon: Newspaper,
    title: "Media & Publishing",
    headline: "CrUX scores = Ad revenue + Google rankings",
    subhead: "Public Core Web Vitals data is your ammunition",
    targetProfile: [
      "High-traffic publishers (5M+ monthly visits)",
      "Ad-revenue dependent models",
      "Frequent content updates (news cycles)",
      "SEO-sensitive traffic acquisition",
    ],
    targets: "Nine Entertainment, News Corp AU, Domain, REA Group, Pedestrian Group, Broadsheet, Concrete Playground",
    pitch: "I looked up Domain's CrUX data - you're at [X] on LCP. That's costing you ad revenue and Google rankings. Morning Brew improved to 2.5x revenue after optimizing.",
    proofPoints: [
      { customer: "Morning Brew", result: "2.5x revenue", impact: "Ad viewability + SEO gains" },
      { customer: "Devolver", result: "73% faster ships", impact: "Editorial velocity increased" },
      { customer: "Various", result: "300% organic clicks", impact: "SEO-driven traffic growth" },
    ],
    dealSize: "$100-300K",
    cycle: "4-6 months",
    buyer: "CTO / VP Product",
  },
  {
    badge: "PLAY 3",
    specialBadge: "ENTERPRISE WEDGE",
    specialIcon: Star,
    icon: Bot,
    title: "B2B AI Agents",
    headline: "10 SDRs -> 1 overseer, flat conversion",
    subhead: "Large B2B sales orgs spend $150K+ per SDR annually",
    targetProfile: [
      "Large B2B sales organizations (50+ SDRs)",
      "High inbound lead volume",
      "Complex qualification requirements",
      "Customer support cost pressure",
    ],
    targets: "CBA, Westpac, NAB, Macquarie, Telstra, Wesfarmers (B2B wholesale), Optus, IAG",
    pitch: "You have 80 SDRs handling inbound. At $150K fully loaded, that's $12M annually. We've seen AI agents handle the same volume with 10% of the headcount and identical conversion rates. Want to see the Lead Agent template?",
    whyThisWorks: [
      "Low risk: Internal tooling, not customer-facing",
      "High visibility: Directly tied to sales efficiency",
      "Executive sponsor: CRO/VP Sales owns outcome",
      "Expansion path: Support -> marketing -> external apps",
    ],
    proofPoints: [],
    dealSize: "$150-500K",
    cycle: "6-9 months",
    buyer: "CRO / VP Sales",
  },
  {
    badge: "PLAY 4",
    specialBadge: null,
    icon: Code2,
    title: "SaaS AI Enablement",
    headline: "6 months of AI infrastructure -> 2 weeks",
    subhead: "Every SaaS needs AI features, but building is slow",
    targetProfile: [
      "SaaS companies adding AI features",
      "Strong engineering teams wanting speed",
      "Customer-facing AI needs (chat, agents, workflows)",
      "Competitive pressure to ship AI",
    ],
    targets: "Canva, Atlassian, Xero, MYOB, ServiceM8, Employment Hero, SafetyCulture, Culture Amp",
    pitch: "Canva's competitors are shipping AI features every month. With AI SDK, you go from idea to production AI in 2 weeks, not 6 months. Here's the template library - agents, chat, workflows, all production-ready.",
    valueProps: [
      "AI SDK: Production-ready templates",
      "Streaming: Native real-time AI responses",
      "Edge deployment: Low-latency AI globally",
    ],
    proofPoints: [],
    dealSize: "$100-200K",
    cycle: "2-4 months",
    buyer: "CTO / VP Engineering",
  },
  {
    badge: "PLAY 5",
    specialBadge: "DISTRIBUTION PLAY",
    specialIcon: Rocket,
    icon: Layers,
    title: "V0 White-Label",
    headline: "$15M ProServ spend -> Self-serve tooling",
    subhead: "Enterprises spend $5-20M annually on internal tools",
    targetProfile: [
      "Large enterprises with heavy ProServ spend",
      "Internal tools backlog (100+ requests)",
      "Developer productivity initiatives",
      "Platform engineering teams",
    ],
    targets: "Atlassian (internal tools), SimPRO (local instances), Telstra (operational dashboards), Banks (compliance tools), Mining (field apps)",
    pitch: "Atlassian spends $15M annually on internal tools built by consultants. What if your developers could build those same tools in days? V0 white-label lets you embed our AI builder into your platform.",
    whyStrategic: [
      "Distribution multiplier: Each deployment = 1000s of users",
      "Sticky: Embedded in developer workflow",
      "Expansion: Internal -> customer-facing -> platform fees",
    ],
    proofPoints: [],
    dealSize: "$200-500K+",
    cycle: "6-12 months",
    buyer: "CIO / Platform Lead",
  },
];

const summaryTable = [
  { play: "Ecommerce", segment: "Retailers $50M+ GMV", buyer: "CTO", dealSize: "$100-300K", cycle: "3-6 mo" },
  { play: "Media", segment: "Publishers 5M+ visits", buyer: "CTO", dealSize: "$100-300K", cycle: "4-6 mo" },
  { play: "B2B AI Agents", segment: "Enterprise 50+ SDRs", buyer: "CRO", dealSize: "$150-500K", cycle: "6-9 mo" },
  { play: "SaaS AI", segment: "SaaS adding AI", buyer: "CTO", dealSize: "$100-200K", cycle: "2-4 mo" },
  { play: "V0 White-Label", segment: "ProServ heavy", buyer: "CIO", dealSize: "$200-500K+", cycle: "6-12 mo" },
];

export function SalesPlaysSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-advance
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 ml-[60px] py-12">
      <div className="max-w-7xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-8 text-center"
        >
          Sales Plays
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {salesPlays.map((play, index) => (
                <div
                  key={play.title}
                  className="flex-[0_0_70%] min-w-0"
                >
                  <div className="bg-[#111111] border border-[#333333] rounded-xl p-8 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#0070F3]/10 flex items-center justify-center">
                          <play.icon className="w-7 h-7 text-[#0070F3]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 bg-[#0070F3] text-white text-xs font-medium rounded">
                              {play.badge}
                            </span>
                            {play.specialBadge && (
                              <span className="flex items-center gap-1 px-2 py-1 bg-[#F5A623] text-black text-xs font-medium rounded">
                                {play.specialIcon && <play.specialIcon className="w-3 h-3" />}
                                {play.specialBadge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-[24px] font-semibold text-white">{play.title}</h3>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-[#50E3C2] font-medium">{play.dealSize}</p>
                        <p className="text-[#888888]">{play.cycle}</p>
                        <p className="text-[#0070F3]">{play.buyer}</p>
                      </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-6">
                      <p className="text-[20px] text-white font-medium mb-1">{play.headline}</p>
                      <p className="text-[16px] text-[#888888]">{play.subhead}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">Target Profile</p>
                          <ul className="space-y-1">
                            {play.targetProfile.map((t) => (
                              <li key={t} className="text-[14px] text-[#888888] flex items-start gap-2">
                                <span className="text-[#0070F3] mt-0.5">-</span>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">ANZ Targets</p>
                          <p className="text-[14px] text-white">{play.targets}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">The Pitch</p>
                          <p className="text-[14px] text-[#888888] italic border-l-2 border-[#0070F3] pl-4">
                            "{play.pitch}"
                          </p>
                        </div>

                        {play.proofPoints.length > 0 && (
                          <div>
                            <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">Proof Points</p>
                            <div className="space-y-2">
                              {play.proofPoints.map((p) => (
                                <div key={p.customer} className="text-[14px]">
                                  <span className="text-white font-medium">{p.customer}:</span>{" "}
                                  <span className="text-[#50E3C2]">{p.result}</span>{" "}
                                  <span className="text-[#888888]">- {p.impact}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {play.whyThisWorks && (
                          <div>
                            <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">Why This Works as Enterprise Wedge</p>
                            <ul className="space-y-1">
                              {play.whyThisWorks.map((w) => (
                                <li key={w} className="text-[14px] text-[#888888] flex items-start gap-2">
                                  <span className="text-[#50E3C2]">-</span>
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {play.valueProps && (
                          <div>
                            <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">Key Value Props</p>
                            <ul className="space-y-1">
                              {play.valueProps.map((v) => (
                                <li key={v} className="text-[14px] text-[#888888] flex items-start gap-2">
                                  <span className="text-[#0070F3]">-</span>
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {play.whyStrategic && (
                          <div>
                            <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">Why This Is Strategic</p>
                            <ul className="space-y-1">
                              {play.whyStrategic.map((w) => (
                                <li key={w} className="text-[14px] text-[#888888] flex items-start gap-2">
                                  <span className="text-[#9333EA]">-</span>
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#111111] border border-[#333333] rounded-full flex items-center justify-center hover:border-[#0070F3] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#111111] border border-[#333333] rounded-full flex items-center justify-center hover:border-[#0070F3] transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {salesPlays.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-[#0070F3] w-8" : "bg-[#333333]"
              }`}
            />
          ))}
        </div>

        {/* Card Indicator */}
        <p className="text-center text-sm text-[#888888] mt-2">
          {selectedIndex + 1} / {salesPlays.length}
        </p>

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-[20px] font-semibold mb-4 text-center">Sales Play Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Play</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Segment</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Buyer</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Deal Size</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Cycle</th>
                </tr>
              </thead>
              <tbody>
                {summaryTable.map((row) => (
                  <tr key={row.play} className="hover:bg-[#111111] transition-colors">
                    <td className="px-4 py-3 text-white font-medium border border-[#333333]">{row.play}</td>
                    <td className="px-4 py-3 text-[#888888] border border-[#333333]">{row.segment}</td>
                    <td className="px-4 py-3 text-[#0070F3] border border-[#333333]">{row.buyer}</td>
                    <td className="px-4 py-3 text-[#50E3C2] font-medium border border-[#333333]">{row.dealSize}</td>
                    <td className="px-4 py-3 text-[#888888] border border-[#333333]">{row.cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
