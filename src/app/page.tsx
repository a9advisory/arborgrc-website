"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FileSpreadsheet,
  ClipboardCheck,
  AlertTriangle,
  Building2,
  BarChart3,
  Shield,
  Check,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ─── Animation variant shared across sections ───────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function staggerVariant(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay },
    },
  };
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    title: "Version chaos",
    body: "Risk_Register_v3_FINAL_Amit.xlsx — sound familiar? Multiple copies in email, no single source of truth, and nobody quite sure which version the auditor should see.",
  },
  {
    title: "Audit scramble",
    body: "The auditor asks for evidence. Your team scrambles through shared drives, inboxes, and Slack messages. You find it, eventually — but it takes two days you didn't have.",
  },
  {
    title: "Framework fatigue",
    body: "ISO 27001 done. Now add UAE-IA, SOC 2, DPDP Act. Each framework means another spreadsheet, another column mapping exercise, more work for the same team.",
  },
] as const;

interface FeatureCard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: FileSpreadsheet,
    title: "Excel Import & Export",
    body: "Bring your existing SoA and risk registers. ArborGRC reads your Excel files, maps the columns, and structures the data — without losing a single row. Export anytime.",
  },
  {
    icon: ClipboardCheck,
    title: "Statement of Applicability",
    body: "ISO 27001, UAE-IA, or any framework. Controls organized by domain, applicability and justification editable inline, implementation status tracked end-to-end.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Register",
    body: "Manage risks with a 5×5 heat map, treatment plans, and owner assignments. Link risks directly to controls. See your overall exposure at a glance, not buried in rows.",
  },
  {
    icon: Building2,
    title: "Third-Party Risk (TPRM)",
    body: "Onboard vendors with structured questionnaires. Track contract status, SLA compliance, and run annual assessments without chasing email threads.",
  },
  {
    icon: BarChart3,
    title: "Gap Analysis",
    body: "Select a framework, see exactly which requirements are covered, which controls are missing, and what needs attention before your next audit cycle starts.",
  },
  {
    icon: Shield,
    title: "Unified Control Framework",
    body: "Map one control to multiple frameworks. Implement once, satisfy requirements across ISO 27001, UAE-IA, and SOC 2 simultaneously. No more duplicate work.",
  },
];

const FRAMEWORKS = [
  {
    name: "ISO 27001:2022",
    badge: "ISO 27001",
    stat: "93 Annex A controls",
    desc: "The global standard for information security management systems. Most enterprise procurement teams ask for this first.",
  },
  {
    name: "UAE-IA (NESA)",
    badge: "UAE-IA",
    stat: "195+ controls",
    desc: "Mandatory for UAE government entities and critical national infrastructure operators. Rigorous and well-structured.",
  },
  {
    name: "ISO 31000",
    badge: "ISO 31000",
    stat: "Risk framework",
    desc: "International guidelines for enterprise risk management. Pairs naturally with ISO 27001 for integrated risk programs.",
  },
  {
    name: "ITIL 4",
    badge: "ITIL 4",
    stat: "34 practices",
    desc: "IT service management best practices adopted globally. Useful for teams managing service delivery alongside compliance.",
  },
] as const;

const STARTER_FEATURES = [
  "1 framework",
  "50 controls",
  "Excel import & export",
  "2 users",
  "Community support",
] as const;

const PRO_FEATURES = [
  "All frameworks",
  "Unlimited controls",
  "TPRM module",
  "Gap analysis",
  "Up to 10 users",
  "Priority support",
] as const;

const ENTERPRISE_FEATURES = [
  "Everything in Professional",
  "SSO / SAML",
  "API access",
  "Custom frameworks",
  "Dedicated support",
  "Data residency options",
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
            {/* Left — copy (55%) */}
            <motion.div
              className="md:w-[55%]"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] mb-5"
                style={{ color: "#15803d", textTransform: "uppercase" }}
              >
                Governance · Risk · Compliance
              </p>

              <h1
                className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Your compliance team deserves better than spreadsheets.
              </h1>

              <p className="text-lg text-stone-600 mb-8 max-w-xl leading-relaxed">
                ArborGRC replaces the Excel files your team is drowning in —
                Statement of Applicability, risk registers, vendor assessments —
                with a structured platform that actually saves time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white transition-colors duration-150"
                  style={{ backgroundColor: "#15803d", borderRadius: "4px" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#166534")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#15803d")
                  }
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-green-700 border border-green-700 transition-colors duration-150 hover:bg-green-50"
                  style={{ borderRadius: "4px" }}
                >
                  See it in action
                </Link>
              </div>
            </motion.div>

            {/* Right — mock dashboard (45%) */}
            <motion.div
              className="md:w-[45%]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            >
              <div
                className="bg-white border border-stone-200 p-6"
                style={{ borderRadius: "6px" }}
              >
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-stone-100">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1">
                      Compliance Overview
                    </p>
                    <p className="text-xs text-stone-500">Last updated 2 hours ago</p>
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1"
                    style={{ backgroundColor: "#f0fdf4", color: "#15803d", borderRadius: "3px" }}
                  >
                    Live
                  </span>
                </div>

                {/* Metric row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-stone-50 border border-stone-200 p-3" style={{ borderRadius: "4px" }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Score
                    </p>
                    <p className="text-2xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      72%
                    </p>
                    <p className="text-[10px] text-green-600 mt-1 font-medium">+4% this month</p>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 p-3" style={{ borderRadius: "4px" }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Open Risks
                    </p>
                    <p className="text-2xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      7
                    </p>
                    <p className="text-[10px] text-amber-600 mt-1 font-medium">3 need review</p>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 p-3" style={{ borderRadius: "4px" }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                      Vendors
                    </p>
                    <p className="text-2xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      14
                    </p>
                    <p className="text-[10px] text-stone-400 mt-1 font-medium">2 pending</p>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-3 mb-5">
                  {[
                    { label: "ISO 27001", pct: 78 },
                    { label: "UAE-IA", pct: 61 },
                    { label: "ISO 31000", pct: 84 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-medium text-stone-600">{label}</span>
                        <span className="text-[11px] text-stone-400">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, backgroundColor: "#15803d" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Framework tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                  {["ISO 27001", "UAE-IA", "ISO 31000"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 border border-stone-200 text-stone-500"
                      style={{ borderRadius: "3px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Pain Points ──────────────────────────────────────── */}
        <section className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] mb-4"
                style={{ color: "#15803d", textTransform: "uppercase" }}
              >
                The Problem
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 max-w-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
              >
                You&rsquo;re managing compliance in Excel. We&rsquo;ve been there.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PAIN_POINTS.map(({ title, body }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerVariant(i * 0.1)}
                  className="bg-white border border-stone-200 p-6"
                  style={{ borderLeft: "3px solid #bbf7d0", borderRadius: "4px" }}
                >
                  <h3
                    className="text-base font-semibold text-stone-900 mb-3"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Features ─────────────────────────────────────────── */}
        <section id="features" className="border-t border-stone-200">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-12"
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] mb-4"
                style={{ color: "#15803d", textTransform: "uppercase" }}
              >
                What ArborGRC Does
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 max-w-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
              >
                Built for how compliance teams actually work.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FEATURES.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerVariant((i % 2) * 0.08)}
                  className="bg-white border border-stone-200 p-6 flex gap-5"
                  style={{ borderRadius: "4px" }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center w-12 h-12"
                    style={{ backgroundColor: "#f0fdf4", borderRadius: "50%" }}
                  >
                    <Icon size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold text-stone-900 mb-2"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Frameworks ───────────────────────────────────────── */}
        <section id="frameworks" className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-12"
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] mb-4"
                style={{ color: "#15803d", textTransform: "uppercase" }}
              >
                Frameworks We Support
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 max-w-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
              >
                Start with the frameworks that matter to you.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FRAMEWORKS.map(({ name, badge, stat, desc }, i) => (
                <motion.div
                  key={name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerVariant(i * 0.08)}
                  className="bg-white border border-stone-200 p-6 flex flex-col gap-3"
                  style={{ borderTop: "3px solid #15803d", borderRadius: "4px" }}
                >
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 w-fit"
                    style={{ backgroundColor: "#f0fdf4", color: "#15803d", borderRadius: "3px" }}
                  >
                    {badge}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-stone-400 mb-1">{stat}</p>
                    <h3
                      className="text-base font-semibold text-stone-900 mb-2"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Who It's For ─────────────────────────────────────── */}
        <section className="border-t border-stone-200">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 max-w-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
              >
                Built for compliance teams in India and the UAE.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  role: "CISOs & IS Managers",
                  body: "You need board-level reporting, framework coverage dashboards, and a single view of your organization's compliance posture. ArborGRC gives you that — without a six-month implementation project.",
                },
                {
                  role: "Compliance Analysts",
                  body: "You need to stop copy-pasting between spreadsheets and chasing control owners on email. ArborGRC gives you structured workflows, inline editing, and Excel export for the moments you still need it.",
                },
              ].map(({ role, body }, i) => (
                <motion.div
                  key={role}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={staggerVariant(i * 0.1)}
                  className="bg-white border border-stone-200 p-7"
                  style={{ borderRadius: "4px" }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#15803d" }}
                  >
                    {role}
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-sm text-stone-500"
            >
              <span className="font-medium text-stone-600">Also used by:</span>{" "}
              Internal Auditors · GRC Consultants · DPOs · IT Risk Managers
            </motion.p>
          </div>
        </section>

        {/* ── Section 6: Pricing ──────────────────────────────────────────── */}
        <section id="pricing" className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-12"
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] mb-4"
                style={{ color: "#15803d", textTransform: "uppercase" }}
              >
                Pricing
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
              >
                Simple pricing. No surprises.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Starter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerVariant(0)}
                className="bg-white border border-stone-200 p-7 flex flex-col"
                style={{ borderRadius: "4px" }}
              >
                <h3
                  className="text-lg font-semibold text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Starter
                </h3>
                <p className="text-sm text-stone-500 mb-5">For teams getting started with structured GRC</p>
                <p className="text-3xl font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Free
                </p>
                <p className="text-xs text-stone-400 mb-7">No credit card needed</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {STARTER_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium border border-stone-200 text-stone-700 hover:border-green-700 hover:text-green-700 transition-colors duration-150"
                  style={{ borderRadius: "4px" }}
                >
                  Get started free
                </Link>
              </motion.div>

              {/* Professional — highlighted */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerVariant(0.08)}
                className="bg-white p-7 flex flex-col relative"
                style={{ border: "2px solid #15803d", borderRadius: "4px" }}
              >
                <span
                  className="absolute -top-3 left-6 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 text-white"
                  style={{ backgroundColor: "#15803d", borderRadius: "3px" }}
                >
                  Most Popular
                </span>
                <h3
                  className="text-lg font-semibold text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Professional
                </h3>
                <p className="text-sm text-stone-500 mb-5">For growing compliance teams</p>
                <p className="text-3xl font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  $29
                </p>
                <p className="text-xs text-stone-400 mb-7">per user / month, billed annually</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {PRO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white transition-colors duration-150"
                  style={{ backgroundColor: "#15803d", borderRadius: "4px" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#166534")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#15803d")
                  }
                >
                  Start free trial
                </Link>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerVariant(0.16)}
                className="bg-white border border-stone-200 p-7 flex flex-col"
                style={{ borderRadius: "4px" }}
              >
                <h3
                  className="text-lg font-semibold text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Enterprise
                </h3>
                <p className="text-sm text-stone-500 mb-5">For organizations with complex requirements</p>
                <p className="text-3xl font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Custom
                </p>
                <p className="text-xs text-stone-400 mb-7">Tailored to your headcount and scope</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {ENTERPRISE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium border border-stone-200 text-stone-700 hover:border-green-700 hover:text-green-700 transition-colors duration-150"
                  style={{ borderRadius: "4px" }}
                >
                  Talk to us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 7: CTA ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#15803d" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-[1200px] px-6 py-20 md:py-24 flex flex-col items-start gap-6"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white max-w-2xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
            >
              Ready to move beyond spreadsheets?
            </h2>
            <p className="text-lg text-green-100 max-w-xl leading-relaxed">
              Start free. Import your existing Excel files. See the difference in
              10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/trial"
                className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-green-700 bg-white transition-colors duration-150 hover:bg-green-50"
                style={{ borderRadius: "4px" }}
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white border border-white/50 transition-colors duration-150 hover:border-white hover:bg-white/10"
                style={{ borderRadius: "4px" }}
              >
                Talk to us
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

